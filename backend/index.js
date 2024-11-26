import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";

import authRouter from "./routes/authRouter.js";
import clientRouter from "./routes/clientRouter.js";
import orderRouter from "./routes/orderRouter.js";

dotenv.config();

const app = express();
const port = 5000;

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

app.use(notFound);
app.use(errorHandler);

// Connection Server
app.listen(port, () => console.log(`Server up and running on port ${port}`));

// Connection DB
mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("Database Connected...");
});
