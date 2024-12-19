import customAPI from "./axios";
import { toast } from "react-toastify";

// CRUD

// Create Transaksi (POST)
export const createTransaksi = async (
  deskripsi,
  date,
  kategori,
  status,
  nominal
) => {
  try {
    const response = await customAPI.post("/transaksi", {
      deskripsi,
      date,
      kategori,
      status,
      nominal,
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
      `/transaksi?deskripsi=${keyword}&page=${page}`
    );

    const res = response.data.data;

    const limitTransaksi = response.data.pagination.limitTransaksi;
    const totalDataTransaksi = response.data.pagination.totalDataTransaksi;
    const currentPage = response.data.pagination.page;
    const totalPage = response.data.pagination.totalPage;

    console.log({ limitTransaksi, totalDataTransaksi, currentPage, totalPage });
    return { res, limitTransaksi, totalDataTransaksi, currentPage, totalPage };
  } catch (error) {
    console.log(error);
  }
};

// Read Transaksi (GET)
export const getAllTransaksi = async () => {
  try {
    const response = await customAPI.get("/transaksi/all");

    const res = response.data.data;
    const totalTransaksi = response.data.totalTransaksi;
    const totalPersen = response.data.totalPersen;
    const totalIn = response.data.totalIn;
    const totalOut = response.data.totalOut;

    // Income
    const resIncome = response.data.income;
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

    return {
      res,
      totalTransaksi,
      totalPersen,
      totalIn,
      totalOut,
      resIncome,
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

// Update Transaksi (PUT)
export const updateTransaksi = async (id, jumlahDiterima) => {
  try {
    const response = await customAPI.put(`/transaksi/${id}`, {
      jumlahDiterima,
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
