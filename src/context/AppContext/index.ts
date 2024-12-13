import {createContext, useContext} from 'react';
import {ArgsProps} from "antd/lib/notification";
import {AccountDataType} from "@/models";
import {AuthName} from "@/constants";

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export type AppContextProps = {
    loading: boolean,
    setLoading: (value: boolean) => void
    openNotification: (type: NotificationType, options: ArgsProps) => void
    closeNotification: (key: string) => void
    userData: AccountDataType | null
    setUserData: (d: AccountDataType | null) => void
    openAuthModal: boolean
    setOpenAuthModal: (d: boolean) => void
    authMode: AuthName
    setAuthMode: (d: AuthName) => void
}

const defaultContext = {
    loading: false,
    setLoading: () => {
    },
    openNotification: () => {
    },
    closeNotification: () => {
    },
    userData: null,
    setUserData: () => {
    },
    openAuthModal: false,
    setOpenAuthModal: () => {
    },
    authMode: AuthName.LOGIN,
    setAuthMode: () => {
    }
};

const AppContext = createContext<AppContextProps>(defaultContext);

export const ContextProvider = AppContext.Provider;

export const useAppContext = () => useContext(AppContext);


export default AppContext;