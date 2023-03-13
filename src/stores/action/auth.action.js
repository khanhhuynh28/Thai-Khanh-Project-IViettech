import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/auth.api';
import { localStorageUlti } from '../../function/localStorage';
const { get, set } = localStorageUlti("token", [])

export const loginAction = createAsyncThunk(
    'auth/login',

    async (payload, thunkAPI) => {
        const response = await authApi.login(payload);
        set(response.data.user)
        return response.data;
    }
);
export const registerAction = createAsyncThunk(
    'auth/register',

    async (payload, thunkAPI) => {
        const response = await authApi.register(payload);

        return response.data;
    }
);