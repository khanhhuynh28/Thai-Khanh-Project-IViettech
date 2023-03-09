import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderApi } from "../../api/order.api";

export const orderAction = createAsyncThunk(
  'order/fetchOrder',
  async (payload, thunkAPI) => {
    try {
      const response = await orderApi.order(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

