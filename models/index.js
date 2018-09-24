require("dotenv").config();

if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize')
        , sequelize = null

    if (config.use_env_variable) {
        var sequelize = new Sequelize(process.env[config.use_env_variable]);
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
    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        Missions: sequelize.import(__dirname + '/missions'),
        Winners: sequelize.import(__dirname + '/winners'),
        Losers: sequelize.import(__dirname + '/losers')
        // add your other models here
    }

    /*
      Associations can be defined here. E.g. like this:
      global.db.User.hasMany(global.db.SomethingElse)
    */
}

module.exports = global.db