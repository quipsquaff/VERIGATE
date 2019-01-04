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

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')

        // Removed this from the if-statement below ->  && value.indexOf(" ") >= 0

        if (typeof value === "string") {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
   return(arr);
  }

// ---------------- ////

// Object Relational Mapper for all of our SQL statement functions.
var orm = {
    // Method to allow us to determine what gates a user has access to.
    whichGates: function(uid, cb) {
        // Creates a queryString that joins the 'users' and 'gates' tables using our junction table 'gates_users'.
        var queryString = "SELECT users.userID, users.name, gates.unit_location, gates.nickname, gates.switch, gates.gateID FROM gates INNER JOIN gates_users ON gates.gateID = gates_users.gateID INNER JOIN users ON gates_users.userID = users.userID WHERE users.userID = ?;"
        // Opens a connection to our database and performs the above query while inserting the needed values.
        connection.query(queryString, [uid], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Method to query the 'users' table in our database to return a specific users email and pass (for Authentication).
    userPass: function(email, cb) {
        var queryString = "SELECT users.userID, users.email, users.user_pass FROM users WHERE email = ?;"
        // Opens a connection to our database and performs the above query while inserting the needing values.
        connection.query(queryString, [email], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Method to query any table and all table data to our template.
    queryTable: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        // Opens a connection to our database and performs the above query while inserting the needed values.
        connection.query(queryString, [tableName], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    queryWhere: function (tableName, col, val, cb) {
      console.log("queryWhere called")
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        // Opens a connection to our database and performs the above query while inserting the needed values.
        connection.query(queryString, [tableName, col, val], function(err, result) {
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

        // Used to debug queryString issues.
        // console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
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



    update: function(tableName, objColVals, colName, id, cb) {
        var queryString = "UPDATE " + tableName;
        
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += colName;
        queryString += " = " + id;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    },

    
     

    updateSwitch: function(tableName, objColVals, colName, gateID, cb) {
      // var queryString = "UPDATE gates SET switch = " +  1 + " WHERE gateID = " + 2;

        var queryString = "UPDATE " + tableName;
        queryString += " SET ";
        queryString += Object.keys(objColVals)[1];
        queryString += " = ";
        queryString += Object.values(objColVals)[1];
        queryString += " WHERE ";
        queryString += " gateID =  ";
        queryString += Object.values(objColVals)[0];

        console.log("queryString: " + queryString);
        // console.log(objColVals)
        // console.log("----")
        // console.log(Object.values(objColVals)[0])
        // console.log("----")
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    }

        
    
    // To add more methods to our ORM, add a comma to the left of this comment
    // and then add the new method here.
}

// Export the ORM object for our Model (models/)
module.exports = orm;
