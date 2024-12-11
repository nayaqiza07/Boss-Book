import express from "express";
import { protectedMiddleware } from "../middlewares/authMiddleware.js";
import {
  createUtang,
  allUtang,
  getUtangById,
  updateUtang,
  deleteUtang,
} from "../controllers/utangController.js";

const router = express.Router();

// CRUD

// Create Data Utang
// POST /api/v1/utang
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.post("/", protectedMiddleware, createUtang);

// Read Data Utang
// GET /api/v1/utang
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/", protectedMiddleware, allUtang);

// Read Data Utang By Id
// GET /api/v1/utang/:id
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/:id", protectedMiddleware, getUtangById);

// Update Data Utang
// PUT /api/v1/utang/:id
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.put("/:id", protectedMiddleware, updateUtang);

// Delete Data Utang
// DELETE /api/v1/utang/:id
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.delete("/:id", protectedMiddleware, deleteUtang);

export default router;
