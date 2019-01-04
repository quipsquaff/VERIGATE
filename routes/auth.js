var express = require('express');
var router  = express.Router();
var passport = require("../config/passport");
var auth_controller = require('../controllers/auth_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get('/application/', ensureAuthenticated, auth_controller.index);

function ensureAuthenticated(){
  if(req.isAuthenticated()){
    return next();
  } else {
    req.redirect('/');
  }
}

// router.post('/login', passport.authenticate("local"), auth_controller.loginUser);

module.exports = router;
