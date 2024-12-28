import asyncHandler from "../middlewares/asyncHandler.js";
import Transaksi from "../models/transaksiModel.js";

// CRUD
// Create Transaksi
export const createTransaksi = asyncHandler(async (req, res) => {
  const newTransaksi = await Transaksi.create(req.body);

  return res.status(201).json({
    message: "Transaksi berhasil di tambahkan",
    data: newTransaksi,
  });
});

export const getTransaksi = asyncHandler(async (req, res) => {
  // Req Query
  const queryObj = { ...req.query };

  // fungsi untuk mengabaikan jika ada req page dan limit
  const excludeField = ["page", "limit", "kategori"];
  excludeField.forEach((element) => delete queryObj[element]);

  // Search berdasarkan karakter kategori
  let query;
  if (req.query.kategori) {
    query = Transaksi.aggregate([
      {
        $lookup: {
          from: "clients",
          localField: "client",
          foreignField: "_id",
          as: "clientData",
        },
      },
      {
        $match: {
          kategori: { $regex: req.query.kategori, $options: "i" },
        },
      },
    ]);
  } else {
    query = Transaksi.aggregate(
      [
        {
          $lookup: {
            from: "clients",
            localField: "client",
            foreignField: "_id",
            as: "clientData",
          },
        },
      ],
      queryObj
    ).sort({ createdAt: -1 });
  }

  // Pagination
  const page = req.query.page * 1 || 1;
  const limitData = req.query.limit * 1 || 10;
  const skipData = (page - 1) * limitData;

  query = query.skip(skipData).limit(limitData);

  let countTransaksi = await Transaksi.countDocuments(queryObj);
  if (req.query.page) {
    if (skipData >= countTransaksi) {
      res.status(404);
      throw new Error("This page doesn't exist");
    }
  }

  const transaksi = await query;
  const totalPage = Math.ceil(countTransaksi / limitData);

  return res.status(201).json({
    message: "Seluruh Data Transaksi berhasil di tampilkan",
    data: transaksi,
    pagination: {
      limitTransaksi: limitData,
      totalDataTransaksi: countTransaksi,
      page,
      totalPage,
    },
  });
});

// Read All Transaksi without limit, page, name
export const getAllTransaksi = asyncHandler(async (req, res) => {
  // const allTransaksi = await Transaksi.find();
  const allTransaksi = await Transaksi.aggregate([
    {
      $lookup: {
        from: "clients",
        localField: "client",
        foreignField: "_id",
        as: "clientData",
      },
    },
  ]).sort({ createdAt: -1 });

  const resPemasukanNonTunai = allTransaksi.filter(
    (data) => data.jenis === "Pemasukan" && data.pembayaran === "nonTunai"
  );

  const resPengeluaranNonTunai = allTransaksi.filter(
    (data) => data.jenis === "Pengeluaran" && data.pembayaran === "nonTunai"
  );

  const historyPemasukan = allTransaksi.filter(
    (data) =>
      data.jenis === "Pemasukan" &&
      data.kategori === "Penjualan" &&
      data.jumlah === data.jumlahPembayaran
  );

  const historyPengeluaran = allTransaksi.filter(
    (data) =>
      data.jenis === "Pengeluaran" &&
      data.kategori === "Gaji Karyawan" &&
      data.jumlah === data.jumlahPembayaran
  );

  const totalIn = allTransaksi
    .filter((data) => data.jenis === "Pemasukan" && data.pembayaran === "tunai")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalOut = allTransaksi
    .filter(
      (data) => data.jenis === "Pengeluaran" && data.pembayaran === "tunai"
    )
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalTransaksi = totalIn - totalOut;
  const totalPersen = Math.floor(((totalIn - totalOut) / totalIn) * 100) || 0;

  const totalPenjualan = allTransaksi
    .filter(
      (data) => data.jenis === "Pemasukan" && data.kategori === "Penjualan"
    )
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalDiterima = allTransaksi
    .filter(
      (data) => data.jenis === "Pemasukan" && data.kategori === "Penjualan"
    )
    .map((data) => data.jumlahPembayaran)
    .reduce((data, num) => data + num, 0);

  const totalBelumDiterima = totalPenjualan - totalDiterima;

  const totalGajiKaryawan = allTransaksi
    .filter(
      (data) =>
        data.jenis === "Pengeluaran" && data.kategori === "Gaji Karyawan"
    )
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalDibayar = allTransaksi
    .filter(
      (data) =>
        data.jenis === "Pengeluaran" && data.kategori === "Gaji Karyawan"
    )
    .map((data) => data.jumlahPembayaran)
    .reduce((data, num) => data + num, 0);

  const totalBelumDibayar = totalGajiKaryawan - totalDibayar;

  // Income By Kategori
  const income = allTransaksi.filter(
    (data) => data.jenis === "Pemasukan" && data.pembayaran === "tunai"
  );

  const totalModal = income
    .filter((data) => data.kategori === "Modal")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalSales = income
    .filter((data) => data.kategori === "Penjualan")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalCommision = income
    .filter((data) => data.kategori === "Komisi")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalServicesRevenue = income
    .filter((data) => data.kategori === "Pendapatan Jasa")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  // Outcome By Kategori
  const outcome = allTransaksi.filter(
    (data) => data.jenis === "Pengeluaran" && data.pembayaran === "tunai"
  );

  const totalAccomodation = outcome
    .filter((data) => data.kategori === "Akomodasi")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalAds = outcome
    .filter((data) => data.kategori === "Iklan")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalEmployeeSalaries = income
    .filter((data) => data.kategori === "Gaji Karyawan")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalElectricity = outcome
    .filter((data) => data.kategori === "Listrik")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalTools = outcome
    .filter((data) => data.kategori === "Alat")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalRawMaterial = outcome
    .filter((data) => data.kategori === "Bahan Baku")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalAccessories = outcome
    .filter((data) => data.kategori === "Aksesoris")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalFoamFabric = outcome
    .filter((data) => data.kategori === "Foam & Fabric")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalPackaging = outcome
    .filter((data) => data.kategori === "Packaging")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  const totalOngkir = outcome
    .filter((data) => data.kategori === "Ongkos Kirim")
    .map((data) => data.jumlah)
    .reduce((data, num) => data + num, 0);

  return res.status(200).json({
    message: "Seluruh Data Transaksi berhasil di tampilkan",
    data: allTransaksi,
    resPemasukanNonTunai,
    resPengeluaranNonTunai,
    historyPemasukan,
    historyPengeluaran,
    totalTransaksi,
    totalPersen,
    totalIn,
    totalOut,
    totalPenjualan,
    totalDiterima,
    totalBelumDiterima,
    totalGajiKaryawan,
    totalDibayar,
    totalBelumDibayar,
    income,
    totalModal,
    totalSales,
    totalCommision,
    totalServicesRevenue,
    outcome,
    totalAccomodation,
    totalAds,
    totalEmployeeSalaries,
    totalElectricity,
    totalTools,
    totalRawMaterial,
    totalAccessories,
    totalFoamFabric,
    totalPackaging,
    totalOngkir,
  });
});

// Read Transaksi By Id
export const getTransaksiById = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const getTransaksiById = await Transaksi.findById(paramsId);

  return res.status(200).json({
    message: "Data Transaksi berhasil di tampilkan",
    data: getTransaksiById,
  });
});

// Update Transaksi
export const updateTransaksi = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  const updateTransaksi = await Transaksi.findByIdAndUpdate(
    paramsId,
    req.body,
    {
      runValidators: false,
      new: true,
    }
  );

  return res.status(200).json({
    message: "Data Transaksi berhasil di update",
    data: updateTransaksi,
  });
});

// Delete Transaksi
export const deleteTransaksi = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  await Transaksi.findByIdAndDelete(paramsId);

  return res.status(200).json({
    message: "Data Transaksi berhasil di hapus",
  });
});
