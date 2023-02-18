import { createSlice } from '@reduxjs/toolkit';

const productInitialState = {
    product: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState: productInitialState,
});
