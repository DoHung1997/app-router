import {configureStore} from '@reduxjs/toolkit';

import AuthReducer from './auth/auth.slice'
import ProductReducer from './product/product.slice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: AuthReducer,
            product: ProductReducer
        },
        devTools: true
    })
}

export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export enum StoreStatus {
    PENDING,
    FULFILLED,
    REJECTED
}