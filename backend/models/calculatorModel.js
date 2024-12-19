import mongoose from "mongoose";

const { Schema } = mongoose;

// Material Kayu Start
const dimensiSchema = Schema({
  sisi: { type: String, required: true },
  panjang: { type: Number, required: true },
  lebar: { type: Number, required: true },
  tebal: { type: Number, required: true },
  jumlahSisi: { type: Number, required: true },
  jenisKayu: { type: String, required: true },
});

const materialKayuSchema = Schema({
  data: dimensiSchema,
  hargaPerSisi: { type: Number },
  kubikasiPerSisi: { type: Number },
});
// Material Kayu End

// Tukang Kayu Start
const dimensiTukangKayuSchema = Schema({
  name: { type: String, required: true },
  panjang: { type: Number, required: true },
  lebar: { type: Number, required: true },
  rumus: { type: Number, required: true },
});

const tukangKayuSchema = Schema({
  data: dimensiTukangKayuSchema,
  hargaKayu: { type: Number },
});
// Tukang Kayu End

// Tukang Finishing Start
const dimensiTukangFinishingSchema = Schema({
  name: { type: String, required: true },
  panjang: { type: Number, required: true },
  lebar: { type: Number, required: true },
  rumus: { type: Number, required: true },
  jenisFinishing: { type: String, required: true },
});

const tukangFinishingSchema = Schema({
  data: dimensiTukangFinishingSchema,
  hargaFinishing: { type: Number },
  gerinda: { type: Number },
  packing: { type: Number },
  totalPerFinishing: { type: Number },
});
// Tukang Finishing End

// Material Tambahan Start
const dimensiMaterialTambahanSchema = Schema({
  name: { type: String, required: true },
  harga: { type: Number, required: true },
  panjang: { type: Number, required: true },
  lebar: { type: Number, required: true },
  bagi: { type: Number, required: true },
});

const materialTambahanSchema = Schema({
  data: dimensiMaterialTambahanSchema,
  totalPerMaterialTambahan: { type: Number },
});
// Material Tambahan End

// Aksesoris & Akomodasi Start
const aksesorisSchema = Schema({
  name: { type: String, required: true },
  harga: { type: Number, required: true },
});
// Aksesoris & Akomodasi End

// Keseluruhan Item Start
const keseluruhanItemSchema = Schema({
  materialKayu: { type: Number },
  tukangKayu: { type: Number },
  tukangFinishing: { type: Number },
  tukangGerinda: { type: Number },
  tukangPacking: { type: Number },
  materialTambahan: { type: Number },
  aksesoris: { type: Number },
  persenKeuntungan: { type: Number },
  keuntungan: { type: Number },
});
// Keseluruhan Item End

// Harga Start
const hargaSchema = Schema({
  kalkulasiProduksi: { type: Number },
  hargaJual: { type: Number },
  keuntungan: { type: Number },
  bagiHasil: { type: Number },
  totalKubikasi: { type: Number },
  totalBahanBaku: { type: Number },
  boronganTukangKayu: { type: Number },
  boronganTukangFinishing: { type: Number },
});
// Harga End

const calculatorSchema = new Schema({
  namaBarang: {
    type: String,
    required: true,
  },
  namaClient: {
    type: String,
    required: true,
  },
  materials: {
    materialKayu: [materialKayuSchema],
    totalHargaKayu: { type: Number },
    totalKubikasi: { type: Number },
  },
  tukangKayu: {
    kayu: [tukangKayuSchema],
    totalTukangKayu: { type: Number },
  },
  tukangFinishing: {
    finishings: [tukangFinishingSchema],
    totalTukangFinishing: { type: Number },
  },
  materialTambahan: {
    itemsMaterialTambahan: [materialTambahanSchema],
    totalMaterialTambahan: { type: Number },
  },
  aksesoris: {
    accessories: [aksesorisSchema],
    totalAccessories: { type: Number },
  },
  keseluruhanItem: keseluruhanItemSchema,
  harga: hargaSchema,
});

const Calculator = mongoose.model("Calculator", calculatorSchema);

export default Calculator;
