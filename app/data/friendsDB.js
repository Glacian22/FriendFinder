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

//INSERT INTO friends (name, photo, questions) VALUES (
// 'Jeff',
// 'https://www.bobswatches.com/rolex-blog/wp-content/uploads/2018/07/Cartier-Tank-Photo-by-Michael-J-Fox-823x1024.png', 
// '[2, 3, 2, 3, 1]'
// )
var uploadSurvey = function (survey) {

    var query = connection.query(
        "INSERT INTO friends (name, photo, questions) VALUES (?, ?, ?)", [survey.name, survey.photo, survey.questions], function (err, result) {
            if (err) throw err;
        })
}

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