// This static file provides the required JavaScript code the enable the following functionality on the /devices route of our application.
    // Delete Operations to the 'gates' table in our verigate_db database.



//----------////
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
//----------////

console.log("devices.js has been loaded");

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