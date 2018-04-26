// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());   

// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.use(express.static( __dirname + '/client/dist' ));

// app.set('views', path.join(__dirname, './views'));//no views
app.set('view engine', 'ejs'); //don't need ejs

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)

app.set('views', path.join(__dirname, './client/views'));

// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
