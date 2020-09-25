const express = require('express')
const { request } = require('express')
// 创建一个路由容器
const router = express.Router()
const loginController = require('../controllers/loginController')

// 根据登录信息 判断是否存在该用户, 若不存在 相当于注册
router.post('/login', loginController.login)
router.get('/getStationInfo', loginController.getStationInfo)

module.exports = router