import express from "express";
import {
  getInvoices,
  getInvoiceById,
  saveInvoice,
  updateInvoice,
  deleteInvoice,
} from "../controllers/InvoiceController.js";

const router = express.Router();

router.get("/invoices", getInvoices);
router.get("/invoices/:id", getInvoiceById);
router.post("/invoices", saveInvoice);
router.patch("/invoices/:id", updateInvoice);
router.delete("/invoices/:id", deleteInvoice);

export default router;
