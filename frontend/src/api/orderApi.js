import customAPI from "./axios.js";

// GET Data Order
export const getOrders = async () => {
  try {
    const { data } = await customAPI.get("/order");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// GET Order By Id
export const getOrderById = async (id) => {
  const { data } = await customAPI.get(`/order/${id}`);
  return data.data;
};
