import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  jenisFinishingData: [
    { name: "Basic ML", _id: "Basic ML", penjumlahanJenisFinishing: 0 },
    { name: "NC", _id: "NC", penjumlahanJenisFinishing: 20 },
    { name: "Bleaching", _id: "Bleaching", penjumlahanJenisFinishing: 20 },
    { name: "Duco Biasa", _id: "Duco Biasa", penjumlahanJenisFinishing: 50 },
    { name: "Duco Bagus", _id: "Duco Bagus", penjumlahanJenisFinishing: 75 },
    { name: "Lasur", _id: "Lasur", penjumlahanJenisFinishing: 20 },
    { name: "PU", _id: "PU", penjumlahanJenisFinishing: 50 },
    { name: "Take Oil", _id: "Take Oil", penjumlahanJenisFinishing: 20 },
    { name: "Waterbased", _id: "Waterbased", penjumlahanJenisFinishing: 25 },
  ],
  jenisFinishing: "",
  penjumlahanJenisFinishing: 0,

  finishings: [],
  totalFinishing: 0,
};

const finishingSlice = createSlice({
  name: "finishing",
  initialState,
  reducers: {
    setJenisFinishing: (state, action) => {
      state.jenisFinishing = action.payload;
      const finishing = state.jenisFinishingData.find(
        (Finishing) => Finishing._id === action.payload
      );
      if (finishing) {
        state.penjumlahanJenisFinishing = finishing.penjumlahanJenisFinishing;
      } else {
        state.penjumlahanJenisFinishing = 0;
      }
    },
    addFinishing: (state, action) => {
      const { name, panjang, lebar, rumus, jenis } = action.payload;

      const jenisFinishing =
        panjang * lebar * rumus * (state.penjumlahanJenisFinishing / 100);
      const hargaFinishing = panjang * lebar * rumus + jenisFinishing;
      const gerinda = hargaFinishing * (12 / 100);
      const packing = hargaFinishing * (10 / 100);

      const totalPerFinishing = hargaFinishing + gerinda + packing;

      if (name && panjang && lebar && rumus && jenis) {
        state.finishings.push({
          data: action.payload,
          hargaFinishing,
          gerinda,
          packing,
          totalPerFinishing,
        });
        state.totalFinishing += totalPerFinishing;
      } else {
        toast.error("Inputan harus di isi");
      }
    },
  },
});

export const { setJenisFinishing, addFinishing } = finishingSlice.actions;

export default finishingSlice.reducer;
