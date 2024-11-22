import customAPI from "./axios.js";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { loginUser } from "../features/userSclice.js";

export const authLogin = (store) => async (data) => {
  try {
    const response = await customAPI.post("/auth/login", data);
    store.dispatch(loginUser(response.data));
    toast.success("Login Berhasil");
    return redirect("/");
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage);
    return null;
  }
};
