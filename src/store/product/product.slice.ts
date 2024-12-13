import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";
import {ProductInitStateType} from "@/models/store/product";

const initialState : ProductInitStateType = {
    statusProductAction: '',
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: () => {
    }
})

export const selectProduct = (state: RootState) => state.product

export const {} = productSlice.actions

export default productSlice.reducer