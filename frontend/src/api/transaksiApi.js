import customAPI from "./axios";
import { toast } from "react-toastify";

// CRUD

// Create Transaksi (POST)
export const createTransaksi = async (
  client,
  keterangan,
  date,
  jenis,
  kategori,
  jumlah,
  pembayaran,
  jatuhTempo
) => {
  try {
    const response = await customAPI.post("/transaksi", {
      client,
      keterangan,
      date,
      jenis,
      kategori,
      jumlah,
      pembayaran,
      jatuhTempo,
    });
    toast.success("Berhasil menambahkan data transaksi");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Read Transaksi (GET)
export const getTransaksi = async (keyword, page) => {
  try {
    const response = await customAPI.get(
      `/transaksi?kategori=${keyword}&page=${page}`
    );

    const res = response.data.data;

    const resTunai = res.filter((data) => data.pembayaran === "tunai");

    const resPengeluaranNonTunai = res.filter(
      (data) => data.pembayaran === "nonTunai" && data.jenis === "Pengeluaran"
    );

    const resPemasukanNonTunai = res.filter(
      (data) => data.pembayaran === "nonTunai" && data.jenis === "Pemasukan"
    );

    const limitTransaksi = response.data.pagination.limitTransaksi;
    const totalDataTransaksi = response.data.pagination.totalDataTransaksi;
    const currentPage = response.data.pagination.page;
    const totalPage = response.data.pagination.totalPage;

    // console.log({ limitTransaksi, totalDataTransaksi, currentPage, totalPage });
    // console.log({ res });
    return {
      res,
      resTunai,
      resPengeluaranNonTunai,
      resPemasukanNonTunai,
      limitTransaksi,
      totalDataTransaksi,
      currentPage,
      totalPage,
    };
  } catch (error) {
    console.log(error);
  }
};

// Read Transaksi (GET)
export const getAllTransaksi = async () => {
  try {
    const response = await customAPI.get("/transaksi/all");

    const res = response.data.data;

    const resPemasukanNonTunai = response.data.resPemasukanNonTunai;
    const resPengeluaranNonTunai = response.data.resPengeluaranNonTunai;

    const historyPemasukan = response.data.historyPemasukan;
    const historyPengeluaran = response.data.historyPengeluaran;

    const totalTransaksi = response.data.totalTransaksi;
    const totalPersen = response.data.totalPersen;
    const totalIn = response.data.totalIn;
    const totalOut = response.data.totalOut;

    const totalPenjualan = response.data.totalPenjualan;
    const totalDiterima = response.data.totalDiterima;
    const totalBelumDiterima = response.data.totalBelumDiterima;

    const totalGajiKaryawan = response.data.totalGajiKaryawan;
    const totalDibayar = response.data.totalDibayar;
    const totalBelumDibayar = response.data.totalBelumDibayar;

    // Income
    const resIncome = response.data.income;
    const totalModal = response.data.totalModal;
    const totalSales = response.data.totalSales;
    const totalCommision = response.data.totalCommision;
    const totalServicesRevenue = response.data.totalServicesRevenue;

    // Outcome
    const resOutcome = response.data.outcome;
    const totalAccomodation = response.data.totalAccomodation;
    const totalAds = response.data.totalAds;
    const totalEmployeeSalaries = response.data.totalEmployeeSalaries;
    const totalElectricity = response.data.totalElectricity;
    const totalTools = response.data.totalTools;
    const totalRawMaterial = response.data.totalRawMaterial;
    const totalAccessories = response.data.totalAccessories;
    const totalFoamFabric = response.data.totalFoamFabric;
    const totalPackaging = response.data.totalPackaging;
    const totalOngkir = response.data.totalOngkir;

    return {
      res,
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

      resIncome,
      totalModal,
      totalSales,
      totalCommision,
      totalServicesRevenue,

      resOutcome,
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
    };
  } catch (error) {
    console.log(error);
  }
};

// Read Transaksi By Id (GET)
export const getTransaksiById = async (id) => {
  try {
    const response = await customAPI.get(`/transaksi/${id}`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

// Update Transaksi Tunai (PUT)
export const updateTransaksiTunai = async (
  id,
  client,
  keterangan,
  jenis,
  kategori,
  jumlah,
  pembayaran,
  jatuhTempo
) => {
  try {
    const response = await customAPI.put(`/transaksi/${id}`, {
      client,
      keterangan,
      jenis,
      kategori,
      jumlah,
      pembayaran,
      jatuhTempo,
    });
    toast.info("Berhasil update transaksi");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Edit Transaksi Non Tunai (PUT)
export const editTransaksiNonTunai = async (
  id,
  client,
  keterangan,
  jenis,
  kategori,
  jumlah,
  pembayaran,
  jatuhTempo
) => {
  try {
    const response = await customAPI.put(`/transaksi/${id}`, {
      client,
      keterangan,
      jenis,
      kategori,
      jumlah,
      pembayaran,
      jatuhTempo,
    });
    toast.info("Berhasil update transaksi");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Update Transaksi Non Tunai (PUT)
export const updateTransaksiNonTunai = async (
  id,
  pembayaran,
  jumlahPembayaran
) => {
  try {
    const response = await customAPI.put(`/transaksi/${id}`, {
      pembayaran,
      jumlahPembayaran,
    });
    toast.info("Berhasil update transaksi");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Delete Transaksi (DELETE)
export const deleteTransaksi = async (id) => {
  try {
    const response = await customAPI.delete(`/transaksi/${id}`);
    toast.success("Berhasil hapus data Transaksi");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
