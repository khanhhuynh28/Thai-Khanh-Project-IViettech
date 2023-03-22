import { createAsyncThunk } from "@reduxjs/toolkit";
import { orderListAPI } from "../../api/orderList.api";

export const fetchOrderList = createAsyncThunk(
  "orderList/fetchOrderList",
  async (payload, thunkApi) => {
    const reponse = await orderListAPI.getOrderList(payload);

    console.log(reponse.data);

    return reponse.data
  });
// export const fetchOrderList = createAsyncThunk(
//   "orderList/fetchOrderList",

//   async (payload) => {
//     const response = await orderListAPI.getOrderList(payload);
//     console.log(response.data)
//     return response.data;

//   }
// );

// export const fetchOrderList = createAsyncThunk(
//   "orderList/fetchOrderList",
//   async (payload) => {
//     const { page, limit, filter, textSearch, sort, order } = payload;

//     const reponse = await orderListAPI.getOrderList(
//       page,
//       limit,
//       // filter,
//       // textSearch,
//       // sort,
//       order
//     );
//     return {
//       orderList: reponse.data,
//       // textSearch: textSearch,
//       // filter: filter,
//       // sort: sort,
//       order: order,
//       pagination: {
//         page,
//         limit,
//         total: reponse.headers['x-total-count'],
//       },
//     };
//   }
// );