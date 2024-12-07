import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = action.payload.data;

      // Set nilai dari state
      state.user = user;

      // Set localstorage
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logout Berhasil");
    },
    signUpUser: (state, action) => {
      const user = action.payload.data;

      // Set nilai dari state
      state.user = user;

      // Set localstorage
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
});

export const { loginUser, logoutUser, signUpUser } = userSlice.actions;

export default userSlice.reducer;
