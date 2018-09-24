//requiring npm
const express = require("express");
const router = express.Router();
const missions = require("../models/missions.js");
// const winners = require("../models/winners.js");
// const losers = require("../models/losers.js");

//setting / to display all data
router.get("/missions", function(req, res) {
  missions.selectAll("missions", function(data) {
    var hbsObject = {
      missions: data
    };
    console.log(hbsObject);
    //sending data to render in handlebars
    res.render("mission_list", hbsObject);
  });
});

// router.get("/winners", function(req, res) {
//   missions.selectAll("winners", function(data) {
//     var hbsObject = {
//       missions: data
//     };
//     console.log(hbsObject);
//     //sending data to render in handlebars
//     res.render("mission_list", hbsObject);
//   });
// });

// router.get("/losers", function(req, res) {
//   missions.selectAll("losers", function(data) {
//     var hbsObject = {
//       missions: data
//     };
//     console.log(hbsObject);
//     //sending data to render in handlebars
//     res.render("index", hbsObject);
//   });
// });

router.get("/play/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  missions.selectOne("missions", condition, function(data) {
    var hbsObject = {
      missions: data
    };
    console.log(hbsObject);
    //sending data to render in handlebars
    res.render("gameplay", hbsObject);
  });
});

//adding a burger based on form data
router.post("/api/mission", function(req, res) {
  burger.createOne(
    [
      "missionName",
      "astronautOne",
      "astronautTwo",
      "astronautThree",
      "astronautFour",
      "daysTravelled",
      "distance",
      "oxygen",
      "fuel"
    ],
    [
      req.body.missionName,
      req.body.astronautOne,
      req.body.astronautTwo,
      req.body.astronautThree,
      req.body.astronautFour,
      0,
      0,
      100,
      100
    ],
    function(result) {
      res.json({ id: result.insertId });
    }
  );
});

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.updateOne(
//     {
//       devoured: req.body.devoured
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     }
//   );
// });

// //deleting burgers, because we can
// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows === 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;
