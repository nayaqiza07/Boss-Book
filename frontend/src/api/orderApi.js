import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

// GET Data Order
export const getOrders = async () => {
  try {
    const response = await axios.get(`${apiUrl}/orders`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
