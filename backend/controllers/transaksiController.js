import asyncHandler from "../middlewares/asyncHandler.js";
import Transaksi from "../models/transaksiModel.js";

// CRUD
// Create Transaksi
export const createTransaksi = asyncHandler(async (req, res) => {
  const newTransaksi = await Transaksi.create(req.body);

  return res.status(201).json({
    message: "Transaksi berhasil di tambahkan",
    data: newTransaksi,
  });
});

// Read All Transaksi
export const allTransaksi = asyncHandler(async (req, res) => {
  const allTransaksi = await Transaksi.find();

  const totalIn = allTransaksi
    .filter((data) => data.status === "In")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalOut = allTransaksi
    .filter((data) => data.status === "Out")
    .map((data) => data.nominal)
    .reduce((data, num) => data + num, 0);

  const totalTransaksi = totalIn - totalOut;
  const totalPersen = Math.floor(((totalIn - totalOut) / totalIn) * 100);

  return res.status(200).json({
    message: "Seluruh Data Transaksi berhasil di tampilkan",
    data: allTransaksi,
    totalTransaksi,
    totalPersen,
    totalIn,
    totalOut,
  });
});

// Read Transaksi By Id
export const getTransaksiById = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const getTransaksiById = await Transaksi.findById(paramsId);

  return res.status(200).json({
    message: "Data Transaksi berhasil di tampilkan",
    data: getTransaksiById,
  });
});

// Update Transaksi
export const updateTransaksi = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  const updateTransaksi = await Transaksi.findByIdAndUpdate(
    paramsId,
    req.body,
    {
      runValidators: false,
      new: true,
    }
  );

  return res.status(200).json({
    message: "Data Transaksi berhasil di update",
    data: updateTransaksi,
  });
});

// Delete Transaksi
export const deleteTransaksi = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  await Transaksi.findByIdAndDelete(paramsId);

  return res.status(200).json({
    message: "Data Transaksi berhasil di hapus",
  });
});
