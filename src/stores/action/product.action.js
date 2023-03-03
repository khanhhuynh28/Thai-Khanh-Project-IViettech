import { createAsyncThunk } from '@reduxjs/toolkit';
import { productAPI } from '../../api/product.api';

export const fetchProductList = createAsyncThunk(
    'product/fetchProductList',
    async (payload, thunkApi) => {
        const { page, limit, filter, textSearch, sort, order } = payload;

        const reponse = await productAPI.getProductList(
            page,
            limit,
            filter,
            textSearch,
            sort,
            order
        );
        console.log(sort);
        return {
            product: reponse.data,
            textSearch: textSearch,
            filter: filter,
            sort: sort,
            order: order,
            pagination: {
                page,
                limit,
                total: reponse.headers['x-total-count'],
            },
        };
    }
);
