var express = require('express');
var router  = express.Router();

var application_controller = require('../controllers/application_controller');
// var devices_controller = require("../controllers/devices_controller");

router.get('/:id', application_controller.index);

// router.put('/', devices_controller.updateSwitch);

module.exports = router;