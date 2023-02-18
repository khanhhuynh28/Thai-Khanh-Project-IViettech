import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/auth.api';

export const loginAction = createAsyncThunk(
    'auth/login',

    async (payload, thunkAPI) => {
        const response = await authApi.login(payload);
        console.log(thunkAPI);
        return response.data;
    }
);
export const registerAction = createAsyncThunk(
    'auth/register',

    async (payload, thunkAPI) => {
        const response = await authApi.register(payload);

        console.log(thunkAPI);
        return response.data;
    }
);
