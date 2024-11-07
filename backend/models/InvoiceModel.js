import mongoose from "mongoose";

const Invoice = mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

Invoice.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

export default mongoose.model("Invoices", Invoice);
