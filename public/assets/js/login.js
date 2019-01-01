// This static file provides the required JavaScript code the enable the following functionality on the /register route of our application.

//----------////
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    //----------////
    
    console.log("login.js has been loaded");
    
    // CREATE(POST) OPERATIONS ////

    // Click functionality of register button.
    $("#login-button").on("click", function(event) {
        // Prevent default submit event.
        event.preventDefault();

        // Check to see if this button works.
        console.log("The #login-button has been clicked!");

        // Variables (for Validation) ////
        var userEmail = $("#user-email").val().trim();
        var userPassword = $("#user-password").val().trim();

        var userData = {
            email: $("#user-email").val().trim(),
            password: $("#user-password").val().trim(),
        }

        if (!userEmail) {
            console.log("Please enter email");
        } 
        
        if (!userPassword) {
            console.log("P;ease enter password");
        }

        loginUser(userData.email, userData.password);

    });
    
    function loginUser(username, password) {
        $.post("/login", {
          username: username,
          password: password
        }).then(function(data) {
          window.location.replace(data);
          // If there's an error, log the error
        }).catch(function(err) {
          console.log("incorrect password")
        });
      }


});