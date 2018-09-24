module.exports = (sequelize, DataTypes) => {
  var Mission = sequelize.define("Mission", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    missionName: DataTypes.STRING,
    astronautOne: DataTypes.STRING,
    astronautTwo: DataTypes.STRING,
    astronautThree: DataTypes.STRING,
    astronautFour: DataTypes.STRING,
    oxygen: DataTypes.INTEGER,
    fuel: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    speed: DataTypes.INTEGER
  });
  return Mission;
};
