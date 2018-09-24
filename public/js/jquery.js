$(document).ready(function() {
  $("#notice").hide();
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
});
