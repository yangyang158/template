const express = require('express')
// 创建一个路由容器
const router = express.Router()
const userController = require('../controllers/userController')
var multer  = require('multer')
var path  = require('path')

const upload = multer({
    storage: multer.diskStorage({ 
        // dest: 'upload-files/',
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '../upload-files/'))
        }, 
        filename: function (req, file, cb) {
            const type = file.originalname.split('.')[1]
            const name = file.originalname.split('.')[0]
            cb(null, name + '' + Date.now() + `.${type}`)
        }
    })
})

router.get('/users/tableData', userController.getAllUsers)
router.delete('/deleteUser/:id', userController.deleteUserById)
router.put('/user/:id', userController.updateUserData)
router.post('/user/upload-photo/:id', upload.single('file'), userController.uploadUserPhoto)
module.exports = router