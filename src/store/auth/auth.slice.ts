import {createSlice} from '@reduxjs/toolkit';
import {RootState, StoreStatus} from '@/store/store';
import {clearAuthData, saveAuthData} from "@/helpers";
import {AuthInitStateType} from "@/models";
import {loginAuthAction} from "@/store/auth/auth.action";

const initialState: AuthInitStateType = {
    statusAuthAction: '',
    user: null
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutAction: (state) => {
            clearAuthData();
            state.user = null;
        },
        controlAuthUser: (state, {payload}) => {
            state.user = payload;
        },
        controlAuthStatus: (state, {payload}) => {
            state.statusAuthAction = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAuthAction.pending, (state) => {
                state.statusAuthAction = StoreStatus.PENDING;
            })
            .addCase(loginAuthAction.fulfilled, (state, {payload}) => {
                state.statusAuthAction = StoreStatus.FULFILLED;
                state.user = payload.user
                saveAuthData(payload);
            })
            .addCase(loginAuthAction.rejected, (state) => {
                state.statusAuthAction = StoreStatus.REJECTED;
            });
    }
});

export const selectAuth = (state: RootState) => state.auth;

export const {logoutAction, controlAuthUser, controlAuthStatus} = authSlice.actions;

export default authSlice.reducer;