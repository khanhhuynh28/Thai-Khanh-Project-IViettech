import { createSlice } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { loginAction, registerAction } from '../action/auth.action';

const authInitialState = {
    user: null,
    loadingLogin: false,
    loadingRegister: false,
    isLogin: false,
    isRegistered: false,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state, action) => {
            state.loadingLogin = true;
        });
        builder.addCase(registerAction.pending, (state, action) => {
            state.loadingRegister = true;
        });

        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loadingLogin = false;
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isLogin = true;
            notification.success({
                message: "Đăng nhập thành công!",
                style: { border: "2px solid #71be34" },
                duration: 3,
            });
        });
        builder.addCase(registerAction.fulfilled, (state, action) => {
            state.loadingRegister = false;
            state.isRegistered = true;
            notification.success({
                message: "Đăng ký thành công!",
                description: "Đăng nhập ngay bây giờ",
                style: { border: "2px solid #71be34" },
                duration: 3,
            });
        });

        builder.addCase(loginAction.rejected, (state, action) => {
            state.loadingLogin = false;
            notification.error({
                message: "Đăng nhập thất bại!",
                description: "Hãy đăng nhập lại",
                style: { border: "2px solid #ff623d" },
                duration: 3,
            });
        });
        builder.addCase(registerAction.rejected, (state, action) => {
            state.loadingRegister = false;
            notification.error({
                message: "Đăng Ký thất bại!",
                description: "Hãy kiểm tra gmail",
                style: { border: "2px solid #ff623d" },
                duration: 3,
            });
        });
    },

});
export const logout = authSlice.actions;
export const authReducer = authSlice.reducer;
