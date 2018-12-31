// Import the model (/models/main.js) to use our database functions.
var main = require("../models/main");

exports.index = function(req, res) {
    main.whichGates(req.params.id, function (data) {
        res.render('app/app', {
            layout: 'main-app',
            usersGates: data
        });
    });
};