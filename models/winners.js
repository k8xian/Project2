
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Winners = sequelize.define("winner", {

  missionName: Sequelize.STRING,

  days: Sequelize.INTEGER,

  astronautsAlive: Sequelize.STRING,

  message: Sequelize.INTEGER,
}, {
  timestamps: true
});

// Makes the Character Model available for other files (will also create a table)
module.exports = Winners;
