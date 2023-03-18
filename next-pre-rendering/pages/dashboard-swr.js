import React from 'react';
import useSWR from 'swr';

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard');
    return await response.json();
}

//使用swr在client side抓取data
const DashboardSWR = () => {

     const { data: dashBoardData, error } = useSWR('dashboard', fetcher);

     if(error) return <div>failed to load, error:{error.message}</div>

     if(!dashBoardData) return <div>loading...</div>

    return (
        <div>
            <h2>DashBoard</h2>
            <h2>Posts - {dashBoardData.posts}</h2>
            <h2>Likes - {dashBoardData.likes}</h2>
            <h2>Followers - {dashBoardData.followers}</h2>
            <h2>Following - {dashBoardData.following}</h2>
        </div>
    );
};

export default DashboardSWR;
