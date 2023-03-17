import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
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
        state.order.push(action.payload);
        state.loadingOrder = false;
        state.order.find((item) => item.id === action.payload.id,)
        message
          .open({
            type: 'loading',
            content: 'Đang tải',
            duration: 0.3,
          })
          .then(() => message.success('Đã mua', 2.5))
      })

      .addCase(orderAction.rejected, (state) => {
        state.loadingOrder = true;
      })

  },
});

export const orderReducer = orderSlice.reducer