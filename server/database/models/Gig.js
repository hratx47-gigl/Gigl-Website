var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GigSchema = new Schema({
    //insert schema here
    name : String,
    location : String,
    date : Date,
    price : Number,
    description : String,
    applicants: Array,
    owner : Object
});


    
module.exports = mongoose.model('Gig', GigSchema)