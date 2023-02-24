import { createSlice } from '@reduxjs/toolkit';
import { fetchProductList } from '../action/product.action';

const productInitialState = {
    product: [],
    fetchingProductList: true,
    pagination: {
        page: 1,
        limit: 8,
        total: 0,
        category: '',
    },
};

const productSlice = createSlice({
    name: 'product',
    initialState: productInitialState,
    reducers: {
        changePagination: (state, action) => {
            state.pagination.page = action.payload.page;
            state.pagination.limit = action.payload.limit;
        },
        filterCategory: (state, action) => {
            state.pagination.category = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductList.pending, (state, action) => {
            state.fetchingProductList = true;
        });
        builder.addCase(fetchProductList.fulfilled, (state, action) => {
            state.fetchingProductList = false;
            state.product = action.payload.product;
            state.pagination.total = action.payload.total;
        });
        builder.addCase(fetchProductList.rejected, (state, action) => {
            state.fetchingProductList = false;
        });
    },
});

export const productReducer = productSlice.reducer;
export const { filterCategory, changePagination } = productSlice.actions;
