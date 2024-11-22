import customAPI from "./axios.js";

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
// export const saveClient = async (name, email, phone, address) => {
//   try {
//     const response = await axios.post(`${apiUrl}/clients`, {
//       name,
//       email,
//       phone,
//       address,
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// UPDATE Data Client
// export const updateClient = async (id, name, email, phone, address) => {
//   try {
//     const response = await axios.patch(`${apiUrl}/clients/${id}`, {
//       name,
//       email,
//       phone,
//       address,
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// DEL Data Client
// export const deleteClient = async (id) => {
//   try {
//     const response = await axios.delete(`${apiUrl}/clients/${id}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
