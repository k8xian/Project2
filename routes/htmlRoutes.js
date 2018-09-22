var db = require("../config/connection.js");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/play", function(req, res) {
    res.render("gameplay");
  });

  app.get("/loss", function(req, res) {
    res.render("loss");
  });
  app.get("/win", function(req, res) {
    res.render("win");
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
