//requiring npm
const express = require("express");
const router = express.Router();
const missions = require("../models/missions.js");

//showing other stuff
router.get("/", function(req, res) {
  res.render("landing");
});

router.get("/mission", function(req, res) {
  res.render("index");
});

router.get("/failed_missions", function(req, res) {
  missions.selectAll("losers", function(data) {
    var hbsObject = {
      message: "You have died of space dysentery",
      winloss: data,
      messageTwo: "You are the worst"
    };
    console.log(hbsObject);
    //sending data to render in handlebars
    res.render("mission_list", hbsObject);
  });
});

router.get("/successful_missions", function(req, res) {
  missions.selectAll("winners", function(data) {
    var hbsObject = {
      message: "Martian Colony Residents",
      winloss: data,
      messageTwo: "Congratulations and welcome to Mars"
    };
    console.log(hbsObject);
    //sending data to render in handlebars
    res.render("mission_list", hbsObject);
  });
});

router.get("/play", function(req, res) {
  res.render("gameplay");
});

router.get("/current_missions", function(req, res) {
  missions.selectAll("missions", function(data) {
    var hbsObject = {
      message: "Current Missions",
      missions: data,
      messageTwo: "Click a mission to play"
    };
    console.log(hbsObject);
    //sending data to render in handlebars
    res.render("mission_list", hbsObject);
  });
});

router.get("/play/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  missions.selectOne("missions", condition, function(data) {
    var hbsObject = {
      astronautOne: data[0].astronautOne,
      astronautTwo: data[0].astronautTwo,
      astronautThree: data[0].astronautThree,
      astronautFour: data[0].astronautFour
    };
    console.log(hbsObject);
    //sending data to render in handlebars
    res.render("gameplay", hbsObject);
  });
});

//adding a burger based on form data
router.post("/api/mission", function(req, res) {
  missions.createOne(
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
