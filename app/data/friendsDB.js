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
