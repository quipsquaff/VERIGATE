$(function () {
$("#update-switch").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
  
    console.log("Switch Button is working");
  
    var id = $(this).data("id");
    var newSwitch = $(this).data("newswitch");
    
    if (id === "0") {
        var updateState = {
            switch: "1"
        }
    } else if (id === "1") {
        var updateState = {
            switch: "0"
        };
    }
    
  
    // console.log(updateState);
  
    // Send the PUT request.
    $.ajax("/devices/:id", {
      type: "PUT",
      data: updateState
    }).then(
      function () {
        console.log("Updated State");
        // Reload the page to get the updated list
        // window.location.href = "/devices/";
        location.reload();
      }
    );
  });

});