var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
  var userid = req.session.userid;
  var pw = req.session.pw;
  console.log("indexjs:"+userid);
  console.log("indexjs:"+pw);
      res.render('index',{userid:userid,pw:pw});
});

module.exports = router;
