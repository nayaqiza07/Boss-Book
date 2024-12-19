import express from "express";
import { protectedMiddleware } from "../middlewares/authMiddleware.js";
import {
  createCalculator,
  readCalculator,
  getCalculatorById,
} from "../controllers/calculatorController.js";

const router = express.Router();

// CRUD Calculator

// Create Data Calculator
// POST /api/v1/calculator
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.post("/", protectedMiddleware, createCalculator);

// Read Data Calculator
// GET /api/v1/calculator
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/", protectedMiddleware, readCalculator);

// Read Data Calculator By Id
// GET /api/v1/calculator/:id
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/:id", protectedMiddleware, getCalculatorById);

export default router;
