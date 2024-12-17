import {getTranslations, unstable_setRequestLocale} from "next-intl/server";
import UploadForm from "@/components/UploadForm";

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

export default async function UploadPage({params: {locale}}: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    return (<UploadForm/>);
}