var express = require('express');
var router  = express.Router();

var auth_controller = require('../controllers/auth_controller');

router.get('/', auth_controller.index);

router.post('/login', auth_controller.loginUser);

module.exports = router;
