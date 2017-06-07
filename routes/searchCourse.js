var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var userid = req.session.userid;
    console.log(userid);
    if(userid == undefined || userid =='')
    {
        res.render('index');
    }
    else
    {
        res.render('searchCourse',{userid:userid});
    }
});

module.exports = router;
