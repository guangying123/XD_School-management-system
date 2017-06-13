var express = require('express');
var router =express.Router();

router.get('/',function (req,res,next) {
    var userid = req.session.userid;
    if(userid == ''||userid == undefined)
    {
        res.render('index');
    }
    else
    {
        res.render('scoreSearch',{userid:userid})
    }
});

module.exports = router;