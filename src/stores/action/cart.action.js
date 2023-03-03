import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartAPI } from "../../api/cart.api";
import { BUY_PRODUCT, DELETE_PRODUCT } from "../../const/cart.const";

export const cartAction = createAsyncThunk(
  'cart/fetchCart',

  async (payload, thunkAPI) => {
    const response = await cartAPI.get(payload);
    return response.data;
  }
);

export const buyProduct = (product) => {
  return {
    type: BUY_PRODUCT,
    payload: product,
  }
};
export const deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  }
}