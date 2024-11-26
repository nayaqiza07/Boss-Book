import customAPI from "./axios.js";
import { toast } from "react-toastify";

// GET Data Order
export const getOrders = async () => {
  try {
    const response = await customAPI.get("/order");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

// GET Order By Id
export const getOrderById = async (id) => {
  const response = await customAPI.get(`/order/${id}`);
  return response.data.data;
};

// POST Order
export const createOrder = async (orderNumber, client, date, status, items) => {
  try {
    const data = await customAPI.post("/order", {
      orderNumber,
      client,
      date,
      status,
      items,
    });
    toast.success("Berhasil menambahkan order");
    return data.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};

// GET Client Order
export const getClientOrder = async (id) => {
  try {
    const response = await customAPI.get(`/order/view/${id}`);
    // console.log(data.data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
