import customAPI from "./axios";
import { toast } from "react-toastify";

// CRUD

// Create Piutang (POST)
export const createPiutang = async (name, date, total, jumlahDiterima) => {
  try {
    const response = await customAPI.post("/piutang", {
      name,
      date,
      total,
      jumlahDiterima: jumlahDiterima || 0,
    });
    toast.success("Berhasil menambahkan data piutang");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Read Piutang (GET)
export const getPiutang = async () => {
  try {
    const response = await customAPI.get("/piutang");

    const res = response.data.data;
    const totalPiutang = response.data.totalPiutang;
    const totalSudahDiterima = response.data.totalSudahDiterima;
    const totalBelumDiterima = response.data.totalBelumDiterima;

    // console.log({ totalPiutang, totalSudahDiterima, totalBelumDiterima });
    return { res, totalPiutang, totalSudahDiterima, totalBelumDiterima };
  } catch (error) {
    console.log(error);
  }
};

// Read Piutang By Id (GET)
export const getPiutangById = async (id) => {
  try {
    const response = await customAPI.get(`/piutang/${id}`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

// Update Piutang (PUT)
export const updatePiutang = async (id, jumlahDiterima) => {
  try {
    const response = await customAPI.put(`/piutang/${id}`, { jumlahDiterima });
    toast.info("Berhasil update piutang");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Delete Piutang (DELETE)
export const deletePiutang = async (id) => {
  try {
    const response = await customAPI.delete(`/piutang/${id}`);
    toast.success("Berhasil hapus data Piutang");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
