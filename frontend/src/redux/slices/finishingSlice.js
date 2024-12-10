import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panjang: 0,
  lebar: 0,
  persen: 0,
  total: 0,

  jenisFinishingData: [
    { name: "Basic ML", value: "Basic ML", perkalianJenisFinishing: 20 },
    { name: "NC", value: "NC", perkalianJenisFinishing: 10 },
    { name: "Bleaching", value: "Bleaching", perkalianJenisFinishing: 20 },
    { name: "Duco Biasa", value: "Duco Biasa", perkalianJenisFinishing: 20 },
    { name: "Duco Bagus", value: "Duco Bagus", perkalianJenisFinishing: 20 },
    { name: "Lasur", value: "Lasur", perkalianJenisFinishing: 20 },
    { name: "PU", value: "PU", perkalianJenisFinishing: 20 },
    { name: "Take Oil", value: "Take Oil", perkalianJenisFinishing: 20 },
    { name: "Waterbased", value: "Waterbased", perkalianJenisFinishing: 20 },
  ],
  jenisFinishing: "",
  perkalianJenisFinishing: 1,
};

const finishingSlice = createSlice({
  name: "finishing",
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
    setJenisFinishing: (state, action) => {
      state.jenisFinishing = action.payload;
      const finishing = state.jenisFinishingData.find(
        (Finishing) => Finishing.value === action.payload
      );
      if (finishing) {
        state.perkalianJenisFinishing = finishing.perkalianJenisFinishing;
      } else {
        state.perkalianJenisFinishing = 1;
      }
    },
    hitungTotal: (state) => {
      state.total =
        state.panjang *
        state.lebar *
        (state.persen / 100) *
        state.perkalianJenisFinishing;
    },
  },
});

export const {
  setPanjang,
  setLebar,
  setPersen,
  setJenisFinishing,
  hitungTotal,
} = finishingSlice.actions;

export default finishingSlice.reducer;
