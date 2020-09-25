const express = require('express')
// 创建一个路由容器
const router = express.Router()

router.get('/', function(req, res){
    // res.send('hello world')
    res.render('index.html', {
        name: '杨洋',
        age: 12,
        sex: '女',
        numberLists: [{color: 'red'}, {color: 'yellow'}, {color: 'green'}]
    })
})
router.get('/hhh', function(req, res){
    console.log(req.query)
    res.send('你好 hhh')
})
router.get('/redirect', function(req, res){
    console.log(req.query)
    //res.redirect('http://www.baidu.com')
    res.writeHead(301, {'Location': 'http://www.baidu.com'});
    res.end();
})
module.exports = router