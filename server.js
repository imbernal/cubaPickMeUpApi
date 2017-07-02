const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://root:root@ds131492.mlab.com:31492/cubapickmeup', (err, database) => {
  if (err) return console.log(err);

  const reservation = require('./routes/reservation.js')(app);
  const destination = require('./routes/destination.js')(app);
  const origin = require('./routes/origin.js')(app);

  app.listen(9203, () => {
    console.log('listening on 9203');
  });
});
