import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import HomeContainer from "@/components/Home";
import {unstable_noStore} from "next/cache";

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

    // Dynamic API
    unstable_noStore()

    return (
        <div className={`page-wrapper text-3xl`}>
            <HomeContainer/>
        </div>
    );
}