/**
 * Created by 60376 on 2017/6/10.
 */
var express=require('express');
var router=express.Router();
router.get('/',function (req,res,next) {
    res.render('born');
});
module.exports=router;