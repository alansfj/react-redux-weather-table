import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isFetching: false,
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const res = await fetch(
      "https://api.datos.gob.mx/v1/condiciones-atmosfericas"
    );
    const res_json = await res.json();
    return res_json.results;
  } catch (error) {
    return error;
  }
});

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (api, action) => {
      api.data = action.payload;
      api.isFetching = false;
    });
    builder.addCase(fetchData.rejected, (api, action) => {
      api.data = action.payload;
      api.isFetching = false;
    });
    builder.addCase(fetchData.pending, api => {
      api.isFetching = true;
    });
  },
});

export default apiSlice.reducer;
