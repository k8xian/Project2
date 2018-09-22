$(document).ready(function() {
  $(".missionForm").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var missionName = $("#missionName")
      .val()
      .trim();
    var astronautOne = $("#astronautOne")
      .val()
      .trim();
    var astronautTwo = $("#astronautTwo")
      .val()
      .trim();
    var astronautThree = $("#astronautThree")
      .val()
      .trim();
    var astronautFour = $("#astronautFour")
      .val()
      .trim();
    var astronautFive = $("#astronautFive")
      .val()
      .trim();
    var astronautSix = $("#astronautSix")
      .val()
      .trim();

    var speed = $("input[name=background]")
      .attr("checked", true)
      .val();

    var newMission = {
      missionName: missionName,
      astronauts: {
        astronautOne: astronautOne,
        astronautTwo: astronautTwo,
        astronautThree: astronautThree,
        astronautFour: astronautFour,
        astronautFive: astronautFive,
        astronautSix: astronautSix
      },
      speed: speed
    };

    $.ajax("/api/mission", {
      type: "POST",
      data: newMission
    }).then(function() {
      console.log("created new cat");
      //redirect to new page
    });
  });

  //ajax to somehow pass this back to the API
});
