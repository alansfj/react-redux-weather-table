import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

export const paginationSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: state => {
      return (state += 1);
    },
    decrement: state => {
      return (state -= 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = paginationSlice.actions;

export default paginationSlice.reducer;
