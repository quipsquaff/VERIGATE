// Import our ORM to create functions that will interact with the database for the registration page.
var orm = require("../config/orm.js");

var users = {
    create: function(name, email, pass, cb) {
        orm.create("users", ["name", "email", "admin", "user_pass"], [name, email, 1, pass], function(res) {
            cb(res);
        });
    }
}

// Export the database functions for our controllers.
module.exports = users;