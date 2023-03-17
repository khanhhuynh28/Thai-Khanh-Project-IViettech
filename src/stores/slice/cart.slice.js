import { createSlice } from "@reduxjs/toolkit"
import { message, notification } from "antd";
import { BUY_PRODUCT, DELETE_PRODUCT } from "../../const/cart.const";
import { buyProduct, cartAction, deleteProduct, getProduct } from "../action/cart.action"

export const cartInitialState = {
  cart: [],
}

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      {
        const productInCart = state.cart.find(
          (item) => item.id === action.payload.id,
          message
            .open({
              type: 'loading',
              content: 'Đang tải',
              duration: 0.3,
            })
            .then(() => message.success('Đã thêm vào giỏ hàng', 2.5))
        );
        if (!productInCart) {
          return {
            cart: [...state.cart, action.payload],
          }
        } else {
          let newCart = state.cart;
          const ObjIndex = newCart.findIndex(
            (obj) => obj.id == action.payload.id
          );
          if (newCart[ObjIndex]?.quantity === undefined) {
            newCart[ObjIndex].quantity = 2
          } else {
            newCart[ObjIndex].quantity += 1;
          }
          return { cart: [...newCart] }
        }

      }
    default: return state;

    case DELETE_PRODUCT:
      {
        let newCart = state.cart;
        const ObjIndex = newCart.findIndex(
          (obj) => obj.id == action.payload.id,
          message
            .open({
              type: 'loading',
              content: 'Đang tải',
              duration: 0.3,
            })
            .then(() => message.error('Đã xóa sản phẩm', 2.5))
        );
        newCart.splice(ObjIndex, 1);
        return { cart: [...newCart] }

      }
  }
}
export default cartReducer;
