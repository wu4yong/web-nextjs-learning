import React from 'react';

const ArticleByCategory  = ({ category, news }) => {
    return (
        <>
          <h1>Showing news for Category: {category}</h1>
            {
                news.map(n => (
                    <div key={n.id}>
                        <h3>{n.id}---{n.title}</h3>
                        <p>{n.description}</p>
                        <hr/>
                    </div>
                ))
            }
        </>
    );
};


//dynamically pre render page by ssr
export async function getServerSideProps(context) {
    const { params, req, res, query } = context; // get the category from the url
    // console.log({ query, params }); //query也能抓住search参数,基本可以取代params
    // console.log(req.headers.cookie);
    //res.setHeader('Set-Cookie', ['name=py']); //set cookie
    const response = await fetch(`http://localhost:4000/news?category=${params.category}`);
    const news = await response.json();
    console.log(`Pre rendering news page by category: ${params.category}`);
    return {
        props: {
            news,
            category: params.category
        }
    }
}

export default ArticleByCategory;
