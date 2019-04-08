// Dependencies
// =============================================================
var express = require("express");
var keepAlive = dbMethods.keepAlive;


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

// Keeps heroku's clearDB connection from timing out after 60 sec
var dbAlive = setTimeout(keepAlive, 45000)

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });