// Import the model (/models/main.js) to use our database functions.
var devices = require("../models/devices.js");

exports.index = function(req, res) {
    devices.auth(function (data) {
        var hbsObject = {
            userInfo: data
        };
        console.log(hbsObject);
        res.render('register', hbsObject);
    });
};