import mongoose from "mongoose";

const { Schema } = mongoose;

const clientSchema = new Schema({});

const Client = mongoose.model("Client", clientSchema);

export default Client;
