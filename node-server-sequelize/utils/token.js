const jwt= require('jsonwebtoken')
const expressJwt = require('express-jwt')


module.exports = function createToken(userId) {
    //定义签名
    const secret = 'userInfo'
    //生成token
    const token = jwt.sign({
        name: userId
    }, secret, {
        expiresIn: 60 //秒到期时间
    })
    console.log('*****', token)
    return token
}