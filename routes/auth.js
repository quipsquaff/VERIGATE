var express = require('express');
var router  = express.Router();
var passport = require("../config/passport");
// var auth_controller = require('../controllers/auth_controller');
var register_controller = require("../controllers/register_controller");
var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get('/', register_controller.index);

router.post('/login', passport.authenticate("local"), register_controller.loginUser);

module.exports = router;
