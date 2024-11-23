import customAPI from "./axios.js";
import { toast } from "react-toastify";

// GET Data Client
export const getClients = async () => {
  try {
    const { data } = await customAPI.get("/client");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// GET Client By Id
export const getClientById = async (id) => {
  const { data } = await customAPI.get(`/client/${id}`);
  return data.data;
};

// POST Data Client
export const createClient = async (name, email, phone, address) => {
  try {
    const { data } = await customAPI.post("/client", {
      name,
      email,
      phone,
      address,
    });
    toast.success("Berhasil menambahkan client");
    return data.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};

// UPDATE Data Client
export const updateClient = async (id, name, email, phone, address) => {
  try {
    const { data } = await customAPI.put(`/client/${id}`, {
      name,
      email,
      phone,
      address,
    });
    toast.info("Berhasil update client");
    return data.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};

// DEL Data Client
export const deleteClient = async (id) => {
  try {
    const { data } = await customAPI.delete(`/client/${id}`);
    toast.success("Berhasil delete client");
    return data.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};
