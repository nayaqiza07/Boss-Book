import customAPI from "./axios.js";
import { toast } from "react-toastify";

// GET Data Client
export const getClients = async (page, limit) => {
  try {
    const response = await customAPI.get(`/client?page=${page}&limit=${limit}`);
    const client = response.data.data;
    const limitClient = response.data.pagination.limitClient;
    const totalClient = response.data.pagination.totalClient;
    const currentPage = response.data.pagination.page;
    const totalPage = response.data.pagination.totalPage;

    // console.log({ limitClient });
    // console.log(client, pagination, params);
    return { client, limitClient, totalClient, currentPage, totalPage };
  } catch (error) {
    console.log(error);
  }
};

// GET Client By Id
export const getClientById = async (id) => {
  const response = await customAPI.get(`/client/${id}`);
  return response.data.data;
};

// POST Data Client
export const createClient = async (name, email, phone, address) => {
  try {
    const data = await customAPI.post("/client", {
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
    const data = await customAPI.put(`/client/${id}`, {
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
    const data = await customAPI.delete(`/client/${id}`);
    toast.success("Berhasil delete client");
    return data.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};
