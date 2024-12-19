import asyncHandler from "../middlewares/asyncHandler.js";
import Utang from "../models/utangModels.js";

// CRUD
// Create Utang
export const createUtang = asyncHandler(async (req, res) => {
  const newUtang = await Utang.create(req.body);

  return res.status(201).json({
    message: "Utang berhasil di tambahkan",
    data: newUtang,
  });
});

// Read All Utang
export const allUtang = asyncHandler(async (req, res) => {
  // Req Query
  const queryObj = { ...req.query };

  // fungsi untuk mengabaikan jika ada req page dan limit
  const excludeField = ["page", "limit", "name"];
  excludeField.forEach((element) => delete queryObj[element]);

  // Search berdasarkan karatker nama
  let query;
  if (req.query.name) {
    query = Utang.find({
      name: { $regex: req.query.name, $options: "i" },
    });
  } else {
    query = Utang.find(queryObj);
  }

  // Pagination
  const page = req.query.page * 1 || 1;
  const limitData = req.query.limit * 1 || 2;
  const skipData = (page - 1) * limitData;

  query = query.skip(skipData).limit(limitData);

  let countUtang = await Utang.countDocuments(queryObj);
  if (req.query.page) {
    if (skipData >= countUtang) {
      res.status(404);
      throw new Error("This page doesn't exist");
    }
  }

  const utang = await query;
  const totalPage = Math.ceil(countUtang / limitData);

  // const allUtang = await Utang.find();

  return res.status(200).json({
    message: "Seluruh Data Utang berhasil di tampilkan",
    data: utang,
    pagination: {
      limitUtang: limitData,
      totalDataUtang: countUtang,
      page,
      totalPage,
    },
  });
});

// Read Utang Without Limit, page, name
export const getAllUtang = asyncHandler(async (req, res) => {
  const getAllUtang = await Utang.find();

  const totalUtang = getAllUtang
    .map((data) => data.total)
    .reduce((data, num) => data + num, 0);

  const totalSudahDibayar = getAllUtang
    .map((data) => data.jumlahDibayar)
    .reduce((data, num) => data + num, 0);

  const totalBelumDibayar = totalUtang - totalSudahDibayar;

  return res.status(201).json({
    message: "Seluruh Data Utang berhasil di tampilkan",
    data: getAllUtang,
    totalUtang,
    totalSudahDibayar,
    totalBelumDibayar,
  });
});

// Read Utang By Id
export const getUtangById = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const getUtangById = await Utang.findById(paramsId);

  return res.status(201).json({
    message: "Data Utang berhasil di tampilkan",
    data: getUtangById,
  });
});

// Update Utang
export const updateUtang = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const updateUtang = await Utang.findByIdAndUpdate(paramsId, req.body, {
    runValidators: false,
    new: true,
  });

  return res.status(200).json({
    message: "Data Utang berhasil di update",
    data: updateUtang,
  });
});

// Delete Utang
export const deleteUtang = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const deleteUtang = await Utang.findByIdAndDelete(paramsId);

  return res.status(200).json({
    message: "Data Utang berhasil di hapus",
  });
});
