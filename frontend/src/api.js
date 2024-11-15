import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const getClients = async () => {
  const response = await axios.get(`${apiUrl}/clients`);
  return response.data;
};
