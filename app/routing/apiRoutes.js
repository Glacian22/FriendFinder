var friends = require("./../data/friends")
var dbMethods = require("./../data/friendsDB")

var uploadSurvey = dbMethods.uploadSurvey;
var getFriendList = dbMethods.getFriendList;
// ===============================================================================
// API ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        //calls imported database function to retrieve full db list, passes in res so getFriendList can respond to initial API hit
        getFriendList(res);
    });

    // Get survey form info
    app.post("/api/friends", function (req, res) {
        console.log("Incoming Form Data:", req.body)

        //convert survey to db obj form
        var dbObj = {};
        dbObj.name = req.body.name;
        dbObj.photo = req.body.photo;
        dbObj.questions = JSON.stringify([parseInt(req.body.breakfast), parseInt(req.body.game), parseInt(req.body.flavor), parseInt(req.body.kink), parseInt(req.body.exercise)])
        uploadSurvey(dbObj)
        res.redirect(302, "/")
    })

}