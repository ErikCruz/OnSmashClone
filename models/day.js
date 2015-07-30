var mongoose = require("mongoose");
var moment = require("moment");

var daySchema = mongoose.Schema({
    the_day: {type: String},
    videos: {type: mongoose.Schema.Types.ObjectId, ref: 'Video'}
});

daySchema.pre('save', function(next){
    var theDay = moment(Date.now());
    var month = String(theDay.month());
    var day = String(theDay.date());
    var year = String(theDay.year());
    
    var theDate = year + '-' + month + '-' + day;
    this.the_day = theDate;
});

module.exports = mongoose.model('Day', daySchema);