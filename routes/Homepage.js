/**
 * Created by Administrator on 2017/5/16.
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
        if(kind =="老师")
        {
            res.redirect('/');
        }
        else
        {
            res.render("Homepage",{userid:userid});
        }
    }
});

module.exports = router;