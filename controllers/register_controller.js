// Import the model (/models/main.js) to use our database functions.
var users = require("../models/registration.js");

exports.index = function(req, res) {
    res.render('index');
};

exports.create = function(req, res) {
    users.create(req.body.name, req.body.email, req.body.password, function(result) {
        res.json({ id: result.insertId });
    });
};