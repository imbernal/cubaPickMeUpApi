const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var originSchema =  new Schema({

  name: {type: String},
  type: {type: String}

});

module.exports = mongoose.model('origin' , originSchema);
