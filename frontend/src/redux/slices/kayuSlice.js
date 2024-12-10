import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panjangDepan: 0,
  lebarDepan: 0,
  tebalDepan: 0,

  panjangBelakang: 0,
  lebarBelakang: 0,
  tebalBelakang: 0,

  panjangSamping: 0,
  lebarSamping: 0,
  tebalSamping: 0,

  panjangAtasBawah: 0,
  lebarAtasBawah: 0,
  tebalAtasBawah: 0,

  panjangAmbalan: 0,
  lebarAmbalan: 0,
  tebalAmbalan: 0,

  panjangLain: 0,
  lebarLain: 0,
  tebalLain: 0,

  jumlahSisiDepan: 0,
  jumlahSisiBelakang: 0,
  jumlahSisiSamping: 0,
  jumlahSisiAtasBawah: 0,
  jumlahSisiAmbalan: 0,
  jumlahSisiLain: 0,

  jenisKayuData: [
    { name: "Jati Kampung", value: "Jati Kampung", perkalianJenisKayu: 20 },
    { name: "Jati Sulawesi", value: "Jati Sulawesi", perkalianJenisKayu: 24 },
    { name: "Jati TPK", value: "Jati TPK", perkalianJenisKayu: 28 },
    { name: "Mahoni", value: "Mahoni", perkalianJenisKayu: 17 },
    { name: "Mindi", value: "Mindi", perkalianJenisKayu: 17 },
  ],
  jenisKayu: "",
  perkalianJenisKayu: 1,

  totalSisiKeseluruhan: 0,
  totalKubikasiKeseluruhan: 0,
  totalHargaKeseluruhan: 0,
};

const kayuSlice = createSlice({
  name: "kayu",
  initialState,
  reducers: {
    setPanjangDepan: (state, action) => {
      state.panjangDepan = action.payload;
    },
    setLebarDepan: (state, action) => {
      state.lebarDepan = action.payload;
    },
    setTebalDepan: (state, action) => {
      state.tebalDepan = action.payload;
    },
    setPanjangBelakang: (state, action) => {
      state.panjangBelakang = action.payload;
    },
    setLebarBelakang: (state, action) => {
      state.lebarBelakang = action.payload;
    },
    setTebalBelakang: (state, action) => {
      state.tebalBelakang = action.payload;
    },
    setPanjangSamping: (state, action) => {
      state.panjangSamping = action.payload;
    },
    setLebarSamping: (state, action) => {
      state.lebarSamping = action.payload;
    },
    setTebalSamping: (state, action) => {
      state.tebalSamping = action.payload;
    },
    setPanjangAtasBawah: (state, action) => {
      state.panjangAtasBawah = action.payload;
    },
    setLebarAtasBawah: (state, action) => {
      state.lebarAtasBawah = action.payload;
    },
    setTebalAtasBawah: (state, action) => {
      state.tebalAtasBawah = action.payload;
    },
    setPanjangAmbalan: (state, action) => {
      state.panjangAmbalan = action.payload;
    },
    setLebarAmbalan: (state, action) => {
      state.lebarAmbalan = action.payload;
    },
    setTebalAmbalan: (state, action) => {
      state.tebalAmbalan = action.payload;
    },
    setPanjangLain: (state, action) => {
      state.panjangLain = action.payload;
    },
    setLebarLain: (state, action) => {
      state.lebarLain = action.payload;
    },
    setTebalLain: (state, action) => {
      state.tebalLain = action.payload;
    },
    setJenisKayu: (state, action) => {
      state.jenisKayu = action.payload;
      const kayu = state.jenisKayuData.find(
        (kayu) => kayu.value === action.payload
      );
      if (kayu) {
        state.perkalianJenisKayu = kayu.perkalianJenisKayu;
      } else {
        state.perkalianJenisKayu = 1;
      }
    },
    setJumlahSisiDepan: (state, action) => {
      state.jumlahSisiDepan = action.payload;
    },
    setJumlahSisiBelakang: (state, action) => {
      state.jumlahSisiBelakang = action.payload;
    },
    setJumlahSisiSamping: (state, action) => {
      state.jumlahSisiSamping = action.payload;
    },
    setJumlahSisiAtasBawah: (state, action) => {
      state.jumlahSisiAtasBawah = action.payload;
    },
    setJumlahSisiAmbalan: (state, action) => {
      state.jumlahSisiAmbalan = action.payload;
    },
    setJumlahSisiLain: (state, action) => {
      state.jumlahSisiLain = action.payload;
    },
    setTotalSisiKeseluruhan: (state) => {
      const totalSisiDepan =
        state.panjangDepan * state.lebarDepan * state.tebalDepan || 0;
      const totalSisiBelakang =
        state.panjangBelakang * state.lebarBelakang * state.tebalBelakang || 0;
      const totalSisiSamping =
        state.panjangSamping * state.lebarSamping * state.tebalSamping || 0;
      const totalSisiAtasBawah =
        state.panjangAtasBawah * state.lebarAtasBawah * state.tebalAtasBawah ||
        0;
      const totalSisiAmbalan =
        state.panjangAmbalan * state.lebarAmbalan * state.tebalAmbalan || 0;
      const totalSisiLain =
        state.panjangLain * state.lebarLain * state.tebalLain || 0;

      state.totalSisiKeseluruhan =
        totalSisiDepan +
        totalSisiBelakang +
        totalSisiSamping +
        totalSisiAtasBawah +
        totalSisiAmbalan +
        totalSisiLain;
    },
    setTotalKubikasiKeseluruhan: (state) => {
      const totalKubikasiDepan =
        (state.panjangDepan * state.lebarDepan * state.tebalDepan) / 1000000 ||
        0;
      const totalKubikasiBelakang =
        (state.panjangBelakang * state.lebarBelakang * state.tebalBelakang) /
          1000000 || 0;
      const totalKubikasiSamping =
        (state.panjangSamping * state.lebarSamping * state.tebalSamping) /
          1000000 || 0;
      const totalKubikasiAtasBawah =
        (state.panjangAtasBawah * state.lebarAtasBawah * state.tebalAtasBawah) /
          1000000 || 0;
      const totalKubikasiAmbalan =
        (state.panjangAmbalan * state.lebarAmbalan * state.tebalAmbalan) /
          1000000 || 0;
      const totalKubikasiLain =
        (state.panjangLain * state.lebarLain * state.tebalLain) / 1000000 || 0;

      state.totalKubikasiKeseluruhan =
        totalKubikasiDepan +
        totalKubikasiBelakang +
        totalKubikasiSamping +
        totalKubikasiAtasBawah +
        totalKubikasiAmbalan +
        totalKubikasiLain;
    },
    setTotalHargaKeseluruhan: (state) => {
      const totalHargaDepan =
        state.panjangDepan *
          state.lebarDepan *
          state.tebalDepan *
          state.jumlahSisiDepan *
          state.perkalianJenisKayu || 0;
      const totalHargaBelakang =
        state.panjangBelakang *
          state.lebarBelakang *
          state.tebalBelakang *
          state.jumlahSisiBelakang *
          state.perkalianJenisKayu || 0;
      const totalHargaSamping =
        state.panjangSamping *
          state.lebarSamping *
          state.tebalSamping *
          state.jumlahSisiSamping *
          state.perkalianJenisKayu || 0;
      const totalHargaAtasBawah =
        state.panjangAtasBawah *
          state.lebarAtasBawah *
          state.tebalAtasBawah *
          state.jumlahSisiAtasBawah *
          state.perkalianJenisKayu || 0;
      const totalHargaAmbalan =
        state.panjangAmbalan *
          state.lebarAmbalan *
          state.tebalAmbalan *
          state.jumlahSisiAmbalan *
          state.perkalianJenisKayu || 0;
      const totalHargaLain =
        state.panjangLain *
          state.lebarLain *
          state.tebalLain *
          state.jumlahSisiLain *
          state.perkalianJenisKayu || 0;

      state.totalHargaKeseluruhan =
        totalHargaDepan +
        totalHargaBelakang +
        totalHargaSamping +
        totalHargaAtasBawah +
        totalHargaAmbalan +
        totalHargaLain;
    },
  },
});

export const {
  setPanjangDepan,
  setLebarDepan,
  setTebalDepan,

  setPanjangBelakang,
  setLebarBelakang,
  setTebalBelakang,

  setPanjangSamping,
  setLebarSamping,
  setTebalSamping,

  setPanjangAtasBawah,
  setLebarAtasBawah,
  setTebalAtasBawah,

  setPanjangAmbalan,
  setLebarAmbalan,
  setTebalAmbalan,

  setPanjangLain,
  setLebarLain,
  setTebalLain,

  setJumlahSisiDepan,
  setJumlahSisiBelakang,
  setJumlahSisiSamping,
  setJumlahSisiAtasBawah,
  setJumlahSisiAmbalan,
  setJumlahSisiLain,

  setJenisKayu,

  setTotalSisiKeseluruhan,
  setTotalKubikasiKeseluruhan,
  setTotalHargaKeseluruhan,
} = kayuSlice.actions;

export default kayuSlice.reducer;
