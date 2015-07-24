var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    res.render('videos/index', {title: 'Videos'});    
});

router.get('/:videoID', function(req, res, next){
   res.render('videos/single', {title:'Video Title'}); 
});

module.exports = router;