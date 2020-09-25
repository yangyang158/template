var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test-demo'
}); 
 
connection.connect();
 
var  sql = 'SELECT * from users';
console.time('testForEach')
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        console.log(result)
        console.timeEnd('testForEach')
});
 
connection.end();