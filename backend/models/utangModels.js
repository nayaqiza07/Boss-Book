import mongoose from "mongoose";

const { Schema } = mongoose;

const utangSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nama harus diisi"],
  },
  keterangan: {
    type: String,
    default: "-",
  },
  date: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: [true, "Total harus diisi"],
  },
  jumlahDibayar: {
    type: Number,
    required: [true, "Jumlah dibayar harus diisi"],
  },
});

const Utang = mongoose.model("Utang", utangSchema);

export default Utang;
