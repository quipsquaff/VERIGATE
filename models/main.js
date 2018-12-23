// Import our ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var main = {
    whichGates: function(cb) {
        // The '1' located in the arguments below needs to be changed to req.body.uid or req.params.id dependent on how we set up our route for our main (button) page that loads after user login.
        orm.whichGates(1, function(res) {
            cb(res);
        });
    }
}

// Export the database functions for our controllers.
module.exports = main;