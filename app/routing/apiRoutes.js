var path = require("path");
var friendsArr = require("./../data/friends")


// ===============================================================================
// API ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArr);
      });



}