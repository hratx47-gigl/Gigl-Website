var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Gig = new Schema({
    name: String,
    location: String,
    date: Date,
    price: Number,
    description: String,
    applicants: [{type: Schema.Types.ObjectId, ref: 'UserPerformer'}],
    owner: {type: Schema.Types.ObjectId, ref: 'UserClient'}
});

module.exports = mongoose.model('Gig', Gig)