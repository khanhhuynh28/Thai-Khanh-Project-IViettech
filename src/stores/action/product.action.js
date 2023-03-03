import { createAsyncThunk } from '@reduxjs/toolkit';
import { productAPI } from '../../api/product.api';

export const fetchProductList = createAsyncThunk(
    'product/fetchProductList',
    async (payload, thunkApi) => {
        const { page, limit, filter, textSearch } = payload;

        const reponse = await productAPI.getProductList(page, limit, filter, textSearch);
        return {
            product: reponse.data,
            textSearch: textSearch,
            filter: filter,
            pagination: {
                page,
                limit,
                total: reponse.headers['x-total-count'],
            },
        };
    }
);
