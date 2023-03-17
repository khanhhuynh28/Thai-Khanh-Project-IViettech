import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartItemAPI } from "../../api/cartItem.api";


export const postCartItemAction = createAsyncThunk(
  'postCartItem/fetchPostCartItem',

  async (payload) => {
    const response = await cartItemAPI.postCartItem(payload);
    return response.data;
  }
);
export const getCartItemAction = createAsyncThunk(
  'getCartItem/fetchGetCartItem',

  async (payload) => {
    const response = await cartItemAPI.getCartItem(payload);
    return response.data;
  }
);