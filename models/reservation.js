const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reservationSchema = new Schema({

  userName: {type: String},
  userEmail: {type: String},
  userPhone: {type: String},
  pickUpTime: {type: Date},
  arriveTime: {type: Date},
  origin: [{ type: Schema.Types.ObjectId, ref: 'origin' }],
  origin: [{ type: Schema.Types.ObjectId, ref: 'destination' }]

});



module.exports = mongoose.model('reservation' , reservationSchema);
