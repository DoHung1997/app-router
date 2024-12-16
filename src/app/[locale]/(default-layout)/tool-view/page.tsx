import {unstable_setRequestLocale} from "next-intl/server";
import ViewPdf from "@/components/ViewPdf";

// export async function generateMetadata({params: {locale}}: { params: { locale: string } }) {
//     const t = await getTranslations({locale, namespace: 'HomePage'});
//
//     return {
//         title: t('og.title'),
//         description: t('og.description'),
//         openGraph: {
//             title: t('og.title'),
//             description: t('og.description'),
//         },
//         // Add other metadata fields as needed
//     };
// }

export default async function ToolViewPage({params: {locale}}: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    return (
        <div className={`page-wrapper text-3xl`}>
            <ViewPdf/>
        </div>
    );
}