// redux/loaderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: false,
    title: "", // 👈 added title
  },
  reducers: {
    showLoader: (state, action) => {
      state.isLoading = true;
      state.title = action.payload?.title || "";
    },
    hideLoader: (state) => {
      state.isLoading = false;
      state.title = "";
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;