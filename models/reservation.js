const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var origin = require('./origin.js');
var destination = require('./destination.js');

var reservationSchema = new Schema({

  userName: {type: String},
  userEmail: {type: String},
  userPhone: {type: String},
  pickUpTime: {type: Date},
  arriveTime: {type: Date},
  origin: [{ type: Schema.Types.ObjectId, ref: origin }],
  destination: [{ type: Schema.Types.ObjectId, ref: destination }]

});



module.exports = mongoose.model('reservation' , reservationSchema);
