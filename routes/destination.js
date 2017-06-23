module.exports = function (app) {

  const Destination = require('../models/destination.js');

  findAllDestination = function(req, res){

    Destination.find(function(err, results){

      if(err){
        console.log(err);
        res.status(500).send(err);
      }else {
        res.send(results);
      }

    });
  }

  saveDestination = function(req , res){

    var newDestination = new Destination({

      name: req.body.name,
      type: req.body.type,
      miles: req.body.miles

    });

    newDestination.save();
    res.send(newDestination);

  }

  findByType = function(req , res){

    Destination.findOne({ type: "something" } , function(err , result){

        if(err){
          console.log(err);
          res.status(500).send(err);
        }else{
          res.send(result);
        }
    });

  }

  app.get("/destinations" , findAllDestination);
  app.get("/destination/bytype" , findAllDestination);
  app.post("/destination" , saveDestination);

};
