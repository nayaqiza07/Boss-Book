import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  namaKacaCermin: "",
  hargaKacaCermin: 0,
  panjangKacaCermin: 0,
  lebarKacaCermin: 0,
  bagiKacaCermin: 0,
  totalKacaCermin: 0,

  namaKacaPolos: "",
  hargaKacaPolos: 0,
  panjangKacaPolos: 0,
  lebarKacaPolos: 0,
  bagiKacaPolos: 0,
  totalKacaPolos: 0,

  namaMarmer: "",
  hargaMarmer: 0,
  panjangMarmer: 0,
  lebarMarmer: 0,
  bagiMarmer: 0,
  totalMarmer: 0,

  namaBesi: "",
  hargaBesi: 0,
  panjangBesi: 0,
  lebarBesi: 0,
  bagiBesi: 0,
  totalBesi: 0,

  total: 0,
};

const bahanTambahanSlice = createSlice({
  name: "bahanTambahan",
  initialState,
  reducers: {
    setNamaKacaCermin: (state, action) => {
      state.namaKacaCermin = action.payload;
    },
    setHargaKacaCermin: (state, action) => {
      state.hargaKacaCermin = action.payload;
    },
    setPanjangKacaCermin: (state, action) => {
      state.panjangKacaCermin = action.payload;
    },
    setLebarKacaCermin: (state, action) => {
      state.lebarKacaCermin = action.payload;
    },
    setBagiKacaCermin: (state, action) => {
      state.bagiKacaCermin = action.payload;
    },
    setTotalKacaCermin: (state) => {
      state.totalKacaCermin =
        (state.hargaKacaCermin *
          state.panjangKacaCermin *
          state.lebarKacaCermin) /
          state.bagiKacaCermin || 0;
    },
    setNamaKacaPolos: (state, action) => {
      state.namaKacaPolos = action.payload;
    },
    setHargaKacaPolos: (state, action) => {
      state.hargaKacaPolos = action.payload;
    },
    setPanjangKacaPolos: (state, action) => {
      state.panjangKacaPolos = action.payload;
    },
    setLebarKacaPolos: (state, action) => {
      state.lebarKacaPolos = action.payload;
    },
    setBagiKacaPolos: (state, action) => {
      state.bagiKacaPolos = action.payload;
    },
    setTotalKacaPolos: (state) => {
      state.totalKacaPolos =
        (state.hargaKacaPolos * state.panjangKacaPolos * state.lebarKacaPolos) /
          state.bagiKacaPolos || 0;
    },
    setNamaMarmer: (state, action) => {
      state.namaMarmer = action.payload;
    },
    setHargaMarmer: (state, action) => {
      state.hargaMarmer = action.payload;
    },
    setPanjangMarmer: (state, action) => {
      state.panjangMarmer = action.payload;
    },
    setLebarMarmer: (state, action) => {
      state.lebarMarmer = action.payload;
    },
    setBagiMarmer: (state, action) => {
      state.bagiMarmer = action.payload;
    },
    setTotalMarmer: (state) => {
      state.totalMarmer =
        (state.hargaMarmer * state.panjangMarmer * state.lebarMarmer) /
          state.bagiMarmer || 0;
    },
    setNamaBesi: (state, action) => {
      state.namaBesi = action.payload;
    },
    setHargaBesi: (state, action) => {
      state.hargaBesi = action.payload;
    },
    setPanjangBesi: (state, action) => {
      state.panjangBesi = action.payload;
    },
    setLebarBesi: (state, action) => {
      state.lebarBesi = action.payload;
    },
    setBagiBesi: (state, action) => {
      state.bagiBesi = action.payload;
    },
    setTotalBesi: (state) => {
      state.totalBesi =
        (state.hargaBesi * state.panjangBesi * state.lebarBesi) /
          state.bagiBesi || 0;
    },
    setTotal: (state) => {
      state.total =
        state.totalKacaCermin +
        state.totalKacaPolos +
        state.totalMarmer +
        state.totalBesi;
    },
  },
});

export const {
  setNamaKacaCermin,
  setHargaKacaCermin,
  setPanjangKacaCermin,
  setLebarKacaCermin,
  setBagiKacaCermin,
  setTotalKacaCermin,

  setNamaKacaPolos,
  setHargaKacaPolos,
  setPanjangKacaPolos,
  setLebarKacaPolos,
  setBagiKacaPolos,
  setTotalKacaPolos,

  setNamaMarmer,
  setHargaMarmer,
  setPanjangMarmer,
  setLebarMarmer,
  setBagiMarmer,
  setTotalMarmer,

  setNamaBesi,
  setHargaBesi,
  setPanjangBesi,
  setLebarBesi,
  setBagiBesi,
  setTotalBesi,

  setTotal,
} = bahanTambahanSlice.actions;

export default bahanTambahanSlice.reducer;
