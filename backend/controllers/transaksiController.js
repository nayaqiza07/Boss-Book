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
  const excludeField = ["page", "limit", "deskripsi"];
  excludeField.forEach((element) => delete queryObj[element]);

  // Search berdasarkan karatker nama
  let query;
  if (req.query.deskripsi) {
    query = Transaksi.find({
      deskripsi: { $regex: req.query.deskripsi, $options: "i" },
    });
  } else {
    query = Transaksi.find(queryObj);
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
  const allTransaksi = await Transaksi.find();

  const totalIn = allTransaksi
    .filter((data) => data.status === "In")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalOut = allTransaksi
    .filter((data) => data.status === "Out")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalTransaksi = totalIn - totalOut;
  const totalPersen = Math.floor(((totalIn - totalOut) / totalIn) * 100) || 0;

  // Income By Kategori
  const income = allTransaksi.filter((data) => data.status === "In");
  const totalSales = income
    .filter((data) => data.kategori === "Sales")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalCommision = income
    .filter((data) => data.kategori === "Commision")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalServicesRevenue = income
    .filter((data) => data.kategori === "Services Revenue")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  // Outcome By Kategori
  const outcome = allTransaksi.filter((data) => data.status === "Out");

  const totalAccomodation = outcome
    .filter((data) => data.kategori === "Accomodation")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalAds = outcome
    .filter((data) => data.kategori === "Ads")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalEmployeeSalaries = income
    .filter((data) => data.kategori === "Employee Salaries")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalElectricity = outcome
    .filter((data) => data.kategori === "Electricity")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalTools = outcome
    .filter((data) => data.kategori === "Tools")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalRawMaterial = outcome
    .filter((data) => data.kategori === "Raw Material")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalAccessories = outcome
    .filter((data) => data.kategori === "Accessories")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalFoamFabric = outcome
    .filter((data) => data.kategori === "Foam & Fabric")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalPackaging = outcome
    .filter((data) => data.kategori === "Packaging")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  return res.status(200).json({
    message: "Seluruh Data Transaksi berhasil di tampilkan",
    data: allTransaksi,
    totalTransaksi,
    totalPersen,
    totalIn,
    totalOut,
    income,
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
