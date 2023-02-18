import { createSlice } from '@reduxjs/toolkit';
import { loginAction, registerAction } from '../action/auth.action';

const authInitialState = {
    user: null,
    loadingLogin: false,
    loadingRegister: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state, action) => {
            state.loadingLogin = true;
            console.log(action.payload);
        });
        builder.addCase(registerAction.pending, (state, action) => {
            state.loadingRegister = true;
            console.log(action.payload);
        });

        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loadingLogin = false;
            state.user = action.payload.user;
        });
        builder.addCase(registerAction.fulfilled, (state, action) => {
            state.loadingRegister = false;
            console.log(action.payload);
        });

        builder.addCase(loginAction.rejected, (state, action) => {
            state.loadingLogin = false;
            console.log(action.payload);
        });
        builder.addCase(registerAction.rejected, (state, action) => {
            state.loadingRegister = false;
            console.log(action.payload);
        });
    },
});

export const authReducer = authSlice.reducer;
