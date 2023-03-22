import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderApi } from "../../api/order.api";

export const orderAction = createAsyncThunk(
  'order/fetchOrder',
  async (payload, thunkAPI) => {
    try {
      const response = await orderApi.postOrder(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const orderListAction = createAsyncThunk(
//   'orderList/fetchOrderList',
//   async (payload, thunkAPI) => {
//     try {
//       const response = await orderApi.getOrderList(payload);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

