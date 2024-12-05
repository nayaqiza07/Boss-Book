import asyncHandler from "../middlewares/asyncHandler.js";
import Client from "../models/ClientModel.js";

// Create Client
export const createClient = asyncHandler(async (req, res) => {
  const newClient = await Client.create(req.body);

  return res.status(201).json({
    message: "Client berhasil ditambahkan",
    data: newClient,
  });
});

// Read All Client
export const allClient = asyncHandler(async (req, res) => {
  // const clients = await Client.find();

  // Req Query
  const queryObj = { ...req.query };

  // fungsi untuk mengabaikan jika ada req page dan limit
  const excludeField = ["page", "limit", "name"];
  excludeField.forEach((element) => delete queryObj[element]);

  // Search berdasarkan karatker nama
  let query;
  if (req.query.name) {
    query = Client.find({
      name: { $regex: req.query.name, $options: "i" },
    });
  } else {
    query = Client.find(queryObj);
  }

  // Pagination
  const page = req.query.page * 1 || 1;
  const limitData = req.query.limit * 1 || 10;
  const skipData = (page - 1) * limitData;

  query = query.skip(skipData).limit(limitData);

  let countClient = await Client.countDocuments(queryObj);
  if (req.query.page) {
    if (skipData >= countClient) {
      res.status(404);
      throw new Error("This page doesn't exist");
    }
  }

  const clients = await query;
  const totalPage = Math.ceil(countClient / limitData);

  return res.status(200).json({
    message: "Seluruh Client berhasil ditampilkan",
    data: clients,
    pagination: {
      limitClient: limitData,
      totalClient: countClient,
      page,
      totalPage,
    },
  });
});

// GET allClient without limit, page, name
export const clientData = asyncHandler(async (req, res) => {
  const clientData = await Client.find();

  return res.status(200).json({
    message: "Detail data Client berhasil ditampilkan",
    data: clientData,
  });
});

// Detail Client
export const detailClient = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  const clientData = await Client.findById(paramsId);

  if (!clientData) {
    res.status(404);
    throw new Error("Detail data Client tidak ditemukan");
  }

  return res.status(200).json({
    message: "Detail data Client berhasil ditampilkan",
    data: clientData,
  });
});

// Update Client
export const updateClient = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  const updateClient = await Client.findByIdAndUpdate(paramsId, req.body, {
    runValidators: false,
    new: true,
  });

  return res.status(200).json({
    message: "Data Client berhasil diupdate",
    data: updateClient,
  });
});

// Delete Client
export const deleteClient = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  await Client.findByIdAndDelete(paramsId);

  return res.status(200).json({
    message: "Data Client berhasil dihapus",
  });
});
