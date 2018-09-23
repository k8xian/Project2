var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Losers = sequelize.define(
  "loser",
  {
    missionName: Sequelize.STRING,

    days: Sequelize.INTEGER,

    epitaph: Sequelize.INTEGER
  },
  {
    timestamps: true
  }
);

Losers.sync();
// Makes the Character Model available for other files (will also create a table)
module.exports = Losers;
