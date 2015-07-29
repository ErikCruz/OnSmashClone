var mongoose = require("mongoose");


var daySchema = mongoose.Schema({
    the_day: {type: Date, default: Date.now()},
    videos: {type: mongoose.Schema.Types.ObjectId, ref: 'Video'}
});

module.exports = mongoose.model('Day', daySchema);