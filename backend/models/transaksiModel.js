import mongoose from "mongoose";

const { Schema } = mongoose;

const transaksiSchema = new Schema({
  deskripsi: {
    type: String,
    required: [true, "Deskripsi harus diisi"],
  },
  date: {
    type: String,
    required: true,
  },
  kategori: {
    type: String,
    required: [true, "Kategori harus dipilih"],
  },
  status: {
    type: String,
    required: true,
  },
  nominal: {
    type: Number,
    required: [true, "Nominal harus diisi"],
  },
});

const Transaksi = mongoose.model("Transaksi", transaksiSchema);

export default Transaksi;
