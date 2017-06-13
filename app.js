var express = require('express');
var  session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var index = require('./routes/index');
var users = require('./routes/users');
var Homepage = require('./routes/Homepage');
var Homepage1 = require('./routes/Homepage1');
var personal = require('./routes/personal');
var Center_back = require('./routes/Center_back');
var searchCourse = require('./routes/searchCourse');
var searchdeal = require('./routes/searchdeal');
var scoreSearch = require('./routes/scoreSearch');
var scoredeal = require('./routes/scoredeal');
var personal1=require('./routes/personal1');
var insert=require('./routes/insert');
var born=require('./routes/born');


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret:"mochen",
    name:"XDUN",
    cookie:{maxAge:1000*3600},//有效期为一天
    resave:true,//(是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对session进行修改覆盖并保存。
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

//界面渲染
app.use('/', index);//学籍登陆主界面
app.use('/users', users);
app.use('/Homepage',Homepage);//主界面 学生
app.use('/Homepage1',Homepage1);//主界面  老师
app.use('/personal',personal);
app.use('/Center_back',Center_back);
app.use('/searchCourse',searchCourse);
app.use('/searchdeal',searchdeal);
app.use('/scoreSearch',scoreSearch);
app.use('/scoredeal',scoredeal);
app.use('/personal1',personal1);
app.use('/insert',insert);//插入成绩页面
app.use('/born',born);


app.get('/destroy',function (req,res) {
    req.session.destroy(function (err) {
        if(err)
        {
            console.log("Session销毁失败");
        }
        else
        {
            console.log("Session销毁成功");
        }
        res.end();
    });
});

//提交处理路由
app.post('/loginroute',function (req,res)
{
    var client = mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        database:'XD_School_Manager',
        password:'123456',
        useConnectionPooling: true
    });
    var userid = req.body.userid;
    var pw = req.body.pw;
    var kind = req.body.kind;
    if(kind=="学生")//最终改成从数据库中查询验证  判断为学生
    {
        var sqlstudent = "select * from user_pw where userid=? and pw=?";
        var studentpar = [userid,pw];
        client.query(sqlstudent,studentpar,function (err,result) {
            if(err)
            {
                console.log(err);
                res.end("false");//检验失败
            }
            else
            {
                if(result.length!=0)
                {
                    req.session.userid = userid;
                    req.session.pw = pw;
                    req.session.kind=kind;
                    //console.log(result);
                    res.end("student");
                }
            }
        })
    }
    else  //类型为老师  判断方式和学生类似
    { var sqlte="select * from Tuser_pw where userid=? and pw=? ";
        var sqltepar=[userid,pw];
        client.query(sqlte,sqltepar,function (err,result)
        {
            if(err)
            {
                console.log(err);
                res.end('false');
            }
            else
            {
                if(result.length!=0){
                    req.session.userid = userid;
                    req.session.pw = pw;
                    req.session.kind = kind;
                    res.end("teacher");
                }
            }
        })
    }
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
