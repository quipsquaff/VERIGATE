// This static file provides the required JavaScript code the enable the following functionality on the /register route of our application.

//----------////
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    //----------////
    
    console.log("registration.js has been loaded");
    
    // CREATE(POST) OPERATIONS ////

    // Click functionality of register button.
    $("#register-button").on("click", function(event) {
        // Prevent default submit event.
        event.preventDefault();

        // Check to see if this button works.
        console.log("The #register-button has been clicked!");

        // IF, #password and #confirm-password do not match, notify the user.
        if ($("#password").val().trim() !== $("#confirm-password").val().trim()) {
            console.log("Passwords do not match!");
        } 
        // ELSE, continue with the rest of the button functionality.
        else {
            console.log("Passwords match!");
            // Instantiate a new object called, newUser and assign the user provided inputs as key-value pairs.
            var newUser = {
                firstName: $("#first-name").val().trim(),
                lastName: $("#last-name").val().trim(),
                email: $("#email").val().trim(),
                password: $("#password").val().trim(),
                confirmPassword: $("#confirm-password").val().trim(),
            }

            // Check to see if newUser object has been assigned the proper values.
            // console.log(newUser);

            // Send the POST request.
            $.ajax("/register", {
                type: "POST",
                data: newUser
            }).then(
                function () {
                console.log("created a new device");
            
                    // Switch Tab to Log-in Tab.
                    
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                    
                    target = $(this).attr('href');
                
                    $('.tab-content > div').not(target).hide();
                    
                    $(target).fadeIn(600);

                }
            );
        }
    });
    
    //----------////
    });
    //----------////