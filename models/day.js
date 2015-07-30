var mongoose = require("mongoose");
var moment = require("moment");

var daySchema = mongoose.Schema({
    the_day: {type: String},
    videos: {type: mongoose.Schema.Types.ObjectId, ref: 'Video'},
    created: {type: Date, default: Date.now()}
});

daySchema.pre('save', function(next){
    this.the_day = moment().format("YYYY-MM-DD");
    next();
});

module.exports = mongoose.model('Day', daySchema);