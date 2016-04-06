var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cells',function(req,res,next){
  res.render('cells');
})

router.get('/directives',function(req,res,next){
  res.render('directives');
})

module.exports = router;
