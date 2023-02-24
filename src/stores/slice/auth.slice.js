import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "../action/auth.action";

const authInitialState = {
  user: null,
  loadingLogin: false,
  loadingRegister: false,
  isLogin: false,
  isRegistered: false
};

const authSlice = createSlice({
  name: "auth",
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
      state.user = action.payload.user;
      state.isLogin = true;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.loadingRegister = false;
      state.isRegistered = true;
    });

    builder.addCase(loginAction.rejected, (state, action) => {
      state.loadingLogin = false;
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.loadingRegister = false;
    });
  },
});



export const authReducer = authSlice.reducer;