
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice/auth.slice";
import { productReducer } from "./slice/product.slice";

const rootReducer = {
  auth: authReducer,
  product: productReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});