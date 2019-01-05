// Import the model (/models/auth.js) to use our database functions.

exports.index = function(req, res) {
    res.redirect("/application/:id");
};


exports.signOutUser = function(req,res) {
  req.logout();
  res.redirect("/");
};