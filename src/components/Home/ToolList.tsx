'use client'

import React, {useEffect, useMemo} from 'react';
import {useTranslations} from "next-intl";
import {useAppDispatch, useAppSelector} from "@/hooks";
import {selectProduct} from "@/store/product/product.slice";
import {getSeoProducts} from "@/store/product/product.action";
import {useAppContext} from "@/context/AppContext";
import {Skeleton} from "@nextui-org/react";
import CardTool from "@/components/CustomUI/CardTool";

type PropsType = {}

const ToolList: React.FC<PropsType> = () => {
    const t = useTranslations("HomePage")
    const dispatch = useAppDispatch()
    const {openNotification} = useAppContext()

    const {products} = useAppSelector(selectProduct)

    useEffect(() => {
        dispatch(getSeoProducts())
            .unwrap()
            .catch((errMesh) => {
                openNotification('error', errMesh)
            })
    }, []);

    const memoToolList = useMemo(() => {
        if (products === null) return <Skeleton className="w-full h-full min-h-[300px] bg-secondary15"/>
        return (
            <div className={'w-full h-full grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 p-5 gap-x-10 gap-y-20'}>
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <CardTool product={product}/>
                        </div>
                    )
                })}
            </div>
        )
    }, [products])

    return (
        <div className={'w-full text-center mx-auto'}>
            <div className={'max-w-[600px] pb-20 text-center mx-auto'}>
                <h1 className={'text-danger font-bold text-4xl'}>{t('we_make_easy_pdf')}</h1>
                <p className={'text-gray-300 text-[20px] font-light max-w-[600px] mx-auto mt-5'}>
                    {t('easy_to_use')}
                </p>
            </div>

            {memoToolList}
        </div>
    )
};

export default ToolList;