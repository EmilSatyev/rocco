import { configureStore } from "@reduxjs/toolkit";
import catalog from "./catalog/slice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    catalog,
  },
});

export const useAppDispatch = () => useDispatch();