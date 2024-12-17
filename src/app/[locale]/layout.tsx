import React from "react";
import {getMessages, getTimeZone, getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";

import RootProviders from "@/app/RootProviders";
import {routing} from "@/i18n/routing";

export async function generateMetadata({params: {locale}}: { params: { locale: string } }) {
    const t = await getTranslations({locale});

    return {
        title: {
            default: process.env.NEXT_PUBLIC_PROJECT_NAME,
            template: `%s | ${process.env.NEXT_PUBLIC_PROJECT_NAME}`
        }
    };
}

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const timeZone = await getTimeZone();
    const messages = await getMessages();
    unstable_setRequestLocale(locale);


    return (
        <html lang={locale}>
        <body suppressHydrationWarning={true}>
        <RootProviders
            timeZone={timeZone}
            locale={locale}
            messages={messages}
            children={children}
        />
        </body>
        </html>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}