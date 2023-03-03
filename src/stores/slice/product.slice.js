import { createSlice } from '@reduxjs/toolkit';
import { fetchProductList } from '../action/product.action';

const productInitialState = {
    product: [],
    fetchingProductList: true,
    pagination: {
        page: 1,
        limit: 12,
        total: 0,
    },
    textSearch: '',
    filter: {},
};

const productSlice = createSlice({
    name: 'product',
    initialState: productInitialState,
    reducers: {
        changePagination: (state, action) => {
            state.pagination.page = action.payload.page;
            state.pagination.limit = action.payload.limit;
        },
        filterCategorys: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductList.pending, (state, action) => {
            state.fetchingProductList = true;
        });
        builder.addCase(fetchProductList.fulfilled, (state, action) => {
            const { textSearch, filter } = action.payload;
            state.fetchingProductList = false;
            state.product = action.payload.product;
            state.pagination = action.payload.pagination;
            state.textSearch = textSearch;
            state.filter = filter;
        });
        builder.addCase(fetchProductList.rejected, (state, action) => {
            state.fetchingProductList = false;
        });
    },
});

export const productReducer = productSlice.reducer;
export const { filterCategorys, changePagination } = productSlice.actions;
