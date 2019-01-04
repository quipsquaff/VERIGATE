// Import our ORM to create functions that will interact with the database for the registration page.
'use strict';
var orm = require("../config/orm.js");
var bcrypt = require("bcrypt-nodejs");

var users = {
    create: function(name, email, pass, cb) {
        orm.create("users", ["name", "email", "admin", "user_pass"], [name, email, 1, pass], function(res) {
            cb(res);
        });
    }
    // beforeCreate: function(password, cb) {
    //     password = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    //     console.log(password);
    //     cb(password);
    // }
}

// Export the database functions for our controllers.
module.exports = users;