// Import the model (/models/main.js) to use our database functions.
var devices = require("../models/devices.js");

// Retrieve 'gates' table data
exports.index = function(req, res) {
    devices.queryTable(function (data) {
        var hbsObject = {
            layout: 'main-devices',
            gatesTable: data
        };
        console.log(hbsObject);
        res.render('app/devices', hbsObject);
    });
};

// Add new Device to the 'gates' table
exports.create = function(req, res) {
    devices.create(req.body.location, req.body.nickname, req.body.ssid, req.body.pass, function(result) {
        // Send back the ID of the new device
        res.json({ id: result.insertId });
      });
}

// Delete data from the 'gates' table
exports.delete = function(req, res) {
    devices.delete(req.params.id, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end()
        }
            res.status(200).end();
    });
};