import { configureStore } from "@reduxjs/toolkit";
import { contentSlice, uiSlice } from ".";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    content: contentSlice.reducer
  },
});
