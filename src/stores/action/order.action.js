import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderAPI } from "../../api/order.api";

export const orderAction = createAsyncThunk(
  'order/fetchOrder',

  async (payload, thunkAPI) => {
    const response = await orderAPI.postOrder(payload);
    return response.data;
  }
);