import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panjang: 0,
  lebar: 0,
  rumus: 0,
  total: 0,

  jenisFinishingData: [
    { name: "Basic ML", value: "Basic ML", penjumlahanJenisFinishing: 0 },
    { name: "NC", value: "NC", penjumlahanJenisFinishing: 20 },
    { name: "Bleaching", value: "Bleaching", penjumlahanJenisFinishing: 20 },
    { name: "Duco Biasa", value: "Duco Biasa", penjumlahanJenisFinishing: 50 },
    { name: "Duco Bagus", value: "Duco Bagus", penjumlahanJenisFinishing: 75 },
    { name: "Lasur", value: "Lasur", penjumlahanJenisFinishing: 20 },
    { name: "PU", value: "PU", penjumlahanJenisFinishing: 50 },
    { name: "Take Oil", value: "Take Oil", penjumlahanJenisFinishing: 20 },
    { name: "Waterbased", value: "Waterbased", penjumlahanJenisFinishing: 25 },
  ],
  jenisFinishing: "",
  penjumlahanJenisFinishing: 0,

  gerinda: 0,
  packing: 0,
  hargaFinishing: 0,
};

const finishingSlice = createSlice({
  name: "finishing",
  initialState,
  reducers: {
    setPanjang: (state, action) => {
      state.panjang = action.payload;
      // state.total = state.panjang * state.lebar * state.persen;
    },
    setLebar: (state, action) => {
      state.lebar = action.payload;
      // state.total = state.panjang * state.lebar * state.persen;
    },
    setRumus: (state, action) => {
      state.rumus = action.payload;
      // state.total = state.panjang * state.lebar * state.persen;
    },
    setJenisFinishing: (state, action) => {
      state.jenisFinishing = action.payload;
      const finishing = state.jenisFinishingData.find(
        (Finishing) => Finishing.value === action.payload
      );
      if (finishing) {
        state.penjumlahanJenisFinishing = finishing.penjumlahanJenisFinishing;
      } else {
        state.penjumlahanJenisFinishing = 0;
      }
    },
    setHargaFinishing: (state) => {
      state.hargaFinishing = state.panjang * state.lebar * state.rumus;
    },
    setGerinda: (state) => {
      state.gerinda = state.hargaFinishing * (12 / 100);
    },
    setPacking: (state) => {
      state.packing = state.hargaFinishing * (10 / 100);
    },
    hitungTotal: (state) => {
      const tambahJenisFinishing =
        state.panjang *
        state.lebar *
        state.rumus *
        (state.penjumlahanJenisFinishing / 100);

      state.total =
        state.hargaFinishing +
        tambahJenisFinishing +
        state.gerinda +
        state.packing;
    },
  },
});

export const {
  setPanjang,
  setLebar,
  setRumus,
  setJenisFinishing,
  setHargaFinishing,
  setGerinda,
  setPacking,
  hitungTotal,
} = finishingSlice.actions;

export default finishingSlice.reducer;
