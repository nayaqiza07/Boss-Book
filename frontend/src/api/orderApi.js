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
  // console.log(response.data.data);
  return response.data.data;
};

// POST Order
export const createOrder = async (client, date, status, items, image) => {
  try {
    const responseFileUpload = await customAPI.post(
      "/order/file-upload",
      {
        image: image,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    // console.log(responseFileUpload.data.url);

    const data = await customAPI.post("/order", {
      client,
      date,
      status,
      items,
      image: responseFileUpload.data.url,
    });
    toast.success("Berhasil menambahkan order");
    // console.log(data.data);
    return data.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
  }
};

// UPDATE Order
export const updateOrder = async (id, status) => {
  try {
    const data = await customAPI.put(`/order/${id}`, {
      status,
    });
    toast.info("Status order berhasil di update");
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
