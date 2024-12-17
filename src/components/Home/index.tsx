'use client'

import React, {useEffect, useState} from 'react';
import ToolList from "@/components/Home/ToolList";
import {getAllSeoProducts} from "@/api/request/product";
import {ProductModel} from "@/models/store/product";

type PropsType = {}

const HomeContainer: React.FC<PropsType> = () => {
    // // Dynamic API
    // unstable_noStore()
    //
    // const seoProductsData = getAllSeoProducts();
    // // Initiate both requests in parallel
    // const [seoProducts] = await Promise.all([seoProductsData])
    // console.log('seoProducts', seoProducts)

    const [seoProducts, setSeoProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        (async () => {
            const response = await getAllSeoProducts();
            setSeoProducts(response)
        })()
    }, []);


    return (
        <div className={`w-full`}>
            {/* Tool List */}
            <div className={`bg-secondary15 p-20`}>
                <ToolList products={seoProducts}/>
            </div>
        </div>
    );
};

export default HomeContainer;