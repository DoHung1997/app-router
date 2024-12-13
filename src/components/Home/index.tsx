import React from 'react';
import ToolList from "@/components/Home/ToolList";
import {ProductModel} from "@/models/store/product";

type PropsType = {
    products: ProductModel[]
}

const HomeContainer: React.FC<PropsType> = ({products}) => {

    return (
        <div className={`w-full`}>
            {/* Tool List */}
            <div className={`bg-secondary15 p-20`}>
                <ToolList products={products}/>
            </div>
        </div>
    );
};

export default HomeContainer;