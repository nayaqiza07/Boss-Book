import express from "express";
import { protectedMiddleware } from "../middlewares/authMiddleware.js";
import {
  createTransaksi,
  allTransaksi,
  getTransaksiById,
  updateTransaksi,
  deleteTransaksi,
} from "../controllers/transaksiController.js";

const router = express.Router();

// CRUD

// Create Data Transaksi
// POST /api/v1/transaksi
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.post("/", protectedMiddleware, createTransaksi);

// Read Data Transaksi
// GET /api/v1/transaksi
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/", protectedMiddleware, allTransaksi);

// Read Data Transaksi By Id
// GET /api/v1/transaksi/:id
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/:id", protectedMiddleware, getTransaksiById);

// Update Data Transaksi
// PUT /api/v1/transaksi/:id
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.put("/:id", protectedMiddleware, updateTransaksi);

// Delete Data Transaksi
// DELETE /api/v1/transaksi/:id
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.delete("/:id", protectedMiddleware, deleteTransaksi);

export default router;
