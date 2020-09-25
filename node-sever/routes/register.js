const express = require('express')
// 创建一个路由容器
const router = express.Router()

router.get('/register', function(req, res){
    res.send('注册成功')
})
module.exports = router