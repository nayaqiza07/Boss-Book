import express from "express";
import {
  protectedMiddleware,
  ownerMiddleware,
} from "../middlewares/authMiddleware.js";
import {
  createOrder,
  allOrder,
  detailOrder,
  updateOrder,
  currentClientOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// CRUD Order

// Create Data Order
// POST /api/v1/order
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.post("/", protectedMiddleware, createOrder);

// Read All Data Order
// GET /api/v1/order
// Middleware agar hanya bisa diakses oleh Owner
router.get("/", protectedMiddleware, ownerMiddleware, allOrder);

// Read Detail Data Order
// GET /api/v1/order/id
// Middleware agar hanya bisa diakses oleh Owner
router.get("/:id", protectedMiddleware, ownerMiddleware, detailOrder);

// Update Data Order
// PUT /api/v1/order/id
// Middleware agar hanya bisa diakses oleh Owner
router.put("/:id", protectedMiddleware, ownerMiddleware, updateOrder);

// Read All Data Order from Client
// GET /api/v1/order/current/client
// Middleware agar hanya bisa diakses oleh User yang telah melakukan autentikasi
router.get("/current/client/:id", protectedMiddleware, currentClientOrder);

export default router;
