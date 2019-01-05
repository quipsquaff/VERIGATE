var express = require('express');
var router  = express.Router();

var devices_controller = require('../controllers/devices_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get('/', isAuthenticated, devices_controller.index); // Route to devices page.

router.get('/update/:id', isAuthenticated, devices_controller.updatepage); // Route to specific device update page.

router.post('/', isAuthenticated, devices_controller.createJunction); // POST route to add a device to the 'gates' table.

router.put('/:id', isAuthenticated, devices_controller.update); // PUT route to UPDATE a device in the 'gates' table.

router.delete('/:id', isAuthenticated, devices_controller.delete); // Route to delete a specific device on the 'gates' table.

// router.put('/:id', devices_controller.updateSwitch); // Route to UPDATE switchState on the 'gates' table.

module.exports = router;