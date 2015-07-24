var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Videos' });
});

router.get('/login', function(req, res, next){
   res.render('login', {title: 'Log In'}) 
});

router.get('/register', function(req, res, next){
   res.render('register', {title: 'Register'}); 
});

module.exports = router;
