import mongoose from "mongoose";

const Invoice = mongoose.Schema({
  client: {
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

export default mongoose.model("Invoices", Invoice);
