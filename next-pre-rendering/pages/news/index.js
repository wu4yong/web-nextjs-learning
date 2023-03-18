import React from 'react';

const NewsList = ({ news }) => {
    return (
        <>
          <h1>new lists</h1>
            {news.map(n => (
                <div key={n.id}>
                    <h3>{n.title} | {n.category}</h3>
                </div>
            ))}
        </>
    );
};

//每次请求(request)在server端pre render html(都会运行该函数getServerSideProps)
//只在服务端运行(不像csr在客户端fetch data)
//该函数里面的代码不会被打包成js bundle发到client
//该函数中你可以书写类似node js中的异步操作(文件读写)
//getServerSideProps只被允许在page当中，而不能在常规component中运行
//应当返回一个object(包含props属性(对象中包含的属性会被解析成页面的props)例如上述的NewsList中的news)
export async function getServerSideProps(){
    const res = await fetch('http://localhost:4000/news');
    const news = await res.json();
    console.log('Pre Rendering news page');
    return {
        props: {
            news
        }
    }
}

export default NewsList;
