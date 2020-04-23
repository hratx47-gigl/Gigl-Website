-var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserGiger = new Schema({
//insert schema here
  username : String,
  email : String,
  hashedPass : String,
  venmo : String,
  location : String
});

module.exports = mongoose.model('UserGiger', UserGiger)