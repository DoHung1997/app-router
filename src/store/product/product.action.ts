import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "@/api";
import {handleErrorApi} from "@/helpers";

export const getSeoProducts = createAsyncThunk(
    'product/getSeoProduct',
    async (_: undefined, thunkAPI) => {
        try {
            const response = await api.get('/v1/seo/product')
            return thunkAPI.fulfillWithValue(response.data.result)
        } catch (error: any) {
            return thunkAPI.rejectWithValue(handleErrorApi(error))
        }
    }
)