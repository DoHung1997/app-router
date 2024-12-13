'use client'

import React, {Suspense} from "react";
import {NextIntlClientProvider} from "next-intl";
import type {AbstractIntlMessages} from 'use-intl'
import {ConfigProvider} from "antd";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider, useTheme} from "next-themes";

import AppContextProvider from "@/context/AppContext/AppContextProvider";
import StoreProviders from "@/store/StoreProviders";
import {ANT_THEME} from "@/constants";
import Loading from "@/app/[locale]/loading";

type ProvidersPropsType = { children: React.ReactNode, locale: string, messages: AbstractIntlMessages }

const RootProviders = ({children, locale, messages}: ProvidersPropsType) => {
    const {theme} = useTheme()

    return (
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
        >
            <Suspense fallback={<Loading/>}>
                <StoreProviders>
                    <ConfigProvider theme={ANT_THEME}>
                        <AppContextProvider>
                            <NextUIProvider>
                                <NextThemesProvider attribute="class" defaultTheme={theme ?? 'light'}>
                                    {children}
                                </NextThemesProvider>
                            </NextUIProvider>
                        </AppContextProvider>
                    </ConfigProvider>
                </StoreProviders>
            </Suspense>
        </NextIntlClientProvider>
    )
}

export default RootProviders