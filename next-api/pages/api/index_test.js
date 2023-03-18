//api route index
//nextjs full stack framework

//默认暴露出一个函数send what you want to send to client
//(这些写在api folder里的代码是不会被打包进bundle.js里的，不会送到前端react app)
export default function handler(req, res){
    res.status(200).json({
        message: 'Welcome to the Index API Route!!'
    })
}
