import React from 'react';
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import Logout from "@/components/Auth/Logout";

export async function generateMetadata({params: {locale}}: { params: { locale: string } }) {
    const t = await getTranslations({locale, namespace: ''});

    return {
        title: t('log_out'),
    };
}

export default function LogoutPage({params: {locale}}: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    return (
        <>
            <Logout/>
        </>
    );
};