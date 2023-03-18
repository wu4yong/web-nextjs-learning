import React, { useState, useEffect } from 'react';

//CSR 不那么注重SEO => client server render(react hook)
//nextjs 会默认pre render page但是取决与你page的初始state(在CSR中是这样的) 所以一开始只渲染出来一个Loading text
//component不同于page(无法使用getServerSideProps|getInitialProps|getStaticProps)，一般选择csr方式(页面挂载之后再抓取data)
const Dashboard = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [dashBoardData, setDashBoardData] = useState(null);

    useEffect(() => {
        const fetchDashBoardData = async () => {
            const response = await fetch('http://localhost:4000/dashboard');
            const data = await response.json();
            setDashBoardData(data);
            setIsLoading(false);
        }
        fetchDashBoardData();
    }, [])

    if(isLoading) {
        return <h1>Loading...</h1>
    }

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

export default Dashboard;
