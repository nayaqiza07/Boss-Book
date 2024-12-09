import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panjang: 0,
  lebar: 0,
  persen: 0,
  total: 0,
};

const tukangKayuSlice = createSlice({
  name: "tukangKayu",
  initialState,
  reducers: {
    setPanjang: (state, action) => {
      state.panjang = action.payload;
      state.total = state.panjang * state.lebar * (state.persen / 100);
    },
    setLebar: (state, action) => {
      state.lebar = action.payload;
      state.total = state.panjang * state.lebar * (state.persen / 100);
    },
    setPersen: (state, action) => {
      state.persen = action.payload;
      state.total = state.panjang * state.lebar * (state.persen / 100);
    },
    hitungTotal: (state) => {
      state.total = state.panjang * state.lebar * (state.persen / 100);
    },
  },
});

export const { setPanjang, setLebar, setPersen, hitungTotal } =
  tukangKayuSlice.actions;

export default tukangKayuSlice.reducer;
