// This static JS file is to provide functionality for each dynamically generated update page.
console.log("device-update.js has loaded");

$(".create-form").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  console.log("Button has been clicked!");

  var gateID = $("#update-button").data("gate-id");

  console.log(gateID);

  var updateDevice = {
    nickname: $("#device-nickname").val().trim(),
    unit_location: $("#device-location").val().trim(),
    SSID: $("#device-wifi-ssid").val().trim(),
    pass: $("#device-wifi-pass").val().trim(),
    gateID: gateID
  };

  console.log(updateDevice);

  // Send the PUT request.
  $.ajax("/devices/:id", {
    type: "PUT",
    data: updateDevice
  }).then(
    function () {
      console.log("Updated device");
      // Reload the page to get the updated list
      window.location.href = "/devices/";
    }
  );
});

$("#back-button").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  console.log("Back button has been clicked!");

  window.location.href = "/devices/";
});