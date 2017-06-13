/**
 * Created by 60376 on 2017/6/7.
 */
var express=require('express');
var router=express.Router();

router.get('/', function(req, res, next) {
    var userid = req.session.userid;
    console.log(userid);
    if(userid == undefined || userid =='')
    {
        res.render('index');
    }
    else
    {
        res.render('personal1',{userid:userid});
    }
});

module.exports = router;
