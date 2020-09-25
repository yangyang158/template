const Sequelize = require('sequelize')
const mysql = require('mysql')
const glob = require('glob')
const path = require('path')

const modelsLists = {}
// 链接数据库
const sequelize = new Sequelize('test-demo2', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

// 测试链接是否成功
sequelize
    .authenticate()
    .then(() => {
        // 同步model和数据库
        glob(path.join(__dirname, '../models/**/*.js'), function (er, files) {
            if (er) throw err
            files.forEach(file => {
                const model = require(file)
                const modelObject = model(sequelize)
                const modelName = path.basename(file, '.js')
                modelsLists[modelName] = modelObject
            })
        })
        console.log('Connection has been established successfully.')
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })

module.exports = {
    modelsLists,
    sequelize
}