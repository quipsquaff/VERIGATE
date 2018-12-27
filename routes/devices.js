var express = require('express');
var router  = express.Router();

var devices_controller = require('../controllers/devices_controller');

router.get('/', devices_controller.index);

router.post('/', devices_controller.create)

router.delete('/:id', devices_controller.delete);

module.exports = router;