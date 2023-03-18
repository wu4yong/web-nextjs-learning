import React from 'react';
import Head from 'next/head';
//head title/meta可以自由定制 (jsx)
const BlogDetail = ({ title, description }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
            </Head>
            <h1 className='content'>article: ID:{process.env.NEXT_PUBLIC_ID}</h1>
        </>
    );
};

export async function getServerSideProps(){
    //环境变量 .local.env /
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    console.log({user,password});
    return {
        props: {
            title: 'Article Title',
            description: 'Article Description',
        }
    }
}

export default BlogDetail;
