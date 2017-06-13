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
    var userId = req.query.userId;
    var term = req.query.term;
    var sql = "";
        sql = "select distinct coursename,xuefen,score from score,Course where score.CourseID = Course.CourseID and xuehao = ? and score.CourseID in(select courseID from XKtab"+
                " where class =(select banji from Student where xuehao = ?) and xueqi = ?)";
        var sqlpar = [userId,userId,term];
        //console.log(sqlpar);
        client.query(sql,sqlpar,function (err,result)
        {
           if(err)
           {
               console.log(err);
                res.end('false');
           }
            res.end(JSON.stringify(result));
        });

});
module.exports = router;