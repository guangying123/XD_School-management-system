var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var client = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    database:'XD_School_Manager',
    password:'123456',
    useConnectionPooling: true
});

router.get('/',function (req,res,next) {
    var userid = req.query.userid;
    var sql = "select * from student where xuehao=?";
    var sqlpar = [userid];
    client.query(sql,sqlpar,function (err,result) {
        if(err)
        {
            console.log(err);
            res.end();
        }
        else
        {
          //console.log(result[0]);
          var temp = JSON.stringify(result[0]);
          //console.log(temp);
          res.end(temp);
        }
    })
});

module.exports = router;