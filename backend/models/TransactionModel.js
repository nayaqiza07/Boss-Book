import mongoose from "mongoose";

const Transaction = mongoose.Schema({
  deskripsi: {
    type: String,
    required: true,
  },
  kategori: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  tanggal: {
    type: String,
    required: true,
  },
  nominal: {
    type: Number,
    required: true,
  },
});

Transaction.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default mongoose.model("Transactions", Transaction);
