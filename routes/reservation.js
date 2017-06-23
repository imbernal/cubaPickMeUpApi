module.exports = function(app){

  const Reservation = require("../models/reservation.js");

  findAllReservations = function(req, res){

    Reservation.find(function(err, results){

      if(err) return res.status(500).send(err);

      res.send(results);

    });

  }


  saveReservation = function(req, res){

    var newReservation = new Reservation({

      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPhone: req.body.userPhone,
      pickUpDate: req.body.pickUpDate,
      pickUpTime: req.body.pickUpTime,
      origin: req.body.origin,
      destination: req.body.destination
    });

    newReservation.save();
    res.send(newReservation);
  }

  app.get("/reservations" , findAllReservations);
  app.post("/reservation" , saveReservation);
}
