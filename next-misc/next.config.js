//发生在服务端
module.exports = {
    reactStrictMode: true,
    env:{
        DB_USER: 'py',
        DB_PASSWORD: 'py',
        NEXT_PUBLIC_ID: 'shiori-yue'
    },
    redirects: async () => {
        return [
            {
                //about直接跳到home
                source: '/about',
                destination: '/',
                permanent: false,
            },
            {
                source: '/old-blog/:id',
                destination: '/new-blog/:id',
                permanent: true,
            }
        ]
    }
}
