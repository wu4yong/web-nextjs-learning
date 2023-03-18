import React from 'react';
import User from "../components/user";

//组件并不需要nextjs 给它额外的特性，不像pages
const Users = ({ users }) => {
    return (
        <>
            <h1>List of Users</h1>
            {
                users.map(u => (
                    <User user={u} key={u.id}/>
                ))
            }
        </>
    );
};

//run at build time in production to fetch data send to the page as props
//static generation with data
//getStaticProps只在服务端运行 不在客户端运行,所以你在这个函数里写的代码不会被打包为js bundle发布到浏览器
//getStaticProps只会在服务端运行一次，所以你可以在这里获取到所有的数据，然后把它们放到一个对象里返回
//你可以在getStaticProps里面调用任何你想要的API，或者进行node.js的异步操作(文件读写之类的)
//getStaticProps只允许在page里运行，而不允许在component里运行
//getStaticProps只适用于服务端渲染(pre-rendering)，而不适用于客户端渲染(client-side data fetching)
//getStaticProps应该返回一个对象，对象里面的props会被传递给你的page
//getStaticProps在build time里运行,但是在development mode下，他会在每次请求中run一次
export async function getStaticProps(){
    //当需要渲染数据来渲染page时 使用getStaticProps async function
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
    //console.log(users); //不在浏览器控制器显示
    return {
        props: {
            users
        }
    }
}

export default Users;
