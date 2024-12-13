'use client'

import React from "react";
import Image from "next/image";

import styles from './CardTool.module.scss'
import {toolImageSrc} from "@/assest";
import {ProductModel} from "@/models/store/product";
import {Link} from "@/i18n/routing";

type PropsType = {
    product: ProductModel
}

const CardTool: React.FC<PropsType> = ({product}) => {

    return (
        <Link href={`/${product.id}`}>
            <div
                className={
                    `${styles.cardWrapper} border-secondary border w-full h-[120px] relative bg-secondary rounded shadow-xl hover:shadow-2xl`
                }
            >
                <div
                    className={`p-[5px] absolute top-[-55px] left-1/2 translate-x-[-50%] translate-y-0 bg-secondary15 rounded-full overflow-hidden`}>
                    <Image
                        src={toolImageSrc.mergeTool}
                        alt={'tool'}
                        width={80} height={80}
                        className={'rounded-full'}
                    />
                </div>
                <div className={'mt-12 flex justify-center align-middle h-full text-white'}>
                    {product.productName}
                </div>
            </div>
        </Link>
    );
}

export default CardTool
