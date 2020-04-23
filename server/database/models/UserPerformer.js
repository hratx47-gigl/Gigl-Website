var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserPerformer = new Schema({
    username: String,
    email: String,
    passwordHash: String,
    location: String,
    venmoName: String,
    about: String,
});

module.exports = mongoose.model('UserPerformer', UserPerformer)