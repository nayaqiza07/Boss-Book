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
export const getTransaksi = async () => {
  try {
    const response = await customAPI.get("/transaksi");

    const res = response.data.data;
    const totalTransaksi = response.data.totalTransaksi;
    const totalPersen = response.data.totalPersen;
    const totalIn = response.data.totalIn;
    const totalOut = response.data.totalOut;

    return { res, totalTransaksi, totalPersen, totalIn, totalOut };
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
