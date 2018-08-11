var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {home:'home' });
});

router.get('/about',(req,res,next)=>{
  res.render('about',{about:'about'});
})

router.get('/courses',(req,res)=>{
  res.render('courses',{courses:'courses'});
})



router.get('/services',(req,res)=>{
  res.render('services',{services:'services'});
})

router.get('/join',(req,res)=>{
  res.render('join',{});
})

router.get('/app',(req,res)=>{
  res.render('app',{});
})

router.get('/404',(req,res)=>{
  res.render('404',{});
})

module.exports = router;
