// Import the model (/models/main.js) to use our database functions.
var devices = require("../models/devices.js");

exports.index = function(req, res) {
    devices.queryTable(function (data) {
        var hbsObject = {
            gatesTable: data
        };
        console.log(hbsObject);
        res.render('app/devices', hbsObject);
    });
};