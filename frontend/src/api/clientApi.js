import customAPI from "./axios.js";
import { toast } from "react-toastify";

// GET Data Client
export const getClients = async (keyword, page) => {
  try {
    const response = await customAPI.get(
      `/client?name=${keyword}&page=${page}`
    );

    const client = response.data.data;
    const limitClient = response.data.pagination.limitClient;
    const totalClient = response.data.pagination.totalClient;
    const currentPage = response.data.pagination.page;
    const totalPage = response.data.pagination.totalPage;

    // console.log(client);
    return { client, limitClient, totalClient, currentPage, totalPage };
  } catch (error) {
    console.log(error);
  }
};

// GET Data allClient
export const getAllClients = async () => {
  try {
    const response = await customAPI.get(`/client/all`);

    const res = response.data.data;
    const resClient = res.filter((data) => data.role === "Client");
    const resKaryawan = res.filter((data) => data.role === "Karyawan");

    const totalContact = response.data.totalContact;
    const totalClient = response.data.totalClient;
    const totalKaryawan = response.data.totalKaryawan;

    // console.log({ totalContact, totalClient, totalKaryawan });

    return {
      res,
      resClient,
      resKaryawan,
      totalContact,
      totalClient,
      totalKaryawan,
    };
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
export const createClient = async (name, role, phone, address) => {
  try {
    const data = await customAPI.post("/client", {
      name,
      role,
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
