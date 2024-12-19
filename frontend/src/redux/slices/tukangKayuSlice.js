import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  kayu: [],
  totalTukangKayu: 0,
};

const tukangKayuSlice = createSlice({
  name: "tukangKayu",
  initialState,
  reducers: {
    addKayu: (state, action) => {
      const { name, panjang, lebar, rumus } = action.payload;

      const hargaKayu = panjang * lebar * rumus;

      if (name && panjang && lebar && rumus) {
        state.kayu.push({
          data: action.payload,
          hargaKayu,
        });
        state.totalTukangKayu += hargaKayu;
      } else {
        toast.error("Inputan harus di isi");
      }
    },
  },
});

export const { addKayu } = tukangKayuSlice.actions;

export default tukangKayuSlice.reducer;
