import React, {Suspense} from "react";
import {notFound} from "next/navigation";
import {getTranslations, unstable_setRequestLocale} from "next-intl/server";

import "@/app/styles/globals.scss";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {routing} from "@/i18n/routing";
import Loading from "@/app/[locale]/loading";

export async function generateMetadata({params: {locale}}: { params: { locale: string } }) {
    const t = await getTranslations({locale});

    return {
        title: {
            default: process.env.NEXT_PUBLIC_PROJECT_NAME,
            template: `%s | ${process.env.NEXT_PUBLIC_PROJECT_NAME}`
        }
    };
}

export default function RootLayout({
                                       children,
                                       params: {locale}
                                   }: Readonly<{
    children: React.ReactNode;
    params: { locale: string }
}>) {
    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Enable static rendering
    unstable_setRequestLocale(locale);

    return (
        <DefaultLayout>
            <Suspense fallback={<Loading/>}>
                <div className={'page-wrapper text-3xl'}>
                    {children}
                </div>
            </Suspense>
        </DefaultLayout>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}
