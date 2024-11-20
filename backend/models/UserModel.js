import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username harus diisi"],
    unique: [
      true,
      "Username sudah pernah digunakan, silahkan gunakan Username yang lain",
    ],
  },
  email: {
    type: String,
    required: [true, "Email harus diisi"],
    unique: [
      true,
      "Email sudah pernah didaftarkan, silahkan gunakan Email yang lain",
    ],
    validate: {
      validator: validator.isEmail,
      message: "Inputan Email harus berformat Email, seperti foo@email.com",
    },
  },
  password: {
    type: String,
    required: [true, "Password harus diisi"],
    minLength: [8, "Password minimal 8 karakter"],
  },
  role: {
    type: String,
    enum: ["user", "owner"],
    default: "user",
  },
});

// Encrypt Password sebelum data dikirim ke Database
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Untuk membandingkan password yang diinputkan User dengan password yang ada dalam Database
userSchema.methods.comparePassword = async function (reqBody) {
  return await bcrypt.compare(reqBody, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
