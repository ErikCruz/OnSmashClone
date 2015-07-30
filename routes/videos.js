var express = require('express');
var Video = require('../models/video');
var Day = require('../models/day');
var moment = require('moment');
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
   // look for today in database
   Day.findOne({the_day: moment().format("YYYY-MM-DD")}, function(err, day){
      if(err) throw err;
      // if today is already created it obviously has videos
      if(day != null) {
        var video = new Video({title: req.body.title, description: req.body.description, video_link: req.body.video_link});
        video.save(function(err, vid) {
            if(err) throw err;
            // append video to day videos array
            // day.videos.push(vid._id);
            // res.render('videos/index', {title: 'Videos'});
            Day.update({_id: day._id}, {$push: {"videos": vid._id}}, function(err, updatedDay){
                if(err) throw err;
                res.send(updatedDay);
            });
        });
      } 
      // else today is not created and we create day object and add video to it
      else {
        var today = new Day({});
        today.save(function(err, theday){
           if(err) throw err;
           var video = new Video({title: req.body.title, description: req.body.description, video_link: req.body.video_link});
           video.save(function(err, vid) {
           if(err) throw err;
           // append video to today videos array
            // theday.videos.push(vid);
            // res.render('videos/index', {title: 'Videos'});
            Day.update({_id: theday._id}, {$push: {"videos": vid._id}}, function(err, updatedDay){
                if(err) throw err;
                res.send(updatedDay);
            });
           });
        });
      }
      
   });
});

// get single video
router.get('/:videoID', function(req, res, next){
   res.render('videos/single', {title:'Video Title'}); 
});

module.exports = router;