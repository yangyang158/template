const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routeLists = require('./routes/list')

const app = express()
const port = 6007
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
for (let i in routeLists) {
    app.use(routeLists[i])
}

app.listen(port, () => console.log(`app is running at port ${port}!`))