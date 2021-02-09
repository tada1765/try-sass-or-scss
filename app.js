var express = require("express");

// if import your module:
var MyController = require("./controllers/MyController.js");

var app = express();

// set up template engine:
app.set("view engine", "ejs");

// static files:
app.use(express.static("./public"));
// ex.) localhost:3000/assets/styles.css

// fire controllers:
MyController(app);

//listen to port:
app.listen(3000);
console.log("You are listening to port 3000");