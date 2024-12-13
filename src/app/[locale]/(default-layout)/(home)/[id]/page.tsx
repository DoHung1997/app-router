import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import ProductDetailContainer from "@/components/ProductDetail";
import {getSeoProductById} from "@/api/request/product";

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

export default async function ProductDetailPage({params: {locale, id}}: { params: { id: string, locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale);
    const getProduct = getSeoProductById(id)

    const [product] = await Promise.all([getProduct])

    console.log('product', product)

    return (
        <div>
            <ProductDetailContainer product={{name: id}}/>
        </div>
    )
}

export async function generateStaticParams() {
    return []
}