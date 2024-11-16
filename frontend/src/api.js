import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

// GET Data Client
export const getClients = async () => {
  const response = await axios.get(`${apiUrl}/clients`);
  return response.data;
};

// POST Data Client
export const saveClient = async (data) => {
  try {
    await axios.post(`${apiUrl}/clients`, {
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
