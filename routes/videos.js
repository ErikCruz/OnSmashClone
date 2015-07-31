var express = require('express');
var moment = require('moment');
var router = express.Router();

// get all videos for index view
router.get('/', function(req, res, next){
    res.render('videos/index', {title: 'Videos'});    
});

// new video form
router.get('/new', function(req, res, next){
   res.render('videos/new',{title: 'New Video'}); 
});

router.post('/new', function(req, res, next){
   // look for today in database
});

// get single video
router.get('/:videoID', function(req, res, next){
   res.render('videos/single', {title:'Video Title'}); 
});


module.exports = router;