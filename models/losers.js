module.exports = (sequelize, DataTypes) => {
  var Losers = sequelize.define("Losers", {
    missionName: DataTypes.STRING,
    message: DataTypes.STRING,
    days: DataTypes.INTEGER,
    fuel: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    days: DataTypes.INTEGER,
  });
  return Losers;
};
