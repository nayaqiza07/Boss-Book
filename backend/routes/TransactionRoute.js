import express from "express";
import {
  getTransactions,
  getTransactionById,
  saveTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controllers/TransactionController.js";

const router = express.Router();

router.get("/transactions", getTransactions);
router.get("/transactions/:id", getTransactionById);
router.post("/transactions", saveTransaction);
router.patch("/transactions/:id", updateTransaction);
router.delete("/transactions/:id", deleteTransaction);

export default router;
