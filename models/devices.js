'use strict';

module.exports = function(sequelize, DataTypes) {
  const Device = sequelize.define('Device', {
    gateID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit_location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    deviceID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    switch: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Device.associate = function (models) {
    // associations can be defined here
    Device.belongsToMany(models.users, {
      foreignKey: {
        allowNull: false
      },
      through: "usersDevices"
    });
  }
  return Device;
}