import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./api/apiSlice";
import paginationReducer from "./pagination/paginationSlice";

export const store = configureStore({
  reducer: {
    api: apiSlice,
    page: paginationReducer,
  },
});
