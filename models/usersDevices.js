module.exports = function(sequelize, DataTypes) {

var Sequelize = require('sequelize');


const UserProjects = sequelize.define('userProjects', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: DataTypes.STRING
})

}