var express = require('express');
var Video = require('../models/video');
var Day = require('../models/day');
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

router.post('/new', function(req, res, next){
   var today = new Day({});
   today.save(function(err, theday){
       if(err) throw err;
       res.json(theday);
   });
   // try to see if there are any videos for today
   
   // if there are append video to day videos array
   
   // otherwise create a new day for today and then add video
});

// get single video
router.get('/:videoID', function(req, res, next){
   res.render('videos/single', {title:'Video Title'}); 
});

// embed view for video
// router.get('/embed/:videoID', function(req, res, next){
//   res.render('videos/embed', {title: 'Video Title', layout: 'embed_layout.hbs'});
// });

module.exports = router;