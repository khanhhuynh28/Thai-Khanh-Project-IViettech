import { createSlice } from "@reduxjs/toolkit"
import { getCartItemAction, postCartItemAction } from "../action/cartItem.action";

const cartItemInitState = {
  cartItem: [],
  loadingPostCartItem: false,
  loadingGetCartItem: false
}

const cartItemSlice = createSlice({
  name: 'cartItem',
  initialState: cartItemInitState,
  extraReducers: (builder) => {
    builder.addCase(getCartItemAction.pending, (state) => {
      state.loadingGetCartItem = true;
    });
    builder.addCase(postCartItemAction.pending, (state) => {
      state.loadingPostCartItem = true;
    });

    builder.addCase(getCartItemAction.fulfilled, (state) => {
      state.loadingGetCartItem = false;

    });
    builder.addCase(postCartItemAction.fulfilled, (state, action) => {
      state.loadingPostCartItem = false;
      state.cartItem.push(action.payload);
      state.cartItem.find((item) => item.id === action.payload.id,
      );
    });

    builder.addCase(getCartItemAction.rejected, (state) => {
      state.loadingGetCartItem = true;
    });
    builder.addCase(postCartItemAction.rejected, (state) => {
      state.loadingPostCartItem = true;
    });
  }
})
export const cartItemReducer = cartItemSlice.reducer; 