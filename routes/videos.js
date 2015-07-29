var express = require('express');
var Videos = require('../models/video');
var router = express.Router();

// get all videos for index view
router.get('/', function(req, res, next){
    // Videos.find({}, function(err, vids){
    //     if(err) throw err;
    //     res.json(vids);
    // });
    res.render('videos/index', {title: 'Videos'});    
});

// new video form
router.get('/new', function(req, res, next){
   res.render('videos/new',{title: 'New Video'}); 
});

// get single video
router.get('/:videoID', function(req, res, next){
   res.render('videos/single', {title:'Video Title'}); 
});

// embed view for video
router.get('/embed/:videoID', function(req, res, next){
   res.render('videos/embed', {title: 'Video Title', layout: 'embed_layout.hbs'});
});

module.exports = router;