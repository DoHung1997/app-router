'use client'

import React from 'react';
import ToolList from "@/components/Home/ToolList";
import {ProductModel} from "@/models/store/product";

type PropsType = {
    seoProducts: ProductModel[]
}

const HomeContainer: React.FC<PropsType> = ({seoProducts}) => {

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