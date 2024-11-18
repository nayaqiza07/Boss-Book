import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import UserRoute from "./routes/UserRoute.js";
import InvoiceRoute from "./routes/InvoiceRoute.js";
import TransactionRoute from "./routes/TransactionRoute.js";
import ClientRoute from "./routes/ClientRoute.js";

const app = express();
const port = 5000;
const db = mongoose.connection;

mongoose.connect("mongodb://localhost:27017/bossbook_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(InvoiceRoute);
app.use(TransactionRoute);
app.use(ClientRoute);

// Server
app.listen(port, () => console.log(`Server up and running on port ${port}`));
