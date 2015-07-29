var mongoose = require("mongoose");


var daySchema = mongoose.Schema({
    the_day: {type: String},
    videos: {type: mongoose.Schema.Types.ObjectId, ref: 'Video'}
});

daySchema.pre('save', function(next){
    
});

module.exports = mongoose.model('Day', daySchema);