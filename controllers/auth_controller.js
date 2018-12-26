// Import the model (/models/auth.js) to use our database functions.
var auth = require("../models/auth.js");

exports.index = function(req, res) {
    auth.userPass(function (data) {
        var hbsObject = {
            userInfo: data
        };
        console.log(hbsObject);
        res.render('register', hbsObject);
    });
};