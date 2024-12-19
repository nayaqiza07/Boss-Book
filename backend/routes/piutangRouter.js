import express from "express";
import { protectedMiddleware } from "../middlewares/authMiddleware.js";
import {
  createPiutang,
  allPiutang,
  getAllPiutang,
  getPiutangById,
  updatePiutang,
  deletePiutang,
} from "../controllers/piutangController.js";

const router = express.Router();

// CRUD

// Create Data Piutang
// POST /api/v1/piutang
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.post("/", protectedMiddleware, createPiutang);

// Read Data Piutang
// GET /api/v1/piutang
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/", protectedMiddleware, allPiutang);

// Read Data Piutang
// GET /api/v1/piutang/all
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/all", protectedMiddleware, getAllPiutang);

// Read Data Piutang By Id
// GET /api/v1/piutang/:id
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/:id", protectedMiddleware, getPiutangById);

// Update Data Piutang
// PUT /api/v1/piutang/:id
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.put("/:id", protectedMiddleware, updatePiutang);

// Delete Data Piutang
// DELETE /api/v1/piutang/:id
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.delete("/:id", protectedMiddleware, deletePiutang);

export default router;
