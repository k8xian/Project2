// confirm connection to timeout
console.log("connected to timeout.js");

// requiring story functions
// var randomEvent = require("./function.js")
// console.log(randomEvent);

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

var speedSelected = fast // or slow

// timeout function for checkpoint and event triggers
var eventTimer = 0;

var interval = setInterval(increment, 1000);

function clearInterval() {
  clearTimeout(interval);
}

function increment() {
  eventTimer++;
  dayIncrements++;

//   switch (distance) {
//     case (distance === moonDistance):
//         console.log('made it to the moon')
//         break;
//     case (distance >= final):
//         console.log('made it to mars')
//         break;
//     case (distance === midpointDistance):
//         console.log('half-way there')
//         break;
//     case (distance === deimosDistance):
//         console.log('made it to deimos')
//         break;
//   }

    if (distance === moonDistance){
        console.log('you made it to the moon')
    }

    if (speedSelected === fast) {
      distance = (distance % final) + fast;
      $("#travelled").text(distance);
      // switch case for distance variable
    }
    else {
      distance = (distance % final) + slow;
      $("#travelled").text(distance);
    }

  // After the distance check, this function will then check if it's time for a random event
  if ((eventTimer % 60) === 0) {
    console.log("random event was triggered");
  }

  if ((dayIncrements % 12) === 0) {
    days++;
    sols = days * 1.0114;
    $("#earthDays").text(days);
    $("#marsDays").text(sols.toFixed(2));
    console.log("earth days: " + days);
    console.log("sols: " + sols);
  }
}