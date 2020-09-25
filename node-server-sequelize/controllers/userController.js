const moment = require('moment')
const modelsList = require('../utils/db').modelsLists
var multer  = require('multer')
const upload = multer({ dest: 'upload-files/' })

const getModel = function (modelName) {
    return modelsList[modelName]
}
const getAllUsers = async function (req, res) {
    let result = await getModel('users').findAll()
    let data = []
    if (result.length > 0) {
        for (let res of result) {
            console.log(333, moment(res.dataValues.createdAt).format('YYYY-MM-DD HH:mm:ss'))
            res.dataValues.createdAt = moment(res.dataValues.createdAt).format('YYYY-MM-DD HH:mm:ss')
            res.dataValues.updatedAt = moment(res.dataValues.updatedAt).format('YYYY-MM-DD HH:mm:ss')
            data.push(res)
        }
    }
    res.send({
        code: 200,
        msg: '获取成功',
        data
    })
}
const deleteUserById = async function (req, res) {
    const deleteUserStatus = await getModel('users').destroy({
        where:{ id:  req.params.id }
    })
    if (deleteUserStatus === 1) {
            res.send({
            code: 200,
            msg: '删除成功',
            data: null
        })
    }
}

const updateUserData = async function(req, res) {
    const {name, phone, photo, } = req.body
    let result = await getModel('users').update({
        name,
        phone,
        photo,
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }, {where:{ id: req.params.id }})
    if (result[0] === 1) {
        res.send({
            code: 200,
            msg: '修改成功',
            data: null
        })
    }
}
const uploadUserPhoto = async function(req, res) {
    console.log(req.file)
    let result = await getModel('users').update({
        photo: req.file.filename,
        updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')
    }, {where:{ id: req.params.id }})
    if (result[0] === 1) {
        res.send({
            code: 200,
            msg: '上传成功',
            data: req.file.filename
        })
    }
}

module.exports = {
    getAllUsers, 
    deleteUserById,
    updateUserData,
    uploadUserPhoto
}