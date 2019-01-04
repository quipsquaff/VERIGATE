// Import the model (/models/main.js) to use our database functions.
var users = require("../models/registration-testing.js");

var bcrypt = require("bcrypt-nodejs");

exports.index = function(req, res) {
    res.render('index');
};

exports.create = function(req, res) {

    var hashPass = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null);

    users.create(req.body.name, req.body.email, hashPass, function(result) {
        res.json({ id: result.insertId });
    });
};

exports.signOutUser = function(req,res) {
  req.logout();
  res.redirect("/");
};

exports.loginUser = function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed

var userID = res.req.user;

res.json("/application/" + userID);
};