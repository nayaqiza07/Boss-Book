import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keuntungan: 0,
  harga: 0,
  hargaJual: 0,
};

const hargaSlice = createSlice({
  name: "finishing",
  initialState,
  reducers: {
    setPersenKeuntungan: (state, action) => {
      state.keuntungan = action.payload;
    },
    setHarga: (state, action) => {
      state.harga = action.payload;
    },
    setHargaJual: (state, action) => {
      state.hargaJual = action.payload;
    },
  },
});

export const { setPersenKeuntungan, setHarga, setHargaJual } =
  hargaSlice.actions;

export default hargaSlice.reducer;
