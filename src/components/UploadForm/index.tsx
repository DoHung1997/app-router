import React from 'react';
import {useTranslations} from "next-intl";
import UploadBox from "@/components/UploadForm/UploadBox";

const UploadForm = () => {
    const t = useTranslations("ViewerPage")
    return (
        <div className={'w-full bg-secondary15 py-20 px-5 sm:px-6 md:px-12 lg:px-20'}>
            <div className={'w-full text-center mx-auto'}>
                <div className={'max-w-[600px] pb-20 text-center mx-auto'}>
                    <h1 className={'text-danger font-bold text-4xl'}>{t('og.title_upload')}</h1>
                    <p className={'text-gray-300 text-[20px] font-light max-w-[550px] mx-auto mt-5'}>
                        {t('og.description_upload')}
                    </p>
                </div>

                <div className={'w-full'}>
                    <UploadBox/>
                </div>
            </div>
        </div>
    );
};

export default UploadForm;