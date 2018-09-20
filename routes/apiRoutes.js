var db = require("../models");

// Requires for story driven data
var event = require('../public/data/data.js');
var checkpoint = require('../public/data/data.js');

console.log(event[0].name);
console.log(checkpoint[0].name);

module.exports = function(app) {
  // Get all examples
  app.get("/api/event", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
