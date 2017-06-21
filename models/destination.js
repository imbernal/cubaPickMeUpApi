const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  name: {type: String},
  type: {type: String},
  miles: {type: Number}
});

module.exports = mongoose.model('destination' , destinationSchema);
