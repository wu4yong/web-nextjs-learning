import React from 'react';

const News = ({ news }) => {
    return (
        <h1 className='content'>{news}</h1>
    );
};


//SSG
export async function getStaticProps(ctx){
    console.log('getRunning static props', ctx.previewData);
    return {
        props:  {
            news: ctx.preview ? '草稿': '一段随机新闻'
        }
    }
}

export default News;
