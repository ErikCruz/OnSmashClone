var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/videos');
});

router.get('/embed/:id', function(req, res, next){
   res.render('videos/embed', {title: 'Video Title', layout: 'embed_layout.hbs'}); 
});

module.exports = router;
