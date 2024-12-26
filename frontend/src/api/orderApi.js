import customAPI from "./axios.js";
import { toast } from "react-toastify";

// GET Data Order
export const getOrders = async (keyword, page) => {
  try {
    const response = await customAPI.get(
      `/order?client=${keyword}&page=${page}`
    );

    const res = response.data.data;
    const limitOrder = response.data.pagination.limitOrder;
    const totalDataOrder = response.data.pagination.totalDataOrder;
    const currentPage = response.data.pagination.page;
    const totalPage = response.data.pagination.totalPage;

    // return response.data.data;
    // console.log(res);
    return { res, limitOrder, totalDataOrder, currentPage, totalPage };
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
export const createOrder = async (
  client,
  date,
  status,
  items,
  image,
  total,
  jumlahPembayaran,
  jatuhTempo
) => {
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
    console.log(responseFileUpload.data.url);
    // console.log(image.map((img) => img.name));

    // Create ke dalam Transaksi (Jenis: Pemasukan, Kategori: Penjualan, Pembayaran: Non Tunai)
    // await customAPI.post("/transaksi", {
    //   client,
    //   keterangan: "Order Masuk",
    //   date,
    //   jenis: "Pemasukan",
    //   kategori: "Penjualan",
    //   jumlah: total,
    //   pembayaran: "nonTunai",
    //   jumlahPembayaran: jumlahPembayaran,
    //   jatuhTempo,
    // });
    // Create ke dalam Order
    // const data = await customAPI.post("/order", {
    //   client,
    //   date,
    //   status,
    //   items,
    //   // image: responseFileUpload.data.url,
    //   image,
    // });
    // toast.success("Berhasil menambahkan order");
    // console.log(data.data);
    // return data.data;
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
