// Initializing the require modules
var express = require('express');
var app     = express();

// Serve from public folder
app.use(express.static('public'));

// Creating Web Server
app.listen(3000, function(){
  console.log("Express Server is started on Port 3000");
})
