import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  itemsBahanTambahan: [],

  totalBahanTambahan: 0,
};

const bahanTambahanSlice = createSlice({
  name: "bahanTambahan",
  initialState,
  reducers: {
    addBahanTambahan: (state, action) => {
      const { name, harga, panjang, lebar, bagi } = action.payload;
      const totalPerItem = (harga * panjang * lebar) / bagi;

      if (name && harga && panjang && lebar && bagi) {
        state.itemsBahanTambahan.push({ data: action.payload, totalPerItem });
        state.totalBahanTambahan += totalPerItem;
      } else {
        toast.error("Inputan tidak boleh kosong");
      }
    },
    removeBahanTambahan: (state, action) => {
      const { name } = action.payload;

      const index = state.itemsBahanTambahan.findIndex(
        (item) => item.data.name === name
      );

      if (index !== -1) {
        // Kurangi total harga
        state.totalBahanTambahan -=
          state.itemsBahanTambahan[index].totalPerItem;

        // Hapus aksesoris dari array
        state.itemsBahanTambahan.splice(index, 1);
      }
    },
  },
});

export const { addBahanTambahan, removeBahanTambahan } =
  bahanTambahanSlice.actions;

export default bahanTambahanSlice.reducer;
