var path = require("path");
var friends = require("./../data/friends")


// ===============================================================================
// API ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      app.post("/api/friends", function(req, res){
          console.log("Incoming Form Data:", req.body)
          friends.push(req.body)
          res.redirect(302, "/")
      })

}