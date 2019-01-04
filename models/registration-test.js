'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {

  
  var users = {
    create: function(name, email, pass, cb) {
        orm.create("users", ["name", "email", "admin", "user_pass"], [name, email, 1, pass], function(res) {
            cb(res);
        });
    }
}, {
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    hooks: {
      beforeCreate: function(users, options) {
        users.user_pass = bcrypt.hashSync(users.user_pass, bcrypt.genSaltSync(10), null);
      }
    }
  }


  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Trip, {
      onDelete: "cascade"
    });
  }
  return User;
};