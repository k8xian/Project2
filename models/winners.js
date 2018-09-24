module.exports = (sequelize, DataTypes) => {
  var Winners = sequelize.define("Winners", {
    missionName: DataTypes.STRING,
    message: DataTypes.STRING,
    days: DataTypes.INTEGER,
    fuel: DataTypes.INTEGER,
    days: DataTypes.INTEGER,
  });
  return Winners;
};
