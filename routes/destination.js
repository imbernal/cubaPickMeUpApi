module.exports = function (app) {

  const Model = require('../models/models.js');

  findAllDestination = function(req, res){

    res.send("Destination");

  }

  saveDestination = function(req , res){

    var newDestination = new Model.destination({

      name: req.body.name,
      type: req.body.type,
      miles: req.body.miles

    });

    newDestination.save();
    res.send(newDestination);

  }

  app.get("/destinations" , findAllDestination);
  app.post("/destination" , saveDestination);

};
