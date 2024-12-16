import React from 'react';
import {ProductModel} from "@/models/store/product";

type PropsType = {
    product: ProductModel
}

const ProductDetailContainer: React.FC<PropsType> = ({product}) => {

    return (
        <>
            {product.productName}
            {product.thumbnail ? <img src={product.thumbnail} alt={''}/> : ''}
        </>
    );
};

export default ProductDetailContainer;