module.exports = function(app){

  const Model = require("../models/models.js");

  findAllReservations = function(req, res){

    res.send("ASASAS");
    // Model.reservation.find(err , reser){
    //
    //   if(err){
    //     console.log(err);
    //   }else{
    //     res.send(reser);
    //   }
    //
    // }
  }


  // saveReservation = function(req, res){
  //
  //   var reservation = new Model.reservation({
  //
  //   });

  // }

  app.get("/reservations" , findAllReservations);

}
