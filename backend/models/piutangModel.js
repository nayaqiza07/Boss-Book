import mongoose from "mongoose";

const { Schema } = mongoose;

const piutangSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nama harus diisi"],
  },
  date: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: [true, "Total harus diisi"],
  },
  jumlahDiterima: {
    type: Number,
    required: [true, "Jumlah diterima harus diisi"],
  },
});

const Piutang = mongoose.model("Piutang", piutangSchema);

export default Piutang;
