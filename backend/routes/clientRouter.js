import express from "express";
// import { protectedMiddleware } from "../middlewares/authMiddleware";
import {
  createClient,
  allClient,
  detailClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";

const router = express.Router();

// CRUD Client

// Create Data Client
// POST /api/v1/client
// Middleware agar hanya bisa diakses oleh Owner yang telah melakukan autentikasi
router.post("/", createClient);

// Read Data Client
// GET /api/v1/client
router.get("/", allClient);

// Detail Data Client
// GET /api/v1/client/:id
router.get("/:id", detailClient);

// Update Data Client
// PUT /api/v1/client/:id
// Middleware agar hanya bisa diakses oleh Owner yang telah melakukan autentikasi
router.put("/:id", updateClient);

// Delete Data Client
// DELETE /api/v1/client/:id
// Middleware agar hanya bisa diakses oleh Owner yang telah melakukan autentikasi
router.delete("/:id", deleteClient);

export default router;
