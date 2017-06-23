module.exports = function(app){


  const Origin = require("../models/origin.js");

  findAllOrigin = function(req , res){

    Origin.find(function(err, results){

      if(err){
        res.status(500).send(err);
      }else{
        res.send(results);
      }

    });

  }

  saveOrigin = function(req , res){

    var newOrigin = new Origin({

      name: req.body.name,
      type: req.body.type

    });

    newOrigin.save();
    res.send(newOrigin);

  }

  originByType = function(req , res){

    Origin.findOne({ "type" : 'fff' } , function(err,result){

      if(err){
        res.status(500).send(res);
      }else{

          res.send(result);
      }
  
    });



  }

  app.get("/origins" , findAllOrigin);
  app.post("/origin" , saveOrigin);
  app.get("/origin/bytype" , originByType);

}
