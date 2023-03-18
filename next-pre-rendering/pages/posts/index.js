import React from 'react';
import Link from "next/link";

//pre-render
//注意在你的页面里如果存在Link,在加载这个页面的时候，这些Link所指向的页面所需的数据(json)会被预先加载，
//这样即使Link指代的这些页面是在build的时候没有被加载到server/pages里的，也会提前执行getStaticProps方法得到json
//访问这些页面的时候就可以跳过fallback页面(通常为Loading...)
const PostList = ({ posts }) => {
    return (
        <>
            <h1>list of posts</h1>
            {
                posts.map(p => (
                    <div key={p.id}>
                        <Link href={`posts/${p.id}`} passHref>
                            <h2>{p.id} - {p.title}</h2>
                        </Link>
                        <hr/>
                    </div>
                ))
            }
        </>
    );
};


export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return {
        props: {
            posts: posts
        }
    }
}

export default PostList;
