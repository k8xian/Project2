//variables

//slow has a speed
//fast has a speed

//distance to mars is 58,000,000km.
var final = 58000000;
//distance starts at 0
var distance = 0;

var fast = 58000;
var slow;

//this will become the speed selected
var speedSelected;

//this increments per second in realtime, this is equal to an hour
var timeIncremented = speedSelected * 2;

//days increment as a function of distance and realtime - figure that out
var days = timeIncremented / 12;

//martian days increment as a function of earth days
var sols = days / 1.0114;

//distance to moon is 384,400 km
var moonDist = 384400;

//var deimos distance
var deimosDist = 57976540;

//10 timeout functions per checkpoint

//3 checkpoints, moon, russell's teapot, martian moons
//
