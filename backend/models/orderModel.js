import mongoose from "mongoose";

const { Schema } = mongoose;

// Untuk item yang diorder
const singleItem = Schema({
  name: { type: String, required: true },
  note: { type: String },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  // image: { type: String, default: null },
});

// const singleImage = Schema({
//   image: { type: String, default: null },
// });

const orderSchema = new Schema(
  {
    orderNumber: {
      type: String,
      required: true,
      // unique: true,
    },
    client: {
      type: Schema.ObjectId,
      ref: "Client",
      required: true,
    },
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
    images: [{ type: String, default: null }],
    // image: [singleImage],
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
