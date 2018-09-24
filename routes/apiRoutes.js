var Missions = require("../models/missions");

// Requires for story driven data
// var data = require("../public/data/data.js");

module.exports = function(app) {
  // Get all examples
  app.get("/api/event", function(req, res) {
    db.Mission.findAll({}).then(function(dbMissions) {
      res.json(dbMissions);
    });
  });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  app.post("/api/mission/", function(req, res) {
    Missions.create(req.body).then(function(newMission) {
      res.json(newMission);
    });
  });

  app.get("/api/mission", function(req, res) {
    return res.json(newMission);
  });
};
//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(
//       dbExample
//     ) {
//       res.json(dbExample);
//     });
//   });
// };
