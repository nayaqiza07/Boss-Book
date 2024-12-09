import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import finishingReducer from "./slices/finishingSlice";
import tukangKayuReducer from "./slices/tukangKayuSlice";
import kayuReducer from "./slices/kayuSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    finishingState: finishingReducer,
    tukangKayuState: tukangKayuReducer,
    kayuState: kayuReducer,
  },
});

console.log("On Create Store : ", store.getState());

store.subscribe(() => {
  console.log("Store Change : ", store.getState());
});
