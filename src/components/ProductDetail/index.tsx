import React from 'react';

type PropsType = {
    product: any
}

const ProductDetailContainer: React.FC<PropsType> = ({product}) => {


    return (
        <>
            {product.name}
        </>
    );
};

export default ProductDetailContainer;