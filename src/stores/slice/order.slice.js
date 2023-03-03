import { createSlice } from "@reduxjs/toolkit"
import { orderAction } from "../action/order.action"

const orderInitState = {
  order: null,
  loadingOrder: false,
}

const orderSlice = createSlice({
  name: 'order',
  initialState: orderInitState,
  extraReducers: (builder) => {
    builder.addCase(orderAction.pending, (state, action) => {
      state.loadingOrder = true
    });
    builder.addCase(orderAction.fulfilled, (state, action) => {
      state.loadingOrder = false,
        state.order = action.payload.order
    });
    builder.addCase(orderAction.rejected, (state, action) => {
      state.loadingOrder = true
    })
  }
})
export const orderReducer = orderSlice.reducer;