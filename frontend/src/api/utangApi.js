import customAPI from "./axios";
import { toast } from "react-toastify";

// CRUD

// Create Utang (POST)
export const createUtang = async (
  name,
  keterangan,
  date,
  total,
  jumlahDibayar
) => {
  try {
    const response = await customAPI.post("/utang", {
      name,
      keterangan,
      date,
      total,
      jumlahDibayar: jumlahDibayar || 0,
    });
    toast.success("Berhasil menambahkan data utang");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Read Utang (GET)
export const getUtang = async (keyword, page) => {
  try {
    const response = await customAPI.get(`/utang?name=${keyword}&page=${page}`);

    const res = response.data.data;

    const limitUtang = response.data.pagination.limitUtang;
    const totalDataUtang = response.data.pagination.totalDataUtang;
    const currentPage = response.data.pagination.page;
    const totalPage = response.data.pagination.totalPage;

    // console.log({ res, totalUtang, totalSudahDibayar, totalBelumDibayar });

    console.log(res);

    return {
      res,
      limitUtang,
      totalDataUtang,
      currentPage,
      totalPage,
    };
  } catch (error) {
    console.log(error);
  }
};

// Read Utang By Id (GET)
export const getAllUtang = async () => {
  try {
    const response = await customAPI.get(`/utang/all`);

    const totalUtang = response.data.totalUtang;
    const totalSudahDibayar = response.data.totalSudahDibayar;
    const totalBelumDibayar = response.data.totalBelumDibayar;
    // console.log(response.data.data);
    return { totalUtang, totalSudahDibayar, totalBelumDibayar };
  } catch (error) {
    console.log(error);
  }
};

// Read Utang By Id (GET)
export const getUtangById = async (id) => {
  try {
    const response = await customAPI.get(`/utang/${id}`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

// Update Utang (PUT)
export const updateUtang = async (id, jumlahDibayar) => {
  try {
    const response = await customAPI.put(`/utang/${id}`, { jumlahDibayar });
    toast.info("Berhasil update utang");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Delete Utang (DELETE)
export const deleteUtang = async (id) => {
  try {
    const response = await customAPI.delete(`/utang/${id}`);
    toast.success("Berhasil hapus data Utang");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
