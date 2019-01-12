'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The password cannot be null
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    user_pass: {
      type: DataTypes.STRING,

    }
  },
   
  {
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    hooks: {
      beforeCreate: function(user, options) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      }
    }
  });
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.devices, {
      onDelete: "cascade"
    });
  }
  return User;
};