// Import the model (/models/main.js) to use our database functions.
var main = require("../models/main");
var devices = require("../models/devices")

exports.index = function (req, res) {
  console.log("req: ")
  console.log(req.user)
  main.whichGates(req.user, function (data) {
    res.render('app/app', {
      layout: 'main-app',
      usersGates: data
    });
  });
};

exports.updateSwitch = function (req, res) {
  console.log("updateSwitch is functioning");
  console.log(req.user)
  var updateSwitch = {
    gateID: req.body.gateID,
    switch: req.body.switch
  };

  var gateID = req.body.gateID
  console.log("gateID: " + gateID);

  // This keeps refreshing the switch status every 500ms
  // setInterval(function () {
    devices.updateSwitch(updateSwitch, gateID, function (result) {
      res.status(200).end();
    });
  // }, 500);

};


exports.update = function (req, res) {
  console.log("This is functioning");

  var updateDevice = {
    nickname: req.body.nickname,
    unit_location: req.body.unit_location,
    SSID: req.body.SSID,
    pass: req.body.pass
  };

  var gateID = req.body.gateID
  console.log(gateID);
  devices.update(updateDevice, gateID, function (result) {
    res.status(200).end();
  });

};
