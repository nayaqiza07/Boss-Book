import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import finishingReducer from "./slices/finishingSlice";
import tukangKayuReducer from "./slices/tukangKayuSlice";
import kayuReducer from "./slices/kayuSlice";
import bahanTambahanReducer from "./slices/bahanTambahanSlice";
import accessoriesReducer from "./slices/accessoriesSlice";
import hargaReducer from "./slices/hargaSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    kayuState: kayuReducer,
    tukangKayuState: tukangKayuReducer,
    finishingState: finishingReducer,
    bahanTambahanState: bahanTambahanReducer,
    accessoriesState: accessoriesReducer,
    hargaState: hargaReducer,
  },
});

console.log("On Create Store : ", store.getState());

store.subscribe(() => {
  console.log("Store Change : ", store.getState());
});
