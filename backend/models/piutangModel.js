import mongoose from "mongoose";

const { Schema } = mongoose;

const piutangSchema = new Schema({});

const Piutang = mongoose.model("Piutang", piutangSchema);

export default Piutang;
