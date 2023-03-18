import React from 'react';
import Footer from "@/layout/Footer";
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>about page</title>
                <meta name='description' content='next js development'/>
            </Head>
            <h1 className='content'>About</h1>
        </>
    );
};


About.getLayout = (page) => {
    //page 这里指代上面的page(About)
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}

export default About;
