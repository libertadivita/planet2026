var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planetSchema = new Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true
  },
  avatar: String,
  desc: String
});

var Planet = mongoose.model('Planet', planetSchema);

module.exports.Planet = Planet;