import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persenKeuntungan: 0,
  keuntungan: 0,
  hargaJual: 0,
  bagiHasil: 0,
};

const hargaSlice = createSlice({
  name: "finishing",
  initialState,
  reducers: {
    setPersenKeuntungan: (state, action) => {
      state.persenKeuntungan = action.payload;
    },
    setKeuntungan: (state, action) => {
      state.keuntungan = action.payload;
    },
    setHargaJual: (state, action) => {
      state.hargaJual = action.payload;
    },
    setBagiHasil: (state, action) => {
      state.bagiHasil = action.payload;
    },
  },
});

export const {
  setPersenKeuntungan,
  setHargaJual,
  setKeuntungan,
  setBagiHasil,
} = hargaSlice.actions;

export default hargaSlice.reducer;
