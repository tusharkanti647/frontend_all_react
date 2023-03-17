import { createSlice } from "@reduxjs/toolkit";

const upDownSlice = createSlice({
  name: "upDownCount",
  initialState: 0,
  reducers: {
    increseCount(state, action) {},
    decreseCount(state, action) {}
  }
});

export default upDownSlice.reducer;
