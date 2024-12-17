import {getTranslations} from "next-intl/server";

export async function generateMetadata({params: {locale}}: { params: { locale: string } }) {
    const t = await getTranslations({locale, namespace: 'ViewerPage'});

    return {
        title: t('og.title_upload'),
        description: t('og.description_upload'),
        openGraph: {
            title: t('og.title_upload'),
            description: t('og.description_upload'),
        },
        // Add other metadata fields as needed
    };
}

export default async function DocumentPage({params: {locale}}: { params: { locale: string } }) {
    // // Enable static rendering
    // unstable_setRequestLocale(locale);
    // // Dynamic API
    // unstable_noStore()

    return (
        <section>
            <div>
                <p>Rất nhiều nội dung liên quan đến PDF</p>
            </div>
        </section>
    );
}