var express = require('express');
var router  = express.Router();

var application_controller = require('../controllers/application_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");
// var devices_controller = require("../controllers/devices_controller");

router.get('/:id', isAuthenticated, application_controller.index);

router.put('/:id', isAuthenticated, application_controller.updateSwitch); // Route to UPDATE switchState on the 'gates' table.


// router.put('/', devices_controller.updateSwitch);

module.exports = router;