import React from 'react';
// import { useRouter } from "next/router";

const PostDetail = ({ post }) => {
    // const router = useRouter();
    //
    // if(router.isFallback){
    //     return <div>Loading...</div>
    // }

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
};

//告诉我要渲染多少个页面id有多少个 preRender
//这里告诉nextjs在build的时候需要静态渲染SSG 3个页面(posts/1,posts/2,posts/3)
export async function getStaticPaths(){
    //return obj containing path and params
    return {
        paths: [
            {
                //告诉nextjs在build time给我打包渲染这个postId为1的post(dynamic SSG)
                params: { postId: '1' },
            },
            {
                params: { postId: '2' },
            },
            {
                params: { postId: '3' },
            }
        ],
        //fallback: false 使用情况: 当你的少量path需要提前渲染，不需要经常加添加其他page。例如博客网站blog比较适合将fallback设置为true
        //fallback: false, //false | true | 'blocking'
        // fallback: false

        //fallback: true时
        //1.getStaticPaths返回的path将会在build time中被getStaticProps使用，生成对应page(这一点与fallback: false)基本一致
        //2.但是这个时候没有指定的path，不会抛出404页，在第一次请求时是先展示fallback version page，这在上面的组件来看就是Loading text
        //3.在后台getStaticProps会运行，生成对应的json
        //4.这里浏览器就收到了指定的path对应的json数据，之后会结合所需的props(这里指上面的post)自动的渲染对应的page
        //5.isFallback此时被设置为false,因为此时页面已经全部渲染完成,从fallback的页面跳转到已完成渲染的页面
        //6.之后这个page就被cached到build(.next文件)里面了，等之后其他用户再次访问就不会loading...
        //fallback: true使用场景 你有大量的静态页面需要pre-render ecommerce类型的网站
        // fallback: true

        //fallback: 'blocking'
        //blocking与true情况相似
        /**
         * 只是在第一次访问时它没有loading状态类似于router.isFallback,取而代之浏览器会有loading(icon位置)，
         * 等待page加载完成之后直接返回完整的page而不是返回loading页
         * the ui is blocked until the new page is loaded
         */
        //除此之外，基本与true相同
        //fallback: 'blocking' 使用场景(当你不太希望在ui出现loading indicator的时候)
        fallback: 'blocking'
    }
}

//100个页面需要渲染 (build time爆掉)
// export async function getStaticPaths(){
//     //serve端运行
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await res.json();
//     const paths = posts.map(p => ({
//         params: {
//             postId: `${p.id}`
//         }
//     }))
//     return {
//         paths,
//         fallback: false, //false true 'blocking'
//     }
// }

//SSG dynamic page在build time只运行一次
export async function getStaticProps(context){
    const { params } = context //get params from context()
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    console.log(`generate page for /post/${params.postId}`);
    const post = await response.json();
    if(!post.id){
        return {
            notFound: true //这里就代表，在fallback:true的情况下如果你访问id得到的数据不存在时，将会返回404page(nextjs默认的404page)
        }
    }
    return {
        props: {
            post
        }
    }
}

export default PostDetail;
