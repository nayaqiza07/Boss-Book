import asyncHandler from "../middlewares/asyncHandler.js";
import Piutang from "../models/piutangModel.js";

// CRUD
// Create Piutang
export const createPiutang = asyncHandler(async (req, res) => {
  const newPiutang = await Piutang.create(req.body);

  return res.status(201).json({
    message: "Piutang berhasil di tambahkan",
    data: newPiutang,
  });
});

// Read All Piutang
export const allPiutang = asyncHandler(async (req, res) => {
  const allPiutang = await Piutang.find();

  const totalPiutang = allPiutang
    .map((data) => data.total)
    .reduce((data, num) => data + num, 0);

  const totalSudahDiterima = allPiutang
    .map((data) => data.jumlahDiterima)
    .reduce((data, num) => data + num, 0);

  const totalBelumDiterima = totalPiutang - totalSudahDiterima;

  return res.status(200).json({
    message: "Seluruh Data Piutang berhasil di tampilkan",
    data: allPiutang,
    totalPiutang,
    totalSudahDiterima,
    totalBelumDiterima,
  });
});

// Read Piutang by Id
export const getPiutangById = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const getPiutangById = await Piutang.findById(paramsId);

  return res.status(200).json({
    message: "Data Piutang berhasil di tampilkan",
    data: getPiutangById,
  });
});

// Update Piutang
export const updatePiutang = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  const updatePiutang = await Piutang.findByIdAndUpdate(paramsId, req.body, {
    runValidators: false,
    new: true,
  });

  return res.status(200).json({
    message: "Data Piutang berhasil di update",
    data: updatePiutang,
  });
});

// Delete Piutang
export const deletePiutang = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  await Piutang.findByIdAndDelete(paramsId);

  return res.status(200).json({
    message: "Data Piutang berhasil di hapus",
  });
});
