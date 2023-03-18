import React from 'react';
import Link from "next/link";

const Product = ({ productId=1000 }) => {
    return (
        <>
            <Link href='/'>
                home page
            </Link>
            <h2>
                <Link href='/product/1'>
                    <a>Product 1</a>
                </Link>
            </h2>
            <h2>
                <Link href='/product/2'>
                    <a>Product 2</a>
                </Link>
            </h2>
            <h2>
                <Link href='/product/3' replace>
                    <a>Product 3</a>
                </Link>
            </h2>
            <h2>
                <Link href={`/product/${productId}`}>
                    <a>product {productId}</a>
                </Link>
            </h2>
        </>
    );
};

export default Product;
