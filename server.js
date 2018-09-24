const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();
const exphbs = require("express-handlebars");

//setting public route for css and frontend jquery and images
app.use(express.static("public"));

//making the json readable
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//getting handlebars working
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//integrating the routes set by the controllers
const routes = require("./controllers/marsController.js");
app.use(routes);

//making it all go
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
