db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("landing");
  });

  app.get("/mission", function(req, res) {
    res.render("index");
  });

  app.get("/current_missions", function(req, res) {
    res.render("missionlist");
  });

  app.get("/failed_missions", function(req, res) {
    res.render("missionlist");
  });

  app.get("/successful_missions", function(req, res) {
    res.render("missionlist");
  });

  app.get("/play", function(req, res) {
    res.render("gameplay");
  });

  app.get("/play/:mission", function(req, res) {
    for (var i = 0; i < Missions.length; i++) {
      if (db.Missions[i].missionName === req.params.mission) {
        return res.render("play", Missions[i]);
      }
    }
  });

  app.get("/loss", function(req, res) {
    res.render("loss");
  });
  app.get("/win", function(req, res) {
    res.render("win");
  });
  app.get("/minigame", function(req, res) {
    res.render("minigame");
  });

  //   // Load example page and pass in an example by id
  //   app.get("/example/:id", function(req, res) {
  //     db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //       dbExample
  //     ) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  //   });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
