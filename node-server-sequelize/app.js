const path = require('path')
const express = require('express')
const glob = require('glob')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const app = express()
const port = 6009
// 配置模板引擎
app.engine('html', require('express-art-template'))
// 设置模板存储目录, 默认views。app.set('views', '路径')
app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'art')
// 处理静态资源文件, 访问路径是/public/js文件夹下的文件
app.use('/public', express.static(path.join(__dirname, './public/')))
// 解析post请求的参数
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 将路由容器挂载到app服务上
glob(path.join(__dirname, 'routes/**/*.js'), function (er, files) {
    if (er) throw err
    files.forEach(file => {
        const router = require(file)
        app.use(router)
    })
})
//使用中间件验证token合法性
// app.use(expressJwt ({
//     secret: 'userInfo' ,
//     algorithms: ['HS256']
// }).unless({
//     path: ['/login', '/hello']  //除了这些地址，其他的URL都需要验证
// }))

//拦截器
app.use(function (err, req, res, next) {
    console.log('****333**', req.headers.authorization)
    console.log('****app**', app.get('userInfo'))
    let authorization = req.headers.authorization
    if (authorization) {      
        // 解码 token (验证 secret 和检查有效期（exp）)
        // jwt.verify(authorization, 'userInfo', function(err, decoded) {   
        //     console.log('err', err)   
        //     if (err) {
        //         // return res.json({ success: false, message: '无效的token.' });    
        //         res.redirect('http://192.168.141.210:8081/index.html#/login')
        //     } else {
        //         // 如果验证通过，在req中写入解密结果
        //         req.decoded = decoded;  
        //         console.log('decoded', decoded)  ;
        //         next(); //继续下一步路由
        //     }
        // });
      } else {
        // 没有拿到token 返回错误 
        return res.status(403).send({ 
            success: false, 
            message: '没有找到token.' 
        });
    }
    // //当token验证失败时会抛出如下错误
    // if (err.name === 'UnauthorizedError') {   
    //     //这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
    //     res.status(401).send('invalid token...')
    // }
})

app.listen(port, () => console.log(`app is running at port ${port}!`))