var express  = require('express');
var router   = express.Router();


router.get('/about-us',(req,res)=>{
    res.render('aboutus/about_us');
})

router.get('/team',(req,res)=>{
    res.render('aboutus/team');
})

router.get('/faq',(req,res)=>{
    res.render('aboutus/faq');
})


module.exports = router;
