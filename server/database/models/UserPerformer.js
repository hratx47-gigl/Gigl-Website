var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserPerformer = new Schema({
<<<<<<< HEAD
//insert schema here
  username: String,
  email : String,
  hashedPass : String,
  location : String
=======
    username: String,
    email: String,
    passwordHash: String,
    location: String,
    venmoName: String,
>>>>>>> 2c654a4e45870af8d2583258112fb90181eaa678
});

module.exports = mongoose.model('UserPerformer', UserPerformer)