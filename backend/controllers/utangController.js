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
  const allUtang = await Utang.find();

  const totalUtang = allUtang
    .map((data) => data.total)
    .reduce((data, num) => data + num, 0);

  const totalSudahDibayar = allUtang
    .map((data) => data.jumlahDibayar)
    .reduce((data, num) => data + num, 0);

  const totalBelumDibayar = totalUtang - totalSudahDibayar;

  return res.status(200).json({
    message: "Seluruh Data Utang berhasil di tampilkan",
    data: allUtang,
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
