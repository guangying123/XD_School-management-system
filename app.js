var express = require('express');
var  session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var Homepage = require('./routes/Homepage');
var Homepage1 = require('./routes/Homepage1');
var personal = require('./routes//personal');

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
app.post('/loginroute',function (req,res) {
    var temuserid = "14030130040";
    var temppw = "chang199698";
    var tempkind = "学生";
    var tempkind1 = "老师";
    var userid = req.body.userid;
    var pw = req.body.pw;
    var kind = req.body.kind;
    console.log(userid);//用户名
    console.log(pw);//密码
    console.log(kind);//类型
    if(userid==temuserid && pw==temppw && kind==tempkind)//最终改成从数据库中查询验证  判断为学生
    {
      req.session.userid = userid;
      req.session.pw = pw;
      req.session.kind=kind;
      res.end("student");
    }
    else
    {
        if(userid==temuserid && pw==temppw && kind==tempkind1)//判断为老师
        {
            req.session.userid = userid;
            req.session.pw = pw;
            req.session.kind = kind;
            res.end("teacher");
        }
        res.end("false");
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
