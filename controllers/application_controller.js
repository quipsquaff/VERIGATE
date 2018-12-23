// Import the model (/models/main.js) to use our database functions.
var main = require("../models/main.js");

exports.index = function(req, res) {
    main.whichGates(function (data) {
        var hbsObject = {
            usersGates: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
};