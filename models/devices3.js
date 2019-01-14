'use strict';

module.exports = function(sequelize, DataTypes) {
  const Trip = sequelize.define('Trip', {
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
    Device.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Trip;
}