import { createSlice } from "@reduxjs/toolkit"
import { cartAction } from "../action/cart.action"

export const cartInitialState = {
  cart: [],
  loadingCart: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  extraReducers: (builder) => {
    builder.addCase(cartAction.pending, (state, action) => {
      state.loadingCart = true;
    })
    builder.addCase(cartAction.fulfilled, (state, action) => {
      state.loadingCart = false;
      state.cart = action.payload.cart;
    })
    builder.addCase(cartAction.rejected, (state, action) => {
      state.loadingCart = false;
    })
  }
});
export const cartReducer = cartSlice.reducer;
