import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth.api";


export const loginAction = createAsyncThunk(
  "auth/login",

  async (payload, thunkAPI) => {
    console.log(payload)
    const response = await authApi.login(payload);


    return response.data;
  }
)