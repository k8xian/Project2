var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Missions = sequelize.define(
  "mission",
  {
    missionName: Sequelize.STRING,

    days: Sequelize.INTEGER,

    distance: Sequelize.INTEGER,

    oxygen: Sequelize.INTEGER,

    fuel: Sequelize.INTEGER,

    astronautOne: Sequelize.STRING,

    astronautTwo: Sequelize.STRING,

    astronautThree: Sequelize.STRING,

    astronautFour: Sequelize.STRING,

    speed: Sequelize.INTEGER
  },
  {
    timestamps: true
  }
);

Missions.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Missions;
