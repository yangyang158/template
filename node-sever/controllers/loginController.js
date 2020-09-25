const moment = require('moment')
const db = require('../utils/db')

let login = async(req, res) => {
    console.log('***', req.body)
    const {name, psw} = req.body
    // 最终返回用户的信息
    let userData = await validateUser(name, psw)
    console.log('userData', userData)
    if (userData && userData.create_time) {
        userData.create_time = moment(userData.create_time).format('YYYY-MM-DD HH:mm:ss')
    }
    res.send({
        code: 200,
        msg: userData ? '登录成功' : '手机号或密码错误',
        data: userData
    })
    // let sql = 'select * from users where name = ?'
    // db.sqlConnect(sql, [name], function(err, result){
    //     if (err) {
    //         console.log('操作数据库失败', err)
    //     } else {
    //         console.log('result', result)
    //         if (result.length === 0) {

    //         } else {
    //             getAllUsers()
    //             res.send({
    //                 code: 200,
    //                 msg: '登录成功',
    //                 data: result[0]
    //             })
    //         }
    //     }
    // })
}

let register = async(name, psw) => {
    let sql = 'insert into users(name,psw,create_time) values(?,?,?)'
    console.log('注册中', moment().format('YYYY-MM-DD HH:mm:ss'))
    return db.syncSqlConnect(sql, [name, psw, moment().format('YYYY-MM-DD HH:mm:ss')])
}

let getAllUsers = () => {
    let sql = 'select * from users'
    return db.syncSqlConnect(sql, [])
}

// 判断用户是否第一次登录, 是的话则注册
let validateUser = async(name, psw) => {
    let sql = 'select * from users where name = ?'
    data = await db.syncSqlConnect(sql, [name])
    console.log('**3** ', data)
    if (data.length > 0) {
        // 密码是否正确
        let sql = 'select * from users where psw = ? and name = ?'
        data = await db.syncSqlConnect(sql, [psw, name])
        if (data.length > 0) {
            return data[0]
        } else {
            return ''
        }
    } else {
        // 第一次登录, 注册
        await register(name, psw)
        let userdData = await getUserInfo(name)
        console.log('注册成功', userdData)
        return userdData[0]
    }
}

let getUserInfo = (name) => {
    let sql = 'select * from users where name =  ?'
    return db.syncSqlConnect(sql, [name])
}

let getStationInfo = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send({
        code: 200,
        msg: '成功',
        data: [{
            name: '沙尧则供水站',
            level: Math.ceil((Math.random() * 10)),
            time: '2020-06-30 16:59:10'
        }, {
            name: '清水供水站',
            level: Math.ceil((Math.random() * 10)),
            time: '2020-05-30 20:29:26'
        }, {
            name: '陈家畔供水站',
            level: Math.ceil((Math.random() * 10)),
            time: '2020-02-14 10:10:50'
        }, {
            name: '新元节能',
            level: Math.ceil((Math.random() * 10)),
            time: '2020-10-30 11:30:23'
        }]
    })
}

module.exports = {
    login, 
    register,
    getStationInfo
}