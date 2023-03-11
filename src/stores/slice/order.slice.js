import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import { orderAction } from "../action/order.action";

export const orderInitState = {
  order: [],
  loadingOrder: false,
}
const orderSlice = createSlice({
  name: 'order',
  initialState: orderInitState,
  extraReducers: (builder) => {
    builder
      .addCase(orderAction.pending, (state) => {
        state.loadingOrder = true;
      })

      .addCase(orderAction.fulfilled, (state, action) => {
        state.loadingOrder = false;
        state.order.push(action.payload);
        notification.success({
          message: "Đã mua",
          style: { border: "2px solid #ffba00" },
          duration: 3,
        })
      })

      .addCase(orderAction.rejected, (state, action) => {
        state.loadingOrder = true;
      })

  },
});

export const orderReducer = orderSlice.reducer