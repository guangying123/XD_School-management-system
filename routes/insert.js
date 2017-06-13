/**
 * Created by 60376 on 2017/6/10.
 */
var express=require('express');
var route=express.Router();

route.get('/',function (req,res,next) {
    res.render('insert');
});
module.exports=route;