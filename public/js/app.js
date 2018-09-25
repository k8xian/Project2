// variables for speeds
// fast is going to be 58,000 km/h but stat will increment at double the speed per second
// same can be said about the slow speed

// distance to mars from earth in km
var final = 58000000;

var distance = 0;

// days and sols passed
// at fast speed, 12.8 seconds is a day passed on earth. Which will total 39 days by the time we reach mars
var dayIncrements = 0
var days = 0;
var sols = days * 1.0114;

// speeds --- original fast speed is 58,000 and original slow is 29,000. The following values represent double speeds
var fast = 116000;
var slow = 58000;

// rounded distances to make neat divisibilities with speed  
var moonDistance = 348000;
var midpointDistance = 29000000;
var deimosDistance = 57420000;

var speedSelected = fast || slow;

// timeout function for checkpoint and event triggers
var eventTimer = 0;

var interval = setInterval(increment, 1000);
var clearInterval = clearTimeout(interval);

// NEED TO IMPLEMENT DAY VS SOL CHANGES
function increment() {
    eventTimer++;
    dayIncrements++;
    if (speedSelected === fast) {
        distance = distance % final + fast;
        // switch case for distance variable
        switch (distance) {
            case (distance >= final):
                clearInterval();
                marsFunction();
                break;
            case (distance = moonDistance):
                clearInterval();
                moonFunction();
                break;
            case (distance = midpointDistance):
                clearInterval();
                midpointFunction();
                break;
            case (distance = deimosDistance):
                clearInterval();
                deimosFunction();
                break;
            case ((eventTimer % 60) = 0):
                clearInterval();
                eventFunction();
                eventTimer = 0;
                break;
        }
    }
    else {
        distance = distance % final + slow;
        switch (distance) {
            case (distance >= final):
                clearInterval();
                marsFunction();
                break;
            case (distance = moonDistance):
                clearInterval();
                moonFunction();
                break;
            case (distance = midpointDistance):
                clearInterval();
                midpointFunction();
                break;
            case (distance = deimosDistance):
                clearInterval();
                deimosFunction();
                break;
            case ((eventTimer % 60) = 0):
                clearInterval();
                eventFunction();
                eventTimer = 0;
                break;
        }
    }
}

//this increments per second in realtime, this is equal to an hour
var timeIncremented = speedSelected * 2;

//days increment as a function of distance and realtime - figure that out
var days = timeIncremented / 12;

//martian days increment as a function of earth days
var sols = days / 1.0114;

//10 timeout functions per checkpoint

//3 checkpoints, moon, russell's teapot, martian moons
//

