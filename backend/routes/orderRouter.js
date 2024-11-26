import express from "express";
import {
  protectedMiddleware,
  // ownerMiddleware,
} from "../middlewares/authMiddleware.js";
import {
  createOrder,
  allOrder,
  detailOrder,
  updateOrder,
  currentClientOrder,
  fileUpload,
} from "../controllers/orderController.js";
import { upload } from "../utils/uploadFIleHandler.js";

const router = express.Router();

// CRUD Order

// Create Data Order
// POST /api/v1/order
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.post("/", protectedMiddleware, createOrder);

// Read All Data Order
// GET /api/v1/order
// Middleware agar hanya bisa diakses oleh Owner
router.get("/", protectedMiddleware, allOrder);

// Read Detail Data Order
// GET /api/v1/order/id
// Middleware agar hanya bisa diakses oleh Owner
router.get("/:id", protectedMiddleware, detailOrder);

// Update Data Order
// PUT /api/v1/order/id
// Middleware agar hanya bisa diakses oleh Owner
router.put("/:id", protectedMiddleware, updateOrder);

// Read All Data Order from Client
// GET /api/v1/order/current/client
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/view/:id", protectedMiddleware, currentClientOrder);

// File Upload Data Order
// POST /api/v1/order/file-upload
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.post(
  "/file-upload",
  protectedMiddleware,
  upload.single("image"),
  fileUpload
);

export default router;
