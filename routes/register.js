var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var register_controller = require('../controllers/register_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', register_controller.index);

// router.get('/signout', register_controller.signOutUser);

router.post('/', passport.authenticate("local"), register_controller.loginUser);

router.post('/register', register_controller.create);

module.exports = router;




// var express = require('express');
// var router  = express.Router();

// var register_controller = require('../controllers/register_controller');

// router.get('/', register_controller.index);

// router.post('/register', register_controller.create);

// module.exports = router;



