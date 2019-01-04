var express = require('express');
var router  = express.Router();

var devices_controller = require('../controllers/devices_controller');


router.get('/', devices_controller.index); // Route to devices page.

router.get('/:id', devices_controller.updatepage); // Route to specific device update page.

router.post('/', devices_controller.create); // POST route to add a device to the 'gates' table.

router.put('/:id', devices_controller.update); // PUT route to UPDATE a device in the 'gates' table.

router.delete('/:id', devices_controller.delete); // Route to delete a specific device on the 'gates' table.

// router.put('/:id', devices_controller.updateSwitch); // Route to UPDATE switchState on the 'gates' table.

module.exports = router;