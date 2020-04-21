var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserPerformer = new Schema({
//insert schema here
  username: String,
  email : String,
  hashedPass : String,
  location : String
});

module.exports = mongoose.model('UserPerformer', UserPerformer)