import express from "express";
import {
  getClients,
  getClientById,
  saveClient,
  updateClient,
  deleteClient,
} from "../controllers/ClientController.js";

const router = express.Router();

router.get("/clients", getClients);
router.get("/clients/:id", getClientById);
router.post("/clients", saveClient);
router.patch("/clients/:id", updateClient);
router.delete("/clients/:id", deleteClient);

export default router;
