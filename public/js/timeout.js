// variables for speeds
// fast is going to be 58,000 km/h but stat will increment at double the speed per second
// same can be said about the slow speed

console.log("connected to timeout.js");

// distance to mars from earth in km
var final = 58000000;
var distance = 0;

// days and sols passed
// at fast speed, 12.8 seconds is a day passed on earth. Which will total 39 days by the time we reach mars
var dayIncrements = 0;
var days = 0;
var sols = 0;

// speeds --- original fast speed is 58,000 and original slow is 29,000. The following values represent double speeds
var fast = 116000;
var slow = 58000;

// rounded distances to make neat divisibilities with speed
var moonDistance = 348000;
var midpointDistance = 29000000;
var deimosDistance = 57420000;

var speedSelected = true;

// timeout function for checkpoint and event triggers
var eventTimer = 0;

var interval = setInterval(increment, 1000);

function clearInterval() {
  clearTimeout(interval);
}

function increment() {
  eventTimer++;
  dayIncrements++;

  distance = (distance % final) + fast;
  $("#travelled").text(distance);

  //   if (speedSelected) {
  //     distance = (distance % final) + fast;
  //     // switch case for distance variable
  //     switch (distance) {
  //     case distance >= final:
  //       clearInterval();
  //       marsFunction(); // THESE FUNCTIONS ARE JUST PLACEHOLDERS
  //       break;
  //     case distance === moonDistance:
  //       clearInterval();
  //       moonFunction(); // THESE FUNCTIONS ARE JUST PLACEHOLDERS
  //       break;
  //     case distance === midpointDistance:
  //       clearInterval();
  //       midpointFunction(); // THESE FUNCTIONS ARE JUST PLACEHOLDERS
  //       break;
  //     case distance === deimosDistance:
  //       clearInterval();
  //       deimosFunction(); // THESE FUNCTIONS ARE JUST PLACEHOLDERS
  //       break;
  //     }
  //   }
  //   else {
  //     distance = (distance % final) + slow;
  //     switch (distance) {
  //     case distance >= final:
  //       clearInterval();
  //       marsFunction();
  //       break;
  //     case distance === moonDistance:
  //       clearInterval();
  //       moonFunction();
  //       break;
  //     case distance === midpointDistance:
  //       clearInterval();
  //       midpointFunction();
  //       break;
  //     case distance === deimosDistance:
  //       clearInterval();
  //       deimosFunction();
  //       break;
  //     }
  //   }

  // After the distance check, this function will then check if it's time for a random event
  if (eventTimer % 60 == 0) {
    console.log("random event was triggered");
  }

  if (dayIncrements % 12 == 0) {
    days++;
    sols = days * 1.0114;
    $("#earthDays").text(days);
    $("#marsDays").text(sols.toFixed(2));
    console.log("earth days: " + days);
    console.log("sols: " + sols);
  }
}
