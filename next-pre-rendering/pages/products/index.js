import React from 'react';

const ProductList = ({ products }) => {
    return (
        <>
          <h1>List of products</h1>
            {products.map(p => (
                <div key={p.id}>
                    <h2>{p.id}--{p.title}--{p.price}</h2>
                    <hr/>
                </div>
            ))}
        </>
    );
};

//ISR
export async function getStaticProps() {
    console.log('generating / Regenarating static page');
    const res = await fetch('http://localhost:4000/products');
    const products = await res.json();
    return {
        props: {
            products
        },
        //在30s之内你怎么reload page都没用 都是cache里第一次built好的page
        //30s之后fetch新的data
        revalidate: 30
    }
}

export default ProductList;


