'use client'

import React from 'react';
import {useTranslations} from "next-intl";

import CardTool from "@/components/CustomUI/CardTool";
import {ProductModel} from "@/models/store/product";
import {Button} from "@nextui-org/react";
import {useRouter} from "@/i18n/routing";

type PropsType = {
    products: ProductModel[]
}

const ToolList: React.FC<PropsType> = ({products}) => {
    const t = useTranslations("HomePage")
    const {push} = useRouter()

    const handleGetCookies = () => {
        push('/tool-view')
    }

    return (
        <div className={'w-full text-center mx-auto'}>
            <div className={'max-w-[600px] pb-20 text-center mx-auto'}>
                <h1 className={'text-danger font-bold text-4xl'}>{t('we_make_easy_pdf')}</h1>
                <p className={'text-gray-300 text-[20px] font-light max-w-[550px] mx-auto mt-5'}>
                    {t('easy_to_use')}
                </p>
            </div>

            <Button onPress={handleGetCookies}>
                Tool View Page
            </Button>

            <div className={'w-full h-full grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 p-5 gap-x-10 gap-y-20'}>
                {
                    products.map((product, index) => {
                        return (
                            <div key={product.id}>
                                <CardTool product={product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ToolList;