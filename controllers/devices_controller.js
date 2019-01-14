// Import the model (/models/main.js) to use our database functions.
var devices = require("../models/devices.js");

// Retrieve 'gates' table data
exports.index = function(req, res) {
  db.Device.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function(dbDevice) {
    console.log(dbDevice);
    res.render('app/devices', {
      layout: 'main-devices',
      device: dbDevice
    });
  });
};


// exports.index = function(req, res) {
//     console.log("req.user: " + req.user);

//     devices.whichGates(req.user, function (data) {
//         var hbsObject = {
//             layout: 'main-devices',
//             gatesTable: data
//         };
//         console.log(hbsObject);
//         res.render('app/devices', hbsObject);
//     });
// };

// Retrieve specific gate/device to display on our update page.
exports.updatepage = function(req, res) {
    devices.queryWhere(req.params.id, function (data) {
      
        var hbsObject = {
            layout: 'main-device-update',
            gateData: data
        };
        console.log(hbsObject);
        res.render('app/device-update', hbsObject);
    });
};

// Add new Device to the 'gates' table AND the 'gates_users' table
exports.create = function(req, res) {
    devices.create(req.body.location, req.body.nickname, req.body.deviceID, function(result) {
        // Send back the ID of the new device
        res.json({ id: result.insertId });
      });
}

// Add new Device to the 'gates' table AND the 'gates_users' table
exports.createJunction = function(req, res) {
    devices.createJunction(req.body.location, req.body.nickname, req.body.deviceID, req.user, function(result) {
        // Send back the ID of the new device
        res.json({ id: result.insertId });
      });
}

// Delete data from the 'gates' table
exports.delete = function(req, res) {
    devices.delete(req.params.id, req.user, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end()
        }
            res.status(200).end();
    });
};

// Update data for a specific device from the 'gates' table.
exports.update = function(req, res) {
    console.log("This is functioning");

    var updateDevice = {
        nickname: req.body.nickname,
        unit_location: req.body.unit_location,
        deviceID: req.body.deviceID
    };

    var gateID = req.body.gateID

    console.log(gateID);
    devices.update(updateDevice, gateID, function(result) {
          res.status(200).end();
    });
};
