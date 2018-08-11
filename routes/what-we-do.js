var express = require('express');
var router = express.Router();

router.get('/res-web-design',(req,res)=>{
    res.render('what_we_do/res_web_design');
})

router.get('/mobile-app-development',(req,res)=>{
    res.render('what_we_do/mobile_development');
})


module.exports = router;