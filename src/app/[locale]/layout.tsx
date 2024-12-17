import React, {Suspense} from "react";
import {getMessages, getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";

import RootProviders from "@/app/RootProviders";
import {routing} from "@/i18n/routing";
import Loading from "@/app/[locale]/loading";
import {unstable_noStore} from "next/cache";

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
    const messages = await getMessages();
    unstable_setRequestLocale(locale);
    // Dynamic API
    unstable_noStore()

    return (
        <html lang={locale}>
        <body suppressHydrationWarning={true}>
        <Suspense fallback={<Loading/>}>
            <RootProviders locale={locale} messages={messages} children={children}/>
        </Suspense>
        </body>
        </html>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}