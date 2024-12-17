import {getTranslations, unstable_setRequestLocale} from "next-intl/server";

import HomeContainer from "@/components/Home";
import {getAllSeoProducts} from "@/api/request/product";
import axios from "axios";



export async function generateMetadata({params: {locale}}: { params: { locale: string } }) {
    const t = await getTranslations({locale, namespace: 'HomePage'});

    return {
        title: t('og.title'),
        description: t('og.description'),
        openGraph: {
            title: t('og.title'),
            description: t('og.description'),
        },
        // Add other metadata fields as needed
    };
}

export default async function HomePage({params: {locale}}: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    return (<HomeContainer/>);
}