// Import MySQL connection.
var connection = require("../config/connection.js");

// Object Relational Mapper for all of our SQL statement functions.
var orm = {
    // Method to allow us to determine what gates a user has access to.
    whichGates: function(uid, cb) {
        // Creates a queryString that joins the 'users' and 'gates' tables using our junction table 'gates_users'.
        var queryString = "SELECT users.userID, users.name, gates.unit_location, gates.nickname, gates.switch FROM gates INNER JOIN gates_users ON gates.gateID = gates_users.gateID INNER JOIN users ON gates_users.userID = users.userID WHERE users.userID = ?;"
        // Opens a connection to our database and performs the above query while inserting the needed values.
        connection.query(queryString, [uid], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Method to query the 'users' table in our database to return a specific users email and pass (for Authentication).
    userPass: function(uid, cb) {
        var queryString = "SELECT users.email, users.user_pass FROM users WHERE userID = ?;"
        // Opens a connection to our database and performs the above query while inserting the needing values.
        connection.query(queryString, [uid], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Method to query any table and all table data to our template.
    queryTable: function(tableName, cb) {
        var queryString = "SELECT * FROM ??"
        // Opens a connection to our database and performs the above query while inserting the needed values.
        connection.query(queryString, [tableName], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }// To add more methods to our ORM, add a comma to the left of this comment
    // and then add the new method here.
}

// Export the ORM object for our Model (models/)
module.exports = orm;