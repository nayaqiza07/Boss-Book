import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panjang: 0,
  lebar: 0,
  persen: 0,
  total: 0,

  jenisAksesorisData: [
    { name: "Marmer", value: "Marmer", perkalianJenisAksesoris: 20 },
    { name: "Kaca Polos", value: "Kaca Polos", perkalianJenisAksesoris: 20 },
    { name: "Kaca Cermin", value: "Bleaching", perkalianJenisAksesoris: 20 },
    { name: "Besi", value: "Besi", perkalianJenisAksesoris: 20 },
  ],
  jenisAksesoris: "",
  perkalianJenisAksesoris: 1,
};

const aksesorisSlice = createSlice({
  name: "aksesoris",
  initialState,
  reducers: {},
});

export const { setPanjang, setLebar, setPersen, hitungTotal } =
  aksesorisSlice.actions;

export default aksesorisSlice.reducer;
