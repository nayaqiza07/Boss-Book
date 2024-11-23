import asyncHandler from "../middlewares/asyncHandler.js";
import Order from "../models/orderModel.js";

// Create Order
export const createOrder = asyncHandler(async (req, res) => {
  const { orderNumber, client, date, items } = req.body;

  // Jika item tidak dimasukkan, maka tampilkan error
  if (!items || items.length < 1) {
    res.status(400);
    throw new Error("Tidak ada item yang ditambahkan");
  }

  let orderItem = [];
  let total = 0;

  // Looping untuk setiap item yang dimasukkan
  for (const item of items) {
    const singleItem = {
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      totalPrice: item.quantity * item.price,
    };

    // Memberi nilai pada variabel yang sudah dibuat diatas untuk menampung setiap item
    orderItem = [...orderItem, singleItem];

    // Menghitung total dari totalPrice setiap item
    total += item.quantity * item.price;
  }

  const newOrder = await Order.create({
    orderNumber,
    client,
    date,
    total: total,
    items: orderItem,
  });

  return res.status(201).json({
    message: "Order berhasil ditambahkan",
    total,
    newOrder,
  });
});

// Read All Order
export const allOrder = asyncHandler(async (req, res) => {
  const allOrder = await Order.find();

  return res.status(200).json({
    message: "Seluruh Order berhasil ditampilkan",
    data: allOrder,
  });
});

// Detail Order
export const detailOrder = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const detailOrder = await Order.findById(paramsId);

  return res.status(200).json({
    message: "Detail Order berhasil ditampilkan",
    data: detailOrder,
  });
});

// Detail Order
export const updateOrder = asyncHandler(async (req, res) => {
  return res.status(200).json({
    message: "Order berhasil diupdate",
  });
});

// Current Client Order
export const currentClientOrder = asyncHandler(async (req, res) => {
  const client = req.params.id;
  const clientOrder = await Order.find({ client });

  return res.status(200).json({
    message: "Current Client Order berhasil ditampilkan",
    data: clientOrder,
  });
});
