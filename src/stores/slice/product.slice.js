import { createSlice } from '@reduxjs/toolkit';
import { fetchProductList, postProduct } from '../action/product.action';

const productInitialState = {
    product: [],
    fetchingProductList: true,
    loadingPostProduct: true,
    pagination: {
        page: 1,
        limit: 12,
        total: 0,
    },
    textSearch: '',
    filter: {},
    sort: {},

    //post new product
    newdata: {
        srcImage: '',
        category: '',
        title: '',
        shortDescription: '',
        price: 0,
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
        filterCategorys: (state, action) => {
            state.filter = action.payload;
        },
        sortPrice: (state, action) => {
            state.sort.sort = action.payload.sort;
            state.sort.order = action.payload.order;
        },
        //post new product
        postNewdata: (state, action) => {
            // state.newdata = action.payload;
            state.newdata.srcImage = action.payload.srcImage;
            state.newdata.category = action.payload.category;
            state.newdata.title = action.payload.title;
            state.newdata.shortDescription = action.payload.shortDescription;
            state.newdata.price = action.payload.price;
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
            state.sort = action.payload;
        });
        builder.addCase(fetchProductList.rejected, (state, action) => {
            state.fetchingProductList = false;
        });

        //post new product
        builder.addCase(postProduct.pending, (state, action) => {
            state.loadingPostProduct = true;
        });
        builder.addCase(postProduct.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loadingPostProduct = false;
            state.newdata = action.payload.newdata;
        });
        builder.addCase(postProduct.rejected, (state, action) => {
            state.loadingPostProduct = false;
        });
    },
});

export const productReducer = productSlice.reducer;
export const { filterCategorys, changePagination, sortPrice, postNewdata } = productSlice.actions;
