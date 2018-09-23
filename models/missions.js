var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Missions = sequelize.define(
  "mission",
  {
    missionName: Sequelize.STRING,

    days: Sequelize.INTEGER,

    teamSize: Sequelize.INTEGER
  },
  {
    timestamps: true
  }
);

Missions.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Missions;
