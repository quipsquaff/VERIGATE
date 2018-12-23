var express = require('express');
var router  = express.Router();

var register_controller = require('../controllers/register_controller');

router.get('/', register_controller.index);

module.exports = router;