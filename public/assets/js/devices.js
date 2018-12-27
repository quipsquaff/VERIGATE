// This static file provides the required JavaScript code the enable the following functionality on the /devices route of our application.
    // Delete Operations to the 'gates' table in our verigate_db database.



//----------////
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
//----------////

console.log("devices.js has been loaded");

// CREATE OPERATIONS ////

$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log("Button has been clicked!");

    var newDevice = {
      nickname: $("#device-nickname").val().trim(),
      location: $("#device-location").val().trim(),
      ssid: $("#device-wifi-ssid").val().trim(),
      pass: $("#device-wifi-pass").val().trim()
    };

    console.log(newDevice);

    // Send the POST request.
    $.ajax("/devices", {
      type: "POST",
      data: newDevice
    }).then(
      function () {
        console.log("created a new device");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

// DELETE OPERATIONS ////

// When the delete button is clicked, console log that the button has been clicked.
$(".delete-gate").on("click", function(event) {
    console.log("The DELETE button has been clicked!");
    // Get the correct gateID from the corresponding button's data attribute.
    var id = $(this).data("gate-id");
    // AJAX call to send the DELETE request.
    $.ajax("/devices/" + id, {
        type: "DELETE"
    // Promise.
    }).then(function() {
        console.log("deleted id#" + id);
        // Reload the page to update our list of devices.
        location.reload();
    });
});

//----------////
});
//----------////