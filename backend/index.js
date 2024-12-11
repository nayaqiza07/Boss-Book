import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

import authRouter from "./routes/authRouter.js";
import clientRouter from "./routes/clientRouter.js";
import orderRouter from "./routes/orderRouter.js";
import piutangRouter from "./routes/piutangRouter.js";
import utangRouter from "./routes/utangRouter.js";

dotenv.config();

const app = express();
const port = 5000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// Parent Router
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/client", clientRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/piutang", piutangRouter);
app.use("/api/v1/utang", utangRouter);

app.use(notFound);
app.use(errorHandler);

// Connection Server
app.listen(port, () => console.log(`Server up and running on port ${port}`));

// Connection DB
mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("Database Connected...");
});
