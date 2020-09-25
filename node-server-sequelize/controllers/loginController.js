const moment = require('moment')
const modelsList = require('../utils/db').modelsLists
const createToken = require('../utils/token')

let login = async function (req, res) {
    const {name, psw} = req.body
    // 判断该账号是否第一次登录，是的话 注册
    let result = await modelsList['users'].findAll({
        where: {
            name,
        }
    })
    let msg = '登录成功'
    let responseData = null
    if (result.length === 0) {
        // 第一次登录
        const addUser = await modelsList['users'].create({
            name,
            psw
        })
        responseData = await getUserInfoByName(name)
        responseData = responseData[0]
    } else {
        // 判断密码是否正确
        const userData = result[0]
        if (userData.psw !== psw) {
            msg = '登录失败, 密码不正确'
        } else {
            responseData = userData
        }
    }
    let token = createToken()
    res.setResponse
    res.setHeader('authorization', token)
    res.send({
        code: 200,
        msg,
        data: responseData
    })
}
let getUserInfoByName = function (name) {
    return modelsList['users'].findAll({
        where:{ name }
    })
}

module.exports = {
    login
}