import mongoose from "mongoose";

const Order = mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  clientId: ObjectId,
  items: [
    {
      nameItem: String,
      quantity: String,
      price: String,
    },
  ],
  note: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Orders", Order);
