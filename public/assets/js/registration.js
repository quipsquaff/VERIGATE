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
                name: $("#first-name").val().trim() + " " + $("#last-name").val().trim(),
                email: $("#email").val().trim(),
                password: $("#password").val().trim(),
                confirmPassword: $("#confirm-password").val().trim(),
            }

            // Check to see if newUser object has been assigned the proper values.
            // console.log(newUser);

            // Clear the values from text input forms.
            $("#first-name").val("");
            $("#last-name").val("")
            $("#email").val("")
            $("#password").val("")
            $("#confirm-password").val("")

            // Send the POST request.
            $.ajax("/register", {
                type: "POST",
                data: newUser
            }).then(
                function () {
                console.log("created a new User");
            
                    // Switch Tab to Log-in Tab.
                    
                    $("#register-tab").removeClass('active');
                    $("#login-tab").addClass('active');
                    
                    target = $('#register-tab').attr('href');
                
                    // $('.tab-content > div').not(target).hide();
                    $('#signup').css('display', 'none');
                    $('#login').css('display', 'block');

                    $('#login1').css('display', 'none');
                    $('#login2').css('display', 'block');
                    
                    $(target).fadeIn(600);

                }
            );
        }
    });
    
    //----------////
    });
    //----------////