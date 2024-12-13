'use client'

import React, {useEffect} from 'react';
import AppLoading from "@/components/AppLoading";
import {useRouter} from "@/i18n/routing";
import {useAppContext} from "@/context/AppContext";
import {clearAuthData} from "@/helpers";
import {useAppDispatch} from "@/hooks";
import {controlAuthUser} from "@/store/auth/auth.slice";

const Logout = () => {
    const dispatch = useAppDispatch()
    const {push} = useRouter()
    const {setUserData} = useAppContext()

    useEffect(() => {
        const timeout = setTimeout(() => {
            clearAuthData()
            dispatch(controlAuthUser(null))
            setUserData(null)
            push('/')
        }, 1200)

        return () => {
            clearTimeout(timeout)
        }

    }, [dispatch, push]);

    return (
        <AppLoading/>
    );
};

export default Logout;