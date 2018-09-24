$(document).ready(function() {
  console.log("I'm ready!");
  $("#launch").on("click", function(event) {
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

    var speed;
    if ($("input[name=switch_2]").val() === "fast") {
      speed = 116000;
    } else {
      speed = 58000;
    }

    var newMission = {
      missionName: missionName,
      // days: 0,
      // distance: 0,
      // oxygen: 100,
      // fuel: 100,
      astronautOne: astronautOne,
      astronautTwo: astronautTwo,
      astronautThree: astronautThree,
      astronautFour: astronautFour,
      speed: speed
    };

    $.ajax("/api/mission", {
      type: "POST",
      data: newMission
    }).then(function() {
      console.log("added a new mission");
      console.log(newMission);
      //redirect to new page
    });
  });

  // $(".gameplay").on("submit", function(event) {
  //   event.preventDefault();
  //   var speed = $("input[name=switch_2]")
  //     .attr("checked", true)
  //     .val();
  //   var newMission = {
  //     speed: speed
  //   };

  //   $.ajax("/api/mission", {
  //     type: "POST",
  //     data: newMission
  //   }).then(function() {
  //     console.log("changed speed");
  //     //redirect to new page
  //   });
  // });

  //ajax to somehow pass this back to the API
});

var kIndex;
var url = "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json";

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
