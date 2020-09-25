const http  = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
// 监听客户端发的请求
server.on('request', (req, res) => {
    console.log('收到请求了, 请求url是：', req.url)
    // res处理
    //1、write方法可以给客户端发送响应数据, 但必须调用end结束响应, 否则客户端会一直等待
    //2、write方法的响应数据只能是字符串或二进制
    //3、判断req.url, 做出不同的响应
    if (req.url === '/') {   
        res.end('hello')
    }

    if (req.url === '/page') {   
        // 服务器端默认返回的是utf8的编码内容，但是浏览器不知道，就会按照当前操作系统的默认编码去解析, 中文操作系统默认始gbk
        // 所以response要设置Content-Type告诉浏览器是何种编码
        // 编码 是指对字符的编码
        res.setHeader('Content-Type', 'text/html;charset=UTF-8')
        fs.readFile(path.resolve(__dirname, 'template.html'), function(err, data){
            console.log(err)
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=UTF-8')
                res.write('文件读取失败')
            } else {
                data = data.toString()
                res.write(data)
            }
            res.end()
        })
    }
    if (req.url === '/hello') {   
        res.end(JSON.stringify({name: 11, age: 12}))
    }
    if (req.url === '/redirect') {   
        // 服务器重定向
        res.statusCode = 302
        res.setHeader('location', 'https://www.baidu.com')
        res.end()
    }
})
server.listen(6008, function() {
    console.log('服务器启动成功, 可以通过http://localhost:6008访问')
})
