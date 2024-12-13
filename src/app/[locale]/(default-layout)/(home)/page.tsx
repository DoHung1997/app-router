import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import {getAllSeoProducts} from "@/api/request/product";
import HomeContainer from "@/components/Home";

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

    const seoProductsData = getAllSeoProducts();

    // Initiate both requests in parallel
    const [seoProducts] = await Promise.all([seoProductsData])
    console.log('seoProducts', seoProducts)
    return (
        <div className={`page-wrapper text-3xl`}>
            <HomeContainer products={seoProducts}/>
        </div>
    );
}
