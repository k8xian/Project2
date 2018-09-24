module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Mission", {
    missionName: DataTypes.STRING,
    astronautOne: DataTypes.STRING,
    astronautTwo: DataTypes.STRING,
    astronautThree: DataTypes.STRING,
    astronautFour: DataTypes.STRING,
    days: DataTypes.INTEGER,
    oxygen: DataTypes.INTEGER,
    fuel: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    speed: DataTypes.INTEGER
  });
  return Mission;
};


module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    username: DataTypes.STRING
  });
};