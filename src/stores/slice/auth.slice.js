import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../action/auth.action";

const authInitialState = {
  user: null,
  loadingLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.loadingLogin = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loadingLogin = false;
      state.user = action.payload.user;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loadingLogin = false;
    });
  },
});

export const authReducer = authSlice.reducer;