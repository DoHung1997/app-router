import React from 'react';
import ToolList from "@/components/Home/ToolList";
import {unstable_noStore} from "next/cache";
import {getAllSeoProducts} from "@/api/request/product";

type PropsType = {}

const HomeContainer: React.FC<PropsType> = async () => {
    // Dynamic API
    unstable_noStore()

    const seoProductsData = getAllSeoProducts();
    // Initiate both requests in parallel
    const [seoProducts] = await Promise.all([seoProductsData])
    console.log('seoProducts', seoProducts)

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