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

    // Initiate both requests in parallel
    const getPublicAPI = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
    const publicData = await getPublicAPI.data;
    console.log('getPublicAPI', publicData)

    const [seoProducts] = await Promise.all([getAllSeoProducts()])
    console.log('seoProducts', seoProducts)


    return (<HomeContainer seoProducts={seoProducts}/>);
}