// Import our ORM to create functions that will interact with the database for the devices page.
var orm = require("../config/orm.js");

var auth = {
    userPass: function(cb) {
        // The '4' located in the arguments below needs to be changed to req.body.uid or req.params.uid dependant on how we set up our route for registration/login.
        orm.userPass(4, function(res) {
            cb(res);
        });
    }
}

// Export the database functions for our controllers.
module.exports = auth;