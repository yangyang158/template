const mysql = require('mysql')

// let config = {
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'test-demo'
// }
// let pool = mysql.createPool(config)
 
// pool.getConnection(function(err, connection){
//     console.time('testForEach')
//     connection.query('SELECT * from users', function (error, results, fields) {
//         if (error) throw error
//         // console.log('The solution is: ', results)
//         console.timeEnd('testForEach')
//     })
//     connection.release()
// })

module.exports = {
    config: {
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'test-demo'
    },
    // sqlArr: sql语句中的参数
    sqlConnect: function (sql, sqlArr, callback) {
        let pool = mysql.createPool(this.config)
        pool.getConnection(function(err, connection){
            if (err) {
               console.log('链接失败')
               return
            }
            connection.query(sql, sqlArr, callback)
            connection.release()
        })
    },
    // sql查询异步函数
    syncSqlConnect: function (sql, sqlArr) {
        return new Promise((resolve, reject) => {
            let pool = mysql.createPool(this.config)
            pool.getConnection(function(err, connection){
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, sqlArr, function(error, result) {
                        if (error) {
                            reject(error)
                        } else {
                            resolve(result)
                        }
                    })
                    connection.release()
                }
            })
        }).catch((err) => {
            console.log(err)
        })
    }
}