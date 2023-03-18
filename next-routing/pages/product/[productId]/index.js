import React from 'react';
import { useRouter } from "next/router";

const ProductDetail = () => {
    //重要是取出这里面的query参数
    const { query } = useRouter();
    return (
        <>
            <h2>Product Detail {query.productId}</h2>
        </>
    );
};

export default ProductDetail;
