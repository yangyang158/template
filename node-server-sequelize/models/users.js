const Sequelize = require('sequelize')
const Model = Sequelize.Model
class User extends Model {}

const fields = {
    id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    psw: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        // allowNull 默认为 true
    },
    photo: {
        type: Sequelize.STRING,
    }
}
module.exports = function (sequelize) {
    User.init(fields, {
        sequelize,
        modelName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci',
    })
    // 同步到数据库
    User.sync({ alter: true })
    return User
}