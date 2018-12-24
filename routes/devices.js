var express = require('express');
var router  = express.Router();

var devices_controller = require('../controllers/devices_controller');

router.get('/', devices_controller.index);

module.exports = router;