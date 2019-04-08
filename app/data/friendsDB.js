let mysql = require("mysql")

// Sets up MySQL DB connection
// heroku ClearDB info: 
// mysql://b7a7fdebcdad14:f617b28e@us-cdbr-iron-east-03.cleardb.net/heroku_767e299fefd1ce5?reconnect=true
var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-03.cleardb.net",

    // Your username
    user: "b7a7fdebcdad14",

    // Your password
    password: "f617b28e",
    database: "heroku_767e299fefd1ce5"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

// The two database manipulation functions which will be packaged up and exported
//
//

// Sends the form data to the mysql db for insertion, runs compatibility logic and responds with res object
var uploadSurvey = function (survey, res) {

    var query = connection.query(
        "INSERT INTO friends (name, photo, questions) VALUES (?, ?, ?)", [survey.name, survey.photo, survey.questions], function (err, result) {
            if (err) {
                console.log("DB error")
                throw err;
            }
            res.end()
        })
}

// Retrieves the full "friends" table from the db, uses passed in "res" response object to return the data
var getFriendList = function (res) {
    var query = connection.query(
        "SELECT * FROM friends", function (err, result) {
            console.log("getting list");
            if (err) throw err;
            res.json(result);
        })
}

module.exports = {
    uploadSurvey: uploadSurvey,
    getFriendList: getFriendList
}