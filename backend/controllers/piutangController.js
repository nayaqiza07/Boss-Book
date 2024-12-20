import asyncHandler from "../middlewares/asyncHandler.js";
import Piutang from "../models/piutangModel.js";

// CRUD
// Create Piutang
export const createPiutang = asyncHandler(async (req, res) => {
  const newPiutang = await Piutang.create(req.body);

  return res.status(201).json({
    message: "Piutang berhasil di tambahkan",
    data: newPiutang,
  });
});

// Read All Piutang
export const allPiutang = asyncHandler(async (req, res) => {
  // Req Query
  const queryObj = { ...req.query };

  // fungsi untuk mengabaikan jika ada req page dan limit
  const excludeField = ["page", "limit", "name"];
  excludeField.forEach((element) => delete queryObj[element]);

  // Search berdasarkan karatker nama
  let query;
  if (req.query.name) {
    query = Piutang.aggregate(
      [
        {
          $lookup: {
            from: "clients",
            localField: "client",
            foreignField: "_id",
            as: "clientData",
          },
        },
      ],
      // Masih Error
      {
        $match: {
          "clientData.name": { $regex: req.query.client, $options: "i" },
        },
      }
    );
  } else {
    query = Piutang.aggregate(
      [
        {
          $lookup: {
            from: "clients",
            localField: "client",
            foreignField: "_id",
            as: "clientData",
          },
        },
      ],
      queryObj
    );
  }

  // Pagination
  const page = req.query.page * 1 || 1;
  const limitData = req.query.limit * 1 || 10;
  const skipData = (page - 1) * limitData;

  query = query.skip(skipData).limit(limitData);

  let countPiutang = await Piutang.countDocuments(queryObj);
  if (req.query.page) {
    if (skipData >= countPiutang) {
      res.status(404);
      throw new Error("This page doesn't exist");
    }
  }

  const piutang = await query;
  const totalPage = Math.ceil(countPiutang / limitData);

  // const allPiutang = await Piutang.find();

  return res.status(200).json({
    message: "Seluruh Data Piutang berhasil di tampilkan",
    data: piutang,
    pagination: {
      limitPiutang: limitData,
      totalDataPiutang: countPiutang,
      page,
      totalPage,
    },
  });
});

// Read piutang without limit, page, name
export const getAllPiutang = asyncHandler(async (req, res) => {
  const piutang = await Piutang.find();

  const totalPiutang = piutang
    .map((data) => data.total)
    .reduce((data, num) => data + num, 0);

  const totalSudahDiterima = piutang
    .map((data) => data.jumlahDiterima)
    .reduce((data, num) => data + num, 0);

  const totalBelumDiterima = totalPiutang - totalSudahDiterima;

  return res.status(200).json({
    message: "Seluruh Data Piutang berhasil di tampilkan",
    data: piutang,
    totalPiutang,
    totalSudahDiterima,
    totalBelumDiterima,
  });
});

// Read Piutang by Id
export const getPiutangById = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const getPiutangById = await Piutang.findById(paramsId);

  return res.status(200).json({
    message: "Data Piutang berhasil di tampilkan",
    data: getPiutangById,
  });
});

// Update Piutang
export const updatePiutang = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  const updatePiutang = await Piutang.findByIdAndUpdate(paramsId, req.body, {
    runValidators: false,
    new: true,
  });

  return res.status(200).json({
    message: "Data Piutang berhasil di update",
    data: updatePiutang,
  });
});

// Delete Piutang
export const deletePiutang = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;

  await Piutang.findByIdAndDelete(paramsId);

  return res.status(200).json({
    message: "Data Piutang berhasil di hapus",
  });
});
