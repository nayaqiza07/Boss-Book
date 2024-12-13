import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panjang: 0,
  lebar: 0,
  persen: 0,
  total: 0,

  namaAksesoris: "",
  hargaAksesoris: 0,
  panjangAksesoris: 0,
  lebarAksesoris: 0,
  bagiAksesoris: 0,

  totalAksesoris: 0,
};

const aksesorisSlice = createSlice({
  name: "aksesoris",
  initialState,
  reducers: {
    setPanjang: (state, action) => {
      state.panjang = action.payload;
    },
    setLebar: (state, action) => {
      state.lebar = action.payload;
    },
    setPersen: (state, action) => {
      state.persen = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setNamaAksesoris: (state, action) => {
      state.namaAksesoris = action.payload;
    },
    setHargaAksesoris: (state, action) => {
      state.hargaAksesoris = action.payload;
    },
    setPanjangAksesoris: (state, action) => {
      state.panjangAksesoris = action.payload;
    },
    setLebarAksesoris: (state, action) => {
      state.lebarAksesoris = action.payload;
    },
    setBagiAksesoris: (state, action) => {
      state.bagiAksesoris = action.payload;
    },
    setTotalAksesoris: (state) => {
      state.totalAksesoris =
        (state.hargaAksesoris * state.panjangAksesoris * state.lebarAksesoris) /
        state.bagiAksesoris;
    },
  },
});

export const {
  setPanjang,
  setLebar,
  setPersen,
  setTotal,
  setNamaAksesoris,
  setHargaAksesoris,
  setPanjangAksesoris,
  setLebarAksesoris,
  setBagiAksesoris,
  setTotalAksesoris,
} = aksesorisSlice.actions;

export default aksesorisSlice.reducer;
