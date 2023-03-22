import { createSlice } from "@reduxjs/toolkit";
import { fetchOrderList } from "../action/orderList.action";

const orderListInitialState = {
  orderList: [],
  fetchingOrderList: true,
};

const orderListSlice = createSlice({
  name: "orderList",
  initialState: orderListInitialState,

  extraReducers: (builder) => {
    builder.addCase(fetchOrderList.pending, (state, action) => {
      state.fetchingOrderList = true;
    });
    builder.addCase(fetchOrderList.fulfilled, (state, action) => {
      state.fetchingOrderList = false;
      state.orderList = action.payload.orderList;

    });
    builder.addCase(fetchOrderList.rejected, (state, action) => {
      state.fetchingOrderList = false;
    });
  },
});

export const orderListReducer = orderListSlice.reducer;



