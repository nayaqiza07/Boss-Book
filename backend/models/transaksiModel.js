import mongoose from "mongoose";

const { Schema } = mongoose;

const transaksiSchema = new Schema(
  {
    // name: {
    //   type: String,
    //   required: [true, "Nama harus diisi"],
    // },
    client: {
      type: Schema.ObjectId,
      ref: "Client",
      required: true,
    },
    keterangan: {
      type: String,
      default: "-",
    },
    date: {
      type: String,
      required: true,
    },
    jenis: {
      type: String,
      required: true,
    },
    kategori: {
      type: String,
      required: [true, "Kategori harus dipilih"],
    },
    jumlah: {
      type: Number,
      required: [true, "Nominal harus diisi"],
    },
    pembayaran: {
      type: String,
      required: true,
    },
    jatuhTempo: {
      type: String,
      default: null,
    },
    jumlahPembayaran: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Transaksi = mongoose.model("Transaksi", transaksiSchema);

export default Transaksi;
