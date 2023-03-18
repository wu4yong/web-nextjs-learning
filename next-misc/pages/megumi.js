import React from 'react';
import Image from "next/image";
import megumi from '../public/megumi.jpg';
//压缩image lazyloading image
//plceholder 占位图 blurDataUrl: 占位图地址 webp
const MegumiPage = () => {
    return (
        <div>
            <Image src={megumi} placeholder='blur' blurDataURL='https://truth.bahamut.com.tw/s01/201803/380c0a9091243c70edfdf476aea6e624.JPG' width={100} height={100}/>
            {/*<Image src='/megumi.jpg'*/}
            {/*       alt='megumi'*/}
            {/*       width={100}*/}
            {/*       height={100}*/}
            {/*/>*/}
        </div>
    );
};

export default MegumiPage;
