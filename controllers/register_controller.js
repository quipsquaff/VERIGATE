// Import the model (/models/main.js) to use our database functions.
var users = require("../models/registration");

exports.index = function(req, res) {
    res.render('index');
};

exports.create = function(req, res) {
    users.create(req.body.name, req.body.email, req.body.password, function(result) {
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
    users.beforeCreate(req.body.password, function(req, res) {
        res.json("/application/" + userID);
    })

// var userID = res.req.user;
// console.log(res.req);
// var userPass = req.body.password;

};