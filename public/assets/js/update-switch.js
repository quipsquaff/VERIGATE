$(function () {
  $(".update-switch").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log("Switch Button is working");

    var gateID = $(".update-switch").data("gate-id");
    console.log("gateID: " + gateID)
    var currentSwitch = $(this).data("currentswitch");
    console.log("currentSwitch: " + currentSwitch)

    var updateState = {
      switch: currentSwitch,
      gateID: gateID
    };


    switch (currentSwitch) {
      case 0:
        console.log("current switch = 0 and is being changed to 1")
        updateState.switch = 1
        currentSwitch = 1
        break;
      case 1:
        console.log("current switch = 1 and is being changed to 0")
        updateState.switch = 0
        currentSwitch = 0
        break;
      default:
        console.log("nothing changed")
    }

    // if (currentSwitch === 0) {
    //   console.log("current switch = 0 and is being changed to 1")
    //   updateState.switch = 1
    //   currentSwitch = 1
    //   // updateState = {
    //   //   switch: "1",
    //   //   gateID: gateID
    //   // }
    // } else if (currentSwitch === 1) {
    //   console.log("current switch = 1 and is being changed to 0")
    //   updateState.switch = 0
    //   currentSwitch = 0
    //   // updateState = {
    //   //   switch: "0",
    //   //   gateID: gateID
    //   // };
    // }



    console.log("updateState: " + updateState.switch);

    // Send the PUT request.
    $.ajax("/application/:id", {
      type: "PUT",
      data: updateState
    }).then(
      function () {
        console.log("STATE UPDATED");
        // Reload the page to get the updated list
        // window.location.href = "/devices/";
        // window.location.href = "/application/" ;
        location.reload();
      }
    );
  });

});