var mongoose = require('mongoose');

// video schema
var videoSchema = mongoose.Schema({
    title: {type: String, required: true},
    views: {type: Number, default: 0},
    description: {type: String, required: true},
    date_posted: {type: Date, default: Date.now()},
    video_link: {type: String, required: true},
    comments: [{user: String, comment: String, posted_on: Date}],
});