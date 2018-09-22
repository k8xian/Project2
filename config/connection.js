var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

require("dotenv").config();

if (config.use_env_variable) {
  var sequelize = new Sequelizeh(process.env[config.use_env_variable]);
}
if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(
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
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf("../models") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js"
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
// module.exports = sequelize;
// module.exports = Winners;
// module.exports = Losers;
