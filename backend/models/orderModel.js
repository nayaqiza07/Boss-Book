import mongoose from "mongoose";

const { Schema } = mongoose;

// Untuk item yang diorder
const singleItem = Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const orderSchema = new Schema({
  orderNumber: {
    type: String,
    required: true,
  },
  client: [
    {
      type: Schema.ObjectId,
      ref: "Client",
      required: true,
    },
  ],
  date: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: [true, "Total harus diisi"],
  },
  status: {
    type: String,
    enum: ["Pending", "In-Progress", "Completed"],
    default: "Pending",
  },
  items: [singleItem],
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
