var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserPerformer = new Schema({
    username: String,
    email: String,
    passwordHash: String,
    location: {type: String, default: ''},
    venmoName: {type: String, default: ''},
    about: {type: String, default: ''},
    education: {type: String, default: ''},
    experience: {type: String, default: ''}
});

module.exports = mongoose.model('UserPerformer', UserPerformer)