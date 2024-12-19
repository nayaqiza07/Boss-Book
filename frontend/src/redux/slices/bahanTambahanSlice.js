import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  itemsMaterialTambahan: [],

  totalMaterialTambahan: 0,
};

const bahanTambahanSlice = createSlice({
  name: "bahanTambahan",
  initialState,
  reducers: {
    addBahanTambahan: (state, action) => {
      const { name, harga, panjang, lebar, bagi } = action.payload;
      const totalPerMaterialTambahan = (harga * panjang * lebar) / bagi;

      if (name && harga && panjang && lebar && bagi) {
        state.itemsMaterialTambahan.push({
          data: action.payload,
          totalPerMaterialTambahan,
        });
        state.totalMaterialTambahan += totalPerMaterialTambahan;
      } else {
        toast.error("Inputan tidak boleh kosong");
      }
    },
    removeBahanTambahan: (state, action) => {
      const { name } = action.payload;

      const index = state.itemsMaterialTambahan.findIndex(
        (item) => item.data.name === name
      );

      if (index !== -1) {
        // Kurangi total harga
        state.totalMaterialTambahan -=
          state.itemsMaterialTambahan[index].totalPerMaterialTambahan;

        // Hapus aksesoris dari array
        state.itemsMaterialTambahan.splice(index, 1);
      }
    },
  },
});

export const { addBahanTambahan, removeBahanTambahan } =
  bahanTambahanSlice.actions;

export default bahanTambahanSlice.reducer;
