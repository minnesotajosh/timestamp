// server.js
// where your node app starts

// init project
var express = require('express');
var moment = require('moment');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// app.get("/dreams", function (request, response) {
//   response.send(dreams);
// });

//could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.get("/api/formattedTime/:timeString", function (request, response) {
    var timeString = request.params.timeString;
    var dateObject = {
      unix: null,
      natural: null
    };
    if (moment.unix(timeString).isValid()) {
      dateObject.unix = timeString;
      dateObject.natural = moment.unix(timeString).format("MMMM Do YYYY");
    } else if (moment(timeString).isValid()) {
      dateObject.unix = moment(timeString).format("x");
      dateObject.natural = moment(timeString).format("MMMM Do YYYY");    
    }

  response.json( dateObject );
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
