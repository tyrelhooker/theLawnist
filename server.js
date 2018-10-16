//Dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

//Express handles the data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Points the server to the route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener - Starts and listens on the Port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});