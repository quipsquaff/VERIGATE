var express = require('express');
var router  = express.Router();

var auth_controller = require('../controllers/auth_controller');

router.get('/', auth_controller.index);

module.exports = router;