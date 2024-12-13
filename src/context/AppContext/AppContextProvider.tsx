'use client'

import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {notification} from "antd";
import {ArgsProps} from "antd/lib/notification";

import AuthModal from "@/components/Auth/AuthModal";
import {ContextProvider, NotificationType} from "@/context/AppContext/index";

import {controlAuthUser} from "@/store/auth/auth.slice";
import {storageGet} from "@/helpers";
import {AuthName, StorageKey} from "@/constants";
import {AccountDataType} from "@/models";
import {useAppDispatch} from "@/hooks";

const AppContextProvider = ({children}: { children: ReactNode }) => {
        const dispatch = useAppDispatch()
        const [api, contextHolder] = notification.useNotification();

        const [loading, setLoading] = useState(false);
        const [userData, setUserData] = useState<AccountDataType | null>(null)
        const [openAuthModal, setOpenAuthModal] = useState<boolean>(false)
        const [authMode, setAuthMode] = useState<AuthName>(AuthName.LOGIN)

        useEffect(() => {
            const userString = storageGet(StorageKey.USER)
            if (!!userData || !userString) return

            const parseUser = JSON.parse(userString)
            setUserData(parseUser)
            dispatch(controlAuthUser(parseUser))
        }, [dispatch, userData]);

        const openNotification = useCallback((type: NotificationType, options: ArgsProps) => {
            api[type]({
                ...options
            });
        }, [api])

        const closeNotification = useCallback((key: string) => notification.destroy(key), [notification])

        const valueContext = {
            loading,
            setLoading,
            userData,
            setUserData,
            openAuthModal,
            setOpenAuthModal,
            authMode,
            setAuthMode,
            openNotification,
            closeNotification
        };

        return (
            <ContextProvider value={valueContext}>
                {contextHolder}
                {children}
                <AuthModal/>
            </ContextProvider>
        );
    }
;

export default AppContextProvider;