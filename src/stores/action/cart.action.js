import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartAPI } from "../../api/cart.api";

export const cartAction = createAsyncThunk(
  'cart/fetchCart',

  async (payload, thunkAPI) => {
    const response = await cartAPI.get(payload);
    return response.data;
  }
);