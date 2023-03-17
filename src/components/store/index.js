import { configureStore } from "@reduxjs/toolkit";
import upDownSlice from "./slices/upDown";

const store = configureStore({
  reducer: {
    upDownSlice: upDownSlice
  }
});

export default store;
