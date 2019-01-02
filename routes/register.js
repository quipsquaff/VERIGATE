var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var users_controller = require('../controllers/users_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', register_controller.index);

router.get('/sign-out', register_controller.signOutUser);

router.post('/login', passport.authenticate("local"), register_controller.loginUser);

router.post('/register', register_controller.create);

module.exports = router;




// var express = require('express');
// var router  = express.Router();

// var register_controller = require('../controllers/register_controller');

// router.get('/', register_controller.index);

// router.post('/register', register_controller.create);

// module.exports = router;



