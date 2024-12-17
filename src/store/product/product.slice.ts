import {createSlice} from "@reduxjs/toolkit";
import {RootState, StoreStatus} from "@/store/store";
import {ProductInitStateType} from "@/models/store/product";
import {getSeoProducts} from "@/store/product/product.action";

const initialState: ProductInitStateType = {
    statusProductAction: '',
    products: null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSeoProducts.pending, (state) => {
                state.statusProductAction = StoreStatus.PENDING;
                state.products = null
            })
            .addCase(getSeoProducts.fulfilled, (state, {payload}) => {
                state.statusProductAction = StoreStatus.FULFILLED;
                state.products = payload.items;
            })
            .addCase(getSeoProducts.rejected, (state) => {
                state.statusProductAction = StoreStatus.REJECTED;
                state.products = []
            })
    }
})

export const selectProduct = (state: RootState) => state.product

export const {} = productSlice.actions

export default productSlice.reducer