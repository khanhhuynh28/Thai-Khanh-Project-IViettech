import { createAsyncThunk } from '@reduxjs/toolkit';
import { productAPI } from '../../api/product.api';

export const fetchProductList = createAsyncThunk(
    'product/fetchProductList',
    async (payload, thunkApi) => {
        const { page, limit } = payload;

        const reponse = await productAPI.getProductList(page, limit);
        return {
            product: reponse.data,
            total: reponse.headers['x-total-count'],
        };
    }
);
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { productApi } from "../../api/product.api";

// export const fetchProducts = createAsyncThunk(
//     "todo/products", //đầu tiên phải lấy tiền tố name:là 'todo' và sau đó là tên của khởi tạo
//     async (payload, thunkAPI) => {
//       const { page, limit, category } = payload;
//       const response = await productApi.getProductList(page, limit, category); //await là bất đồng bộ nếu có thèn await thì đợi cho axios chạy xong rồi ms log nó ra
//       return { product: response.data, total: response.headers["x-total-count"] };
//     }
//   );
