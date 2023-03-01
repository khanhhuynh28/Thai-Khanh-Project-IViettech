import { createSlice } from "@reduxjs/toolkit"
import { BUY_PRODUCT, DELETE_PRODUCT } from "../../const/cart.const";
import { cartAction } from "../action/cart.action"

export const cartInitialState = {
  cartAr: [],
}

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      {
        const productInCart = state.cartAr.find(
          (item) => item.id === action.payload.id
        );
        if (!productInCart) {
          return {
            cartAr: [...state.cartAr, action.payload],
          }
        } else {
          let newCart = state.cartAr;
          const ObjIndex = newCart.findIndex(
            (obj) => obj.id == action.payload.id
          );
          if (newCart[ObjIndex]?.quantity === undefined) {
            newCart[ObjIndex].quantity = 2
          } else {
            newCart[ObjIndex].quantity += 1;
          }
          return { cartAr: [...newCart] }
        }

      }
    default: return state;

    case DELETE_PRODUCT:
      {
        let newCart = state.cartAr;
        const ObjIndex = newCart.findIndex(
          (obj) => obj.id == action.payload.id
        );
        newCart.splice(ObjIndex, 1);
        return { cartAr: [...newCart] }

      }
  }
}
export default cartReducer;