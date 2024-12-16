import React from 'react';
import ToolList from "@/components/Home/ToolList";
import {getAllSeoProducts} from "@/api/request/product";
import {unstable_noStore} from "next/cache";
import {Button} from "@nextui-org/react";
import {cookieGet} from "@/helpers";
import {StorageKey} from "@/constants";

type PropsType = {}

const HomeContainer: React.FC<PropsType> = async () => {
    // Dynamic API
    unstable_noStore()

    const seoProductsData = getAllSeoProducts();
    // Initiate both requests in parallel
    const [seoProducts] = await Promise.all([seoProductsData])

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