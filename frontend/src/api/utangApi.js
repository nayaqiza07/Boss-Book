import customAPI from "./axios";
import { toast } from "react-toastify";

// CRUD

// Create Utang (POST)
export const createUtang = async (name, date, total, jumlahDibayar) => {
  try {
    const response = await customAPI.post("/utang", {
      name,
      date,
      total,
      jumlahDibayar,
    });
    toast.success("Berhasil menambahkan data utang");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Read Utang (GET)
export const getUtang = async () => {
  try {
    const response = await customAPI.get("/utang");
    return response.data.data;
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
