var express = require("express");
var router = express.Router();

var about_controller = require("../controllers/about_controller");
// var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', about_controller.index);

// router.put('/about', isAuthenticated, application_controller.updateSwitch); // Route to UPDATE switchState on the 'gates' table.

// router.put('/', devices_controller.updateSwitch);

module.exports = router;
