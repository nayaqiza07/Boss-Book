import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameAksesoris: "",
  hargaAksesoris: 0,

  items: [],

  total: 0,
};

const aksesorisSlice = createSlice({
  name: "aksesoris",
  initialState,
  reducers: {
    setNameAksesoris: (state, action) => {
      state.nameAksesoris = action.payload;
    },
    setHargaAksesoris: (state, action) => {
      state.hargaAksesoris = action.payload;
    },
    setItems: (state) => {
      state.items.push({
        name: state.nameAksesoris,
        harga: parseInt(state.hargaAksesoris),
      });
    },
    setTotal: (state) => {
      const item = state.items;
      const harga = item.map((i) => i.harga).reduce((i, num) => i + num, 0);
      state.total = harga;
    },
  },
});

export const { setNameAksesoris, setHargaAksesoris, setItems, setTotal } =
  aksesorisSlice.actions;

export default aksesorisSlice.reducer;
