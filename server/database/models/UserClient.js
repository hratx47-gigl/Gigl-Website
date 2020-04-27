var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserClient = new Schema({
    //insert schema here
    username: String,
    email: String,
    passwordHash: String,
    location: String,
});

module.exports = mongoose.model('UserClient', UserClient)