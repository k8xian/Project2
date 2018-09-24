"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];

var db = {};

//importing 
//importing const Project = sequelize.import(__dirname + "/path/to/models/project")



// var sequelize = new Sequelize(process.env[config.use_env_variable]);

// if (process.env.JAWSDB_URL) {
//    sequelize = new Sequelize.createConnection(process.env.JAWSDB_URL);
// } else {
  var sequelize = new Sequelize(
    "mars_db",
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      port: 3306,
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    }
  );
// 



// var Winners = sequelize.import(__dirname + "/winners.js");
// var Losers = sequelize.import(__dirname + "/losers.js");
// var Missions = sequelize.import(__dirname + "/missions.js");

var Winners = sequelize.define(
  "winner",
  {
    missionName: Sequelize.STRING,

    days: Sequelize.INTEGER,

    astronautsAlive: Sequelize.INTEGER,

    message: Sequelize.INTEGER
  },
  {
    timestamps: true
  }
);

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



fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
module.exports = sequelize;
module.exports = Winners;
module.exports = Losers;
