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

  jenisKayuData: [
    { name: "Jati Kampung", value: "Jati Kampung", perkalianJenisKayu: 20 },
    { name: "Jati Sulawesi", value: "Jati Sulawesi", perkalianJenisKayu: 24 },
    { name: "Jati TPK", value: "Jati TPK", perkalianJenisKayu: 28 },
    { name: "Mahoni", value: "Mahoni", perkalianJenisKayu: 17 },
    { name: "Mindi", value: "Mindi", perkalianJenisKayu: 17 },
  ],
  jenisKayu: "",
  perkalianJenisKayu: 1,

  sisiDepan: 0,
  sisiBelakang: 0,
  sisiSamping: 0,
  sisiAtasBawah: 0,
  sisiAmbalan: 0,

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
    setSisiDepan: (state) => {
      state.sisiDepan =
        state.panjangDepan * state.lebarDepan * state.tebalDepan;
    },
    setSisiBelakang: (state) => {
      state.sisiBelakang =
        state.panjangBelakang * state.lebarBelakang * state.tebalBelakang;
    },
    setSisiSamping: (state) => {
      state.sisiSamping =
        state.panjangSamping * state.lebarSamping * state.tebalSamping;
    },
    setSisiAtasBawah: (state) => {
      state.sisiAtasBawah =
        state.panjangAtasBawah * state.lebarAtasBawah * state.tebalAtasBawah;
    },
    setSisiAmbalan: (state) => {
      state.sisiAmbalan =
        state.panjangAmbalan * state.lebarAmbalan * state.tebalAmbalan;
    },
    setTotalSisiKeseluruhan: (state) => {
      state.totalSisiKeseluruhan =
        state.sisiDepan +
        state.sisiBelakang +
        state.sisiSamping +
        state.sisiAtasBawah +
        state.sisiAmbalan;
    },
    setTotalKubikasiKeseluruhan: (state) => {
      const totalKubikasiDepan = state.sisiDepan / 1000000;
      const totalKubikasiBelakang = state.sisiBelakang / 1000000;
      const totalKubikasiSamping = state.sisiSamping / 1000000;
      const totalKubikasiAtasBawah = state.sisiAtasBawah / 1000000;
      const totalKubikasiAmbalan = state.sisiAmbalan / 1000000;

      state.totalKubikasiKeseluruhan =
        totalKubikasiDepan +
        totalKubikasiBelakang +
        totalKubikasiSamping +
        totalKubikasiAtasBawah +
        totalKubikasiAmbalan;
    },
    setTotalHargaKeseluruhan: (state) => {
      const totalHargaDepan = state.sisiDepan * state.perkalianJenisKayu;
      const totalHargaBelakang = state.sisiBelakang * state.perkalianJenisKayu;
      const totalHargaSamping = state.sisiSamping * state.perkalianJenisKayu;
      const totalHargaAtasBawah =
        state.sisiAtasBawah * state.perkalianJenisKayu;
      const totalHargaAmbalan = state.sisiAmbalan * state.perkalianJenisKayu;

      state.totalHargaKeseluruhan =
        totalHargaDepan +
        totalHargaBelakang +
        totalHargaSamping +
        totalHargaAtasBawah +
        totalHargaAmbalan;
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
  setJenisKayu,
  setSisiDepan,
  setSisiBelakang,
  setSisiSamping,
  setSisiAtasBawah,
  setSisiAmbalan,
  setTotalSisiKeseluruhan,
  setTotalKubikasiKeseluruhan,
  setTotalHargaKeseluruhan,
} = kayuSlice.actions;

export default kayuSlice.reducer;
