import React from 'react';
import { useRouter } from "next/router";

const Doc = () => {
    const router = useRouter();
    console.log(router.query)
    const { params = [] } = router.query;
    if(params.length === 2){
        return <h1>{params[0]} {params[1]}</h1>
    }else if(params.length === 1){
        return <h1>{params[0]}</h1>
    }
    return (
        <h1>doc home page</h1>
    )
};

export default Doc;
