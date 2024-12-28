import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  jenisKayuData: [
    { name: "Jati Kampung", _id: "Jati Kampung", perkalianJenisKayu: 17 },
    { name: "Jati Sulawesi", _id: "Jati Sulawesi", perkalianJenisKayu: 24 },
    { name: "Jati TPK", _id: "Jati TPK", perkalianJenisKayu: 28 },
    { name: "Mahoni", _id: "Mahoni", perkalianJenisKayu: 15 },
    { name: "Mindi", _id: "Mindi", perkalianJenisKayu: 15 },
  ],
  jenisKayu: "",
  perkalianJenisKayu: 1,

  materialKayu: [],
  totalKubikasi: 0,
  totalHargaKayu: 0,
};

const kayuSlice = createSlice({
  name: "kayu",
  initialState,
  reducers: {
    setJenisKayu: (state, action) => {
      state.jenisKayu = action.payload;
      const kayu = state.jenisKayuData.find(
        (kayu) => kayu._id === action.payload
      );
      if (kayu) {
        state.perkalianJenisKayu = kayu.perkalianJenisKayu;
      } else {
        state.perkalianJenisKayu = 1;
      }
    },
    addMaterialKayu: (state, action) => {
      const { sisi, panjang, lebar, tebal, jumlahSisi, jenisKayu } =
        action.payload;

      const hargaPerSisi =
        panjang * lebar * tebal * jumlahSisi * state.perkalianJenisKayu;
      const kubikasiPerSisi = (panjang * lebar * tebal * jumlahSisi) / 1000000;

      if (sisi && panjang && lebar && tebal && jumlahSisi && jenisKayu) {
        state.materialKayu.push({
          data: action.payload,
          kubikasiPerSisi,
          hargaPerSisi,
        });
        state.totalKubikasi += kubikasiPerSisi;
        state.totalHargaKayu += hargaPerSisi;
      } else {
        toast.error("Inputan harus diisi");
      }
    },
  },
});

export const { setJenisKayu, addMaterialKayu } = kayuSlice.actions;

export default kayuSlice.reducer;
