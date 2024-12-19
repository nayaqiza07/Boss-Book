import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  accessories: [],

  totalAccessories: 0,
};

const accessoriesSlice = createSlice({
  name: "accessories",
  initialState,
  reducers: {
    addAccessory: (state, action) => {
      const { name, harga } = action.payload;

      if (name && harga && typeof harga === "number") {
        state.accessories.push(action.payload);
        state.totalAccessories += action.payload.harga;
      } else {
        toast.error("Nama atau Harga tidak boleh kosong");
      }
    },
    removeAccessory: (state, action) => {
      const { name } = action.payload;

      const index = state.accessories.findIndex(
        (accessory) => accessory.name.toLowerCase() === name.toLowerCase()
      );

      if (index !== -1) {
        // Kurangi total harga
        state.totalAccessories -= state.accessories[index].harga;

        // Hapus aksesoris dari array
        state.accessories.splice(index, 1);
      }
    },
  },
});

export const { addAccessory, removeAccessory } = accessoriesSlice.actions;

export default accessoriesSlice.reducer;
