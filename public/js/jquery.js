$(document).ready(function() {
  $("#notice").hide();
  var missionId = $("#missionNo").val();
  console.log("I'm ready!");
  $("#createMission").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("I got clicked!");

    var missionName = $("#missionName")
      .val()
      .trim();
    var astronautOne = $("#astronautOneName")
      .val()
      .trim();
    var astronautTwo = $("#astronautTwoName")
      .val()
      .trim();
    var astronautThree = $("#astronautThreeName")
      .val()
      .trim();
    var astronautFour = $("#astronautFourName")
      .val()
      .trim();

    var newMission = {
      missionName: missionName,
      astronautOne: astronautOne,
      astronautTwo: astronautTwo,
      astronautThree: astronautThree,
      astronautFour: astronautFour
    };
    if (
      (missionName, astronautOne, astronautTwo, astronautThree, astronautFour)
    ) {
      $.ajax("/api/mission", {
        type: "POST",
        data: newMission
      }).then(function() {
        console.log("added a new mission");
        console.log(newMission);
        //redirect to new page
      });
    }
  });

  //onclick event for final message
  $("#sendFinalMessageWin").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("I got clicked!");
    var message = $("#finalMessage").val();
    var missionid = $("#missionID").val();

    var newData = {
      message: message,
      id: missionid
    };
    if (message) {
      $.ajax("/api/losers", {
        type: "POST",
        data: newData
      }).then(function() {
        console.log("Added an epitaph");
      });
    }
  });

  $("#sendFinalMessageLoss").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("I got clicked!");
    var message = $("#finalMessage").val();
    var missionid = $("#missionID").val();

    var newData = {
      message: message,
      id: missionid
    };
    if (message) {
      $.ajax("/api/losers", {
        type: "POST",
        data: newData
      }).then(function() {
        console.log("Added an epitaph");
      });
    }
  });

  var checkbox = function() {
    console.log("starting speed is " + speedSelected);

    if (speedSelected === 116000) {
      $("#switch_right").addClass("checked");
      $("#switch_left").removeClass("checked");
    }

    if (speedSelected === 58000) {
      $("#switch_right").removeClass("checked");
      $("#switch_left").addClass("checked");
    }
  };

  checkbox();
  console.log("Mission ID is: " + missionId);

  $("#switch_left").on("click", function(event) {
    event.preventDefault();
    speedSelected = 58000;
    $("#switch_left").addClass("checked");
    $("#switch_right").removeClass("checked");
    $("#status").text(
      "Your speed has been changed to slow. You will use less fuel and more oxygen."
    );
    console.log("speed has been updated to " + speedSelected);
  });

  $("#switch_right").on("click", function(event) {
    event.preventDefault();
    speedSelected = 116000;
    $("#switch_left").removeClass("checked");
    $("#switch_right").addClass("checked");
    $("#status").text(
      "Your speed has been changed to fast. You will use more fuel and less oxygen."
    );
    console.log("speed has been updated to " + speedSelected);
  });

  var kIndex;
  var url =
    "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json";

  var weatherReport = [
    "cold front",
    "nippy",
    "muggy",
    "wear shorts",
    "sunny w/ a high of uv",
    "the electron shuffle",
    "danger, stay indoors",
    "seriously, who popped a sun spot",
    "direct eye contact will cause death"
  ];

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // Work with JSON data here
      var spaceWeather = data[1];
      kIndex = spaceWeather[1];
      console.log(kIndex);
      $("#spaceWeather").text(weatherReport[kIndex]);
    })
    .catch(err => {
      // Do something for an error here
      throw err;
    });

  //========= SHOWING AND HIDING THE EVENT MODAL =============//
  var factsContainer = $(".modal__facts");
  var optionsContainer = $(".modal__options");

  factsContainer.hide();
  optionsContainer.hide();

  //========= SEND THE FACT TEXT HERE =============//
  var facts = $("#eventFact");

  //========= SEND THE STATUS TEXT =============//
  var status = $("#status");

  //========= SEND THE OPTIONS TEXTS HERE =============//
  var optionA = $("#optionA");
  var optionB = $("#optionB");
  var optionC = $("#optionC");
});
