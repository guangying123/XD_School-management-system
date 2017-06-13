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

router.get('/teacher',function (req,res,next) {
    var userid=req.query.userid;
    var sql="select * from teacher where gonghao=?";
    var sqlpar=[userid];
    client.query(sql,sqlpar,function (err,result) {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{

            var temp=JSON.stringify(result[0]);
            //console.log(temp);
            res.end(temp);
        }
    })

});

router.get('/deal_score',function (req,res,next) {
    var xuehao=req.query.xuehao;
    var course=req.query.course;
    var score=req.query.score;
    var sql="insert into score values(?,?,?)";
    var sqlpar=[xuehao,course,score];
    client.query(sql,sqlpar,function (err) {
        if(err){
            res.send("fail");
            res.end();
            client.destroy();
            // console.log(err);

        }
        else{
            res.send("success");
            res.end();
        }
    })
});

router.get('/born',function (req,res,next) {

    var req=req.query;
    // var obj=JSON.parse(req);
    console.log(req);

    client.beginTransaction(function (err) {
        if(err) throw err;
        for(var i=1;i<=req[0];i++){
            var userid=req[i].userid;
            var pw=req[i].pw;

            var sql="insert into user_pw values(?,?)";
            var sqlpar=[userid,pw];
            client.query(sql,sqlpar,function (err) {
                if(err){
                    res.end("fail");
                    return client.rollback(function () {
                        throw err;
                    });
                };
            });
        };
        client.commit(function (err) {
            if(err){
                res.end("fail");
                return client.rollback(function () {
                    throw err;
                })
            }
        })

        console.log("success");
        res.end("success");
    })


});

router.get('/deal_class',function (req,res) {//处理班级信息
    var sql="select distinct class from xktab";
    client.query(sql,function (err,result) {
        if(err)
            throw err;
        //console.log(result[0]);
        var temp=JSON.stringify(result[0]);
        res.end(temp);
    })
});

router.get("/deal_class_chose",function (req,res) {//处理科目信息
    var course=req.query.class;
    var sql="select courseID,Coursename from course where CourseID in(select courseID from xktab where class=?);";
    var sqlpar=[course];
    client.query(sql,sqlpar,function (err,result) {
        if(err)
            throw err;
        console.log(result);
        var temp=JSON.stringify(result);

        res.end(temp);
    })
});
router.get('/deal_student',function (req,res) {//处理学号信息
    var student=req.query.student;
    var sql="select xuehao from student where banji=?;";
    var sqlpar=[student];
    client.query(sql,sqlpar,function (err,result) {
        if(err)
            throw err;
        //console.log(result);
        var temp=JSON.stringify(result);
        res.end(temp);
    })

});
router.get('/deal_point',function (req,res) {//插入分数
    var stu=req.query.stu;
    var sub=req.query.sub;
    var point=req.query.point;
    var sql="insert into score() values(?,?,?)";
    var sqlpar=[stu,sub,point];
    client.query(sql,sqlpar,function (err) {
        if(err)
            throw err;
        res.end("success");
    })
})


module.exports = router;