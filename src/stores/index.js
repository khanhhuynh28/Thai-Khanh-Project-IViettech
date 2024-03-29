
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice/auth.slice";
import cartReducer from "./slice/cart.slice";
import { cartItemReducer } from "./slice/cartItem.slice";
import { orderReducer } from "./slice/order.slice";
import { orderListReducer } from "./slice/orderList.slice";
import { productReducer } from "./slice/product.slice";

const rootReducer = {
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  cartItem: cartItemReducer,
  order: orderReducer,
  orderList: orderListReducer
};

export const store = configureStore({
  reducer: rootReducer,
});
