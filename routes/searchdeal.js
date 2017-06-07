var express = require('express');
var router = express.Router();
var mysql= require('mysql');

var client = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    database:'XD_School_Manager',
    password:'123456',
    useConnectionPooling: true
});


 router.get('/',function (req,res,next) {
     var xueqi = req.query.xueqi;
     var week = req.query.week;
     var banji = req.query.banji;
     var sql = "select coursename,teacher,room,whichday,AMPM,jie from Course,XKtab where Course.courseID = XKtab.courseID and class = ? and xueqi = ? and cstart <= ? and cend >= ? order by whichday,AMPM,jie";
     var sqlpar = [banji,xueqi,week,week];
     client.query(sql,sqlpar,function (err,result) {
        if(err)
        {
            console.log(err);
            res.end("error");
        }
        else
        {
            //console.log(JSON.stringify(result));
            res.end(JSON.stringify(result));
        }
     });
 });

 module.exports = router;