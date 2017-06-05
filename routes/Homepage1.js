/**
 * Created by Administrator on 2017/5/19.
 */
var express = require('express');
var router = express.Router();

 router.get('/',function (req,res,next) {
     var userid =req.session.userid;
     var kind = req.session.kind;
     console.log("Homepage:"+userid);
     if(userid == undefined || userid=="")
     {
         res.redirect('/');
     }
     else
     {
         if(kind == "学生")
         {
             res.redirect('/');
         }
         else
         {
             res.render("Homepage1",{userid:userid});
         }
     }
 });

 module.exports = router;