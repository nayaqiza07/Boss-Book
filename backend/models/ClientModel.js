import mongoose from "mongoose";

const { Schema } = mongoose;

const clientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nama Client harus diisi"],
    unique: [
      true,
      "Nama Client sudah digunakan, silahkan gunakan nama yang lain",
    ],
  },
  email: {
    type: String,
    required: [true, "Email harus diisi"],
    default: "-",
  },
  phone: {
    type: String,
    required: [true, "Nomor Telepon Client harus diisi"],
  },
  address: {
    type: String,
    required: [true, "Alamat Client harus diisi"],
  },
  date: {
    type: String,
    default: new Date(),
  },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
