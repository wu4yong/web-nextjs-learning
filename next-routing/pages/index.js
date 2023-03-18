import React from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();
    const handelClick = () => {
        console.log('placing your order');
        //router.push('/product'); //类似于react-router-dom的navigate写法
        //router.replace('/product'); 替换到堆栈上前一个路由信息
    }

    return (
        <div>
            <h1>home page</h1>
            <h3>
                <Link href="/blog">
                    <a>blog</a>
                </Link>
            </h3>
            <h3>
                <Link href="/product">
                    <a>product</a>
                </Link>
            </h3>
            <button onClick={handelClick}>
                place order
            </button>
        </div>
    );
};

export default Home;
