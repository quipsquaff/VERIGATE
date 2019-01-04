var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var auth = require("../models/auth");
// var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    email: "email"
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    auth.userPass(email, function (data) {

      // If username is not located in the users table.
      if (data[0] === undefined) {
        console.log("invalid email");

        return done(null, false, {
          message: "Incorrect email."
        });

      } else {
        var dbPass = data[0].user_pass;
        var userID = data[0].userID;

        console.log("userID is " + userID);
        console.log("from database: " + dbPass);
        console.log("pass-thru argument: " + password);

        // If password from database and password entered match.
        if (dbPass === password) {
          console.log("passwords match!");

          return done(null, userID);

        } else {

          // ELSE (Password from database and password entered do not match)
          console.log("invalid password");
          

          return done(null, false, {
            message: "Incorrect password."
          });
        }
      }

    })
  })
  )

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, userID);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;