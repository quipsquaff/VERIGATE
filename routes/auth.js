var express = require('express');
var router  = express.Router();
var passport = require("../config/passport");
var auth_controller = require('../controllers/auth_controller');

router.get('/', auth_controller.index);

// router.post('/login', passport.authenticate("local"), auth_controller.loginUser);

module.exports = router;
