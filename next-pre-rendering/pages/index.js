import React from 'react';
import Link from  'next/link';

const Home = () => {
    return (
        <>
            <h1>
                next js pre-rendering
            </h1>
            <Link href='/users' passHref>
                <p>users</p>
            </Link>
            <Link href='/posts' passHref>
                <p>Posts</p>
            </Link>
        </>
    );
};

export default Home;
