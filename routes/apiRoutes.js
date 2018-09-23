var db = require("../models");

// Requires for story driven data
var event = require("../public/data/data.js");
var checkpoint = require("../public/data/data.js");

console.log(event[0].name);
console.log(checkpoint[0].name);

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

  app.post("/api/mission", function(req, res) {
    db.Mission.create(req.body).then(function(newMission) {
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
