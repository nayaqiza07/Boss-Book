import asyncHandler from "../middlewares/asyncHandler.js";
import Order from "../models/orderModel.js";

import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

// Create Order
export const createOrder = asyncHandler(async (req, res) => {
  const { client, date, status, dp, items, image } = req.body;

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
      note: item.note,
      quantity: item.quantity,
      price: item.price,
      totalPrice: item.quantity * item.price,
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
    dp,
    items: orderItem,
    image,
  });

  return res.status(201).json({
    message: "Order berhasil ditambahkan",
    total,
    newOrder,
  });
});

// Read All Order
export const allOrder = asyncHandler(async (req, res) => {
  // Req Query
  const queryObj = { ...req.query };

  // fungsi untuk mengabaikan jika ada req page dan limit
  const excludeField = ["page", "limit", "client"];
  excludeField.forEach((element) => delete queryObj[element]);

  // Search berdasarkan karatker nama client
  let query;
  if (req.query.client) {
    query = Order.aggregate([
      {
        $lookup: {
          from: "clients",
          localField: "client",
          foreignField: "_id",
          as: "clientData",
        },
      },
      {
        $match: {
          "clientData.name": { $regex: req.query.client, $options: "i" },
        },
      },
    ]);
  } else {
    query = Order.aggregate(
      [
        {
          $lookup: {
            from: "clients",
            localField: "client",
            foreignField: "_id",
            as: "clientData",
          },
        },
      ],
      queryObj
    );
  }

  // Pagination
  const page = req.query.page * 1 || 1;
  const limitData = req.query.limit * 1 || 10;
  const skipData = (page - 1) * limitData;

  query = query.skip(skipData).limit(limitData);

  let countOrder = await Order.countDocuments(queryObj);
  if (req.query.page) {
    if (skipData >= countOrder) {
      res.status(404);
      throw new Error("This page doesn't exist");
    }
  }

  const order = await query;
  const totalPage = Math.ceil(countOrder / limitData);

  // const allOrder = await Order.find();
  // const allOrder = await Order.aggregate([
  //   {
  //     $lookup: {
  //       from: "clients",
  //       localField: "client",
  //       foreignField: "_id",
  //       as: "clientData",
  //     },
  //   },
  // ]);

  return res.status(200).json({
    message: "Seluruh Order berhasil ditampilkan",
    data: order,
    pagination: {
      limitOrder: limitData,
      totalDataOrder: countOrder,
      page,
      totalPage,
    },
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
// export const fileUpload = asyncHandler(async (req, res) => {
//   const stream = cloudinary.uploader.upload_stream(
//     {
//       folder: "uploads",
//       allowed_formats: ["jpg", "png", "jpeg"],
//     },
//     function (err, result) {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({
//           message: "Gagal Upload Gambar",
//           error: err,
//         });
//       }

//       res.json({
//         message: "Gambar berhasil di upload",
//         url: result.secure_url,
//       });
//     }
//   );

//   if (!req.file) {
//     res.status(400);
//     throw new Error("Tidak ada gambar yang ditambahkan");
//   }

//   streamifier.createReadStream(req.file.buffer).pipe(stream);
// });

export const fileUpload = asyncHandler(async (req, res) => {
  const files = req.files;
  const imageUrls = [];

  const uploadPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "uploads",
          allowed_formats: ["png", "jpg", "jpeg"],
        },
        (error, result) => {
          if (error) {
            console.log(error);
            reject(error);
            return res.status(500).json({
              message: "Gagal upload gambar",
              error: error,
            });
          } else {
            imageUrls.push(result.secure_url);
            resolve();
          }
        }
      );

      streamifier.createReadStream(file.buffer).pipe(uploadStream);
      // console.log(file);
    });
  });

  // Tunggu hingga semua upload selesai sebelum memberikan respon (Jika upload belum selesai, respon akan ditahan hingga upload selesai)
  await Promise.all(uploadPromises);
  // console.log(imageUrls);

  res.status(201).json({
    message: "Gambar berhasil di upload",
    urls: imageUrls,
  });
});
