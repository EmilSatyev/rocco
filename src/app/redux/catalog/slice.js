import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalogStatus",
  async function () {
    const { data } = await axios.get("http://localhost:3030/category");
    return data;
  }
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    catalog: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCatalog.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCatalog.rejected]: (state) => {
      state.status = "error";
    },
    [fetchCatalog.fulfilled]: (state, action) => {
      state.status = "success";
      state.catalog = action.payload;
    },
  },
});

export default catalogSlice.reducer;
