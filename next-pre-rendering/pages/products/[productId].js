import React from 'react';
import { useRouter } from "next/router";

const ProductDetail = ({ product }) => {
    const router = useRouter();
    if(router.isFallback) return <div>Loading...</div>
    return (
        <div>
            <h2>{product.id} {product.title} {product.price}</h2>
            <p>{product.description}</p>
            <hr/>
        </div>
    );
};

//在构建时(build)提前render page: /products/1
export async function getStaticPaths(){
    return {
        paths:[
            { params: { productId: '1' } }
        ],
        fallback: true
    }
}

export async function getStaticProps(context){
    const { productId } = context.params;
    console.log(`Regenerating page for productId: ${productId}`);
    const res = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await res.json();
    if(!product){
        return {
            notFound: true
        }
    }
    return {
        props: {
            product
        },
        revalidate: 10
    }
}

export default ProductDetail;
