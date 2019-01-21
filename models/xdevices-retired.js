// Import our ORM to create functions that will interact with the database for the devices page.
var orm = require("../config/orm.js");

var devices = {
    whichGates: function(uid, cb) {
        // The '4' located in the arguments below needs to be changed to req.body.uid or req.params.uid dependent on how we set up our route for our main (button) page that loads after user login.
        orm.whichGates(uid, function(res) {
            cb(res);
        });
    },
    queryWhere: function(id, cb) {
        orm.queryWhere("gates", "gateID", id, function(res) {
            cb(res);
        });
    },
    createJunction: function(location, nickname, deviceID, uid, cb) {
        orm.createJunction("gates", ["unit_location", "nickname", "deviceID"], [location, nickname, deviceID], uid, function(res) {
            cb(res);
        });
    },
    delete: function(id, uid, cb) {
        orm.delete("gates_users", "gateID", id, "userID", uid, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, id, cb) {
        orm.update("gates", objColVals, "gateID", id, function(res) {
            cb(res);
        });
    },
    
    updateSwitch: function(objColVals, id, cb) {
        orm.updateSwitch("gates", objColVals, "gateID", id, function(res) {
            cb(res);
        });
    }
    
}

// Export the database functions for our controllers.
module.exports = devices;