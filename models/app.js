var express = require("express");
var routes = require("../routes");
var api = require("../routes/apiRoutes.js");
var html = require("../routes/htmlRoutes.js");
var http = require("http");
var path = require("path");
var db = require("./models");

var app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" === app.get("env")) {
  app.use(express.errorHandler());
}

app.get("/", routes.index);
app.get("/apiRoutes", api.list);
app.get("/htmlRoutes", html.list);

db.sequelize.sync().then(function() {
  http.createServer(app).listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
  });
});
