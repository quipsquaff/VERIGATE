// Import our ORM to create functions that will interact with the database for the devices page.
var orm = require("../config/orm.js");

var auth = {
    userPass: function(email, cb) {

        orm.userPass(email, function(res) {
            cb(res);
        });
    }
}

// Export the database functions for our controllers.
module.exports = auth;