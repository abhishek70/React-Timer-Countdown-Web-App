// Initializing the require modules
var express = require('express');
var app = express();

// Create Port
const PORT = process.env.PORT || 4000;

//Create Middleware for OpenWeather API (Https/Http)
app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// Serve from public folder
app.use(express.static('public'));

// Creating Web Server
app.listen(PORT, function(){
  console.log('Express Server is started on Port ' + PORT);
});
