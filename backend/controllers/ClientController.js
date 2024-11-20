import asyncHandler from "../middlewares/asyncHandler.js";

// Create Client
export const createClient = asyncHandler(async (req, res) => {
  res.send("Create Client");
});

// All Client
export const allClient = asyncHandler(async (req, res) => {
  res.send("All Client");
});

// Detail Client
export const detailClient = asyncHandler(async (req, res) => {
  res.send("Detail Client");
});

// Update Client
export const updateClient = asyncHandler(async (req, res) => {
  res.send("Update Client");
});

// Delete Client
export const deleteClient = asyncHandler(async (req, res) => {
  res.send("Delete Client");
});
