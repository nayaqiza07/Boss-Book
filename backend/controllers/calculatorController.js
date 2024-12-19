import asyncHandler from "../middlewares/asyncHandler.js";
import Calculator from "../models/calculatorModel.js";

// CRUD
// Create Calculator
export const createCalculator = asyncHandler(async (req, res) => {
  const newCalculator = await Calculator.create({
    namaBarang: req.body.namaBarang,
    namaClient: req.body.namaClient,
    materials: req.body.materials,
    tukangKayu: req.body.tukangKayu,
    tukangFinishing: req.body.tukangFinishing,
    materialTambahan: req.body.materialTambahan,
    aksesoris: req.body.aksesoris,
    keseluruhanItem: req.body.keseluruhanItem,
    harga: req.body.harga,
  });

  return res.status(201).json({
    message: "Calculator berhasil ditambahkan",
    data: newCalculator,
  });
});

// Read Calculator
export const readCalculator = asyncHandler(async (req, res) => {
  const allCalculator = await Calculator.find();

  return res.status(200).json({
    message: "Seluruh Calculator berhasil ditampilkan",
    data: allCalculator,
  });
});

// Read Calculator By Id
export const getCalculatorById = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const getCalculatorById = await Calculator.findById(paramsId);

  return res.status(200).json({
    message: "Detail data Calculator berhasil ditampilkan",
    data: getCalculatorById,
  });
});
