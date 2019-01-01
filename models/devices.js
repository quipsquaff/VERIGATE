// Import our ORM to create functions that will interact with the database for the devices page.
var orm = require("../config/orm.js");

var devices = {
    queryTable: function(cb) {
        // The '4' located in the arguments below needs to be changed to req.body.uid or req.params.uid dependent on how we set up our route for our main (button) page that loads after user login.
        orm.queryTable("gates", function(res) {
            cb(res);
        });
    },
    queryWhere: function(id, cb) {
        orm.queryWhere("gates", "gateID", id, function(res) {
            cb(res);
        });
    },
    create: function(location, nickname, ssid, pass, cb) {
        orm.create("gates", ["unit_location", "nickname", "SSID", "pass"], [location, nickname, ssid, pass], function(res) {
            cb(res);
        });
    },
    delete: function(id, cb) {
        orm.delete("gates", "gateID", id, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, id, cb) {
        orm.update("gates", objColVals, "gateID", id, function(res) {
            cb(res);
        });
    },
    updateSwitch: function(objColVals, condition, cb) {
        orm.updateSwitch("gates", objColVals, condition, function(res) {
            cb(res);
        });
    }
    
}

// Export the database functions for our controllers.
module.exports = devices;