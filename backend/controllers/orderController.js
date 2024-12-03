import asyncHandler from "../middlewares/asyncHandler.js";
import Order from "../models/orderModel.js";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Create Order
export const createOrder = asyncHandler(async (req, res) => {
  const { client, date, status, items } = req.body;

  // Jika item tidak dimasukkan, maka tampilkan error
  if (!items || items.length < 1) {
    res.status(400);
    throw new Error("Tidak ada item yang ditambahkan");
  }

  let orderItem = [];
  let total = 0;
  let newOrderNumber = "";

  // Looping untuk setiap item yang dimasukkan
  for (const item of items) {
    const singleItem = {
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      totalPrice: item.quantity * item.price,
      image: item.image,
    };

    // Memberi nilai pada variabel yang sudah dibuat diatas untuk menampung setiap item
    orderItem = [...orderItem, singleItem];

    // Menghitung total dari totalPrice setiap item
    total += item.quantity * item.price;
  }

  // Generate orderNumber otomatis, jika data order kosong, maka nilai default GRG00001, jika data ada, maka + 1
  const lastOrder = await Order.findOne().sort({ orderNumber: -1 }).exec();
  if (!lastOrder) {
    newOrderNumber = "GRG00001";
  } else {
    const lastNumber = parseInt(lastOrder.orderNumber.slice(3));
    const newNumber = lastNumber + 1;
    newOrderNumber = `GRG${newNumber.toString().padStart(5, "0")}`;
  }

  const newOrder = await Order.create({
    orderNumber: newOrderNumber,
    client,
    date,
    total: total,
    status,
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
  // const allOrder = await Order.find();
  const allOrder = await Order.aggregate([
    {
      $lookup: {
        from: "clients",
        localField: "client",
        foreignField: "_id",
        as: "clientData",
      },
    },
  ]);

  return res.status(200).json({
    message: "Seluruh Order berhasil ditampilkan",
    data: allOrder,
  });
});

// Detail Order
export const detailOrder = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const detailOrder = await Order.findById(paramsId).populate({
    path: "client",
  });

  return res.status(200).json({
    message: "Detail Order berhasil ditampilkan",
    data: detailOrder,
  });
});

// Update Order
export const updateOrder = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const updateOrder = await Order.findByIdAndUpdate(paramsId, req.body, {
    runValidators: false,
    new: true,
  });

  return res.status(200).json({
    message: "Order berhasil diupdate",
    data: updateOrder,
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

// File Upload Order
export const fileUpload = asyncHandler(async (req, res) => {
  const stream = cloudinary.uploader.upload_stream(
    {
      folder: "uploads",
      allowed_formats: ["jpg", "png", "jpeg"],
    },
    function (err, result) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Gagal Upload Gambar",
          error: err,
        });
      }

      res.json({
        message: "Gambar berhasil di upload",
        url: result.secure_url,
      });
    }
  );

  streamifier.createReadStream(req.file.buffer).pipe(stream);
});
