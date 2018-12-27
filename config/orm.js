// Import MySQL connection.
var connection = require("../config/connection.js");

// ---------------- ////
// HELPER FUNCTIONS ////
// ---------------- ////

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

// ---------------- ////

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
    },
    delete: function(tableName, colName, id, cb) {
        var queryString = "DELETE FROM ?? WHERE ?? = ?;"
        // Opens a connection to our database and performs the above query while inserting the needed values.
        connection.query(queryString, [tableName, colName, id], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(tableName, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableName;
        
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
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