import {createAsyncThunk} from "@reduxjs/toolkit";
import {PayloadLogin, PayloadRegister} from "@/models";
import api from "@/api";
import {handleErrorApi} from "@/helpers";

export const loginAuthAction = createAsyncThunk(
    'auth/login',
    async (payload: PayloadLogin, thunkAPI) => {
        try {
            const response = await api.post('/v1/auth/login', payload)
            return thunkAPI.fulfillWithValue(response.data.result)
        } catch (error: any) {
            return thunkAPI.rejectWithValue(handleErrorApi(error))
        }
    }
)

export const registerAuthAction =createAsyncThunk(
    'auth/register',
    async (payload: PayloadRegister, thunkAPI) => {
        try {
            const response = await api.post('/v1/auth/login', payload)
            return thunkAPI.fulfillWithValue(response.data.result)
        } catch (error: any) {
            return thunkAPI.rejectWithValue(handleErrorApi(error))
        }
    }
)