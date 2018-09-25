// confirm connection to timeout
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

var speedSelected = fast; // or slow

// timeout function for checkpoint and event triggers
var eventTimer = 0;

var interval = setInterval(increment, 1000);

function clearInterval() {
  clearTimeout(interval);
}

var astOneDead = false;
var astTwoDead = false;
var astThreeDead = false;
var astFourDead = false;

//function to redirect to the losing screen
var losingScreen = function() {
  var missionId = $("#missionNo").attr("data-id");
  location.replace(`/loss/${missionId}`);
};


var winningScreen = function() {
  var missionId = $("#missionNo").attr("data-id");
  location.replace(`/win/${missionId}`);
};


//function to kill an astronaut
var killAstronaut = function() {
  if (!astOneDead) {
    astOneDead = true;
    $("#astHelmOne").addClass("dead");
  } else if (astOneDead) {
    astTwoDead = true;
    $("#astHelmTwo").addClass("dead");
  } else if (astOneDead && astTwoDead) {
    astThreeDead = true;
    $("#astHelmThree").addClass("dead");
  } else if (astOneDead && astTwoDead && astThreeDead) {
    astFourDead = true;
    $("#astHelmThree").addClass("dead");
  } else if (astoneDead && astTwoDead && astThreeDead && astFourDead) {
    losingScreen();
    return;
  }
};

//call this function
//killAstronaut();

function increment() {
  eventTimer++;
  dayIncrements++;

  if (speedSelected === fast) {
    distance = (distance % final) + fast;
    $("#travelled").text(distance);
    $("#progress").width((distance / 58000000) * 250);
    // switch case for distance variable
    switch (true) {
    case distance === moonDistance:
      console.log("made it to the moon");
      clearInterval();
      checkpointOne();
      break;
    case distance === midpointDistance:
      console.log("half-way there");
      checkpointTwo();
      $(".checkpointOne").hide();
      $(".checkpointTwo").show();
      break;
    case distance === deimosDistance:
      console.log("made it to deimos");
      checkpointThree();
      $(".checkpointTwo").hide();
      $(".checkpointThree").show();
      break;
    case distance >= final:
      console.log("made it to mars");
      break;
    }
  } else {
    distance = (distance % final) + slow;
    $("#travelled").text(distance);
    $("#progress").width((distance / 58000000) * 250);
    switch (true) {
    case distance === moonDistance:
      console.log("made it to the moon");
      checkpointOne();
      break;
    case distance === midpointDistance:
      console.log("half-way there");
      checkpointTwo();
      break;
    case distance === deimosDistance:
      console.log("made it to deimos");
      checkpointThree();
      break;
    case distance >= final:
      console.log("made it to mars");
      break;
    }
  }

  // After the distance check, this function will then check if it's time for a random event
  if (eventTimer % 60 === 0) {
    console.log("random event was triggered");
    randomEvent();
  }

  if (dayIncrements % 12 === 0) {
    days++;
    sols = days * 1.0114;
    $("#earthDays").text(days);
    $("#marsDays").text(sols.toFixed(2));
    console.log("earth days: " + days);
    console.log("sols: " + sols);
  }
}

// Story Line Data
var event = [
  {
    name: "space junk",
    image: "LINK",
    fact:
      "As of 5 July 2016, the United States Strategic Command tracked a total of 17,852 artificial objects in orbit above the Earth, including 1,419 operational satellites. However, these are just objects large enough to be tracked. As of July 2013, more than 170 million debris smaller than 1 cm (0.4 in), about 670,000 debris 1–10 cm, and around 29,000 larger debris were estimated to be in orbit. Collisions with debris have become a hazard to spacecraft!",
    statement:
      "Your ship has been hit by a hunk of flying space junk! Your sensor array has become inoperable. Without it you will not survive. You must quickly do one of the following:",
    option: {
      optionA:
        "You send one of your crew to perform a spacewalk and fix the array. This is the best option to repair the sensor array but you risk losing an astronaut.",
      optionB:
        "You send the rocket-fuel-powered robot to fix the array, but there is only a 50% chance of it being repaired and the robot consumes the fuel.  ",
      optionC:
        "You send both a crew memeber and the robot to ensure the repair, but burn extra fuel for the robot and extra oxygen for the astronaut."
    },
    result: {
      resultA: "Success you have repaired the sensor array!",
      resultB:
        "The robot was unable to repair the sensor and because it too so long, 30% of your fuel was burned. You had to send an astronaut, who made the repair, but you lost one day",
      resultC:
        "The array is repaired, but fuel and oxygen are both depleted by 25%."
    },
    multiplier: {
      multiplierA: "math-a",
      multiplierB: "math-b",
      multiplierC: "math-c"
    }
  },
  {
    name: "all systems nominal",
    image: "LINK",
    fact:
      "As one engineer said, ‘She is phenomenally nominal’ — nominal being space jargon for operating-as-planned.",
    statement: "All systems nominal.",
    option: {
      optionA: "Continue the voyage!",
      optionB: "Continue the voyage!",
      optionC: "Continue the voyage!"
    },
    result: {
      resultA: "The voyage continues!",
      resultB: "The voyage continues!",
      resultC: "The voyage continues!"
    },
    multiplier: {
      multiplierA: "math-a",
      multiplierB: "math-b",
      multiplierC: "math-c"
    }
  },
  {
    name: "coffee snafu",
    image: "LINK",
    fact: "I like Turtles",
    statement:
      "While trying to scratch their nose, of the crew floated into the coffee machine--HARD! sending coffee flying onto the nav computer.",
    option: {
      optionA: "Repair the nav computer, but lose 3 days due to the down time",
      optionB: "'Nav computer?! I don't take directions from a metal box!'",
      optionC: "Fly blind until the coffee dries and the computer reboots."
    },
    result: {
      resultA: "The the computer was repaired but you lost 3 days.",
      resultB:
        "After bashing the nav computer to bit, you fly blind, into a blackhole. Good job! Mission over!",
      resultC:
        "After 5 days of flying blind, the computer reboots and you now lost 7 days total and 20% fuel to get back on course."
    },
    multiplier: {
      multiplierA: "math-a",
      multiplierB: "math-b",
      multiplierC: "math-c"
    }
  },
  {
    name: "Minigame",
    image: "LINK",
    fact:
      "From the astrobiological perspective, asteroid prospecting could provide scientific data for the search for extraterrestrial intelligence (SETI). Some astrophysicists have suggested that if advanced extraterrestrial civilizations employed asteroid mining long ago, the hallmarks of these activities might be detectable",
    statement:
      "This is an opportunity to destroy asteroids for much needed oxygen and fuel.",
    option: {
      optionA: "Play game to mine for only oxygen at 100% return rates.",
      optionB: "Play game to mine for only fuel at 100% return rates.",
      optionC:
        "Play game to mine for for both fuel and oxygen at 25% return rates."
    },
    result: {
      resultA: "Oxygen is mined at 100% return rate",
      resultB: "Fuel is mined at 100% return rate",
      resultC: "Both are mined at 25% return rate"
    },
    multiplier: {
      multiplierA: "math-a",
      multiplierB: "math-b",
      multiplierC: "math-c"
    }
  },
  {
    name: "chest burster",
    image: "LINK",
    fact:
      "There is evidence that Mars had a warmer and wetter past: dried-up river beds, polar ice caps, volcanoes, and minerals that form in the presence of water have all been found. Nevertheless, present conditions on Mars' subsurface may support life.",
    statement:
      "One of the crew has been having chest pains and have been placed in the medical pod. Exams results show that the astronaut has an alien growing inside of him. You must choose from the following treatment options:",
    option: {
      optionA: "Throw him out the airlock, don't need any aliens on the ship",
      optionB: "Attempt surgery with the robot",
      optionC: "Perform a host transfer to the rat on the ship"
    },
    result: {
      resultA:
        "A struggle breaks out, and he and another crew member get sucked out of the airlock. You just lost two astronauts. That's what you get for not being compassionate.",
      resultB:
        "Surgery is unsuccessful and the astronaut dies, but the alien is removed and burned in an incinerator. You lose an astronaut, 20% fuel for the robot, and 10% oxygen for the incinerator.",
      resultC:
        "You lose 3 days, but you manage to coax out the alien and transfer it to the rat onboard. The rat was thrown out the airlock, solving the problem. Great job on thinking outside the box."
    },
    multiplier: {
      multiplierA: "math-a",
      multiplierB: "math-b",
      multiplierC: "math-c"
    }
  },
  {
    name: "Radiation",
    image: "LINK",
    fact:
      "There are millions of asteroids, many thought to be the shattered remnants of planetesimals, bodies within the young Sun's solar nebula that never grew large enough to become planets.",
    statement:
      "You encountered an asteroid field. Choose how you want to navigate it.",
    option: {
      optionA: "Go around the field and lose 3 days.",
      optionB:
        "Go through the field and gain 3 days but risk damage or outright destruction.",
      optionC: "Call NASA for help."
    },
    result: {
      resultA:
        "You managed to navigate around the field and sustained no damage, but lost 3 days.",
      resultB:
        "Congratulations, you succesfully navigated the field and gained 3 days progress! Without risk, there is no reward.",
      resultC:
        "After waiting for NASA to respond, they directed you around the field. You lost a total of 5 days because you could not trust your own descisions."
    },
    multiplier: {
      multiplierA: "math-a",
      multiplierB: "math-b",
      multiplierC: "math-c"
    }
  }
];

var checkpoint = [
  {
    name: "checkpoint Moon",
    image: "url",
    fact:
      "The Moon (or Luna) is the Earth's only natural satellite and was formed 4.6 billion years ago around some 30–50 million years after the formation of the solar system. The Moon is in synchronous rotation with Earth meaning the same side is always facing the Earth.",
    statement:
      "You have arrived at the Moon, the first stop on a long voyage. You get a signal from the dark side of the moon. Choose from the following options:",
    option: {
      optionA: "You go and investigate and land on the dark side of the moon.",
      optionB:
        "You freak and say, 'there's nobody on the Moon, f- that noise, I am out!'",
      optionC:
        "You radio back to NASA and explain there is some strange signal coming from the dark side of the Moon, and ask what to do."
    },
    result: {
      resultA:
        "You land on the dark side of the Moon and are greeted Moon Men who are friendly and give you provisions and refuel your oxygen and fuel. ",
      resultB: "You continue on your current course and never look back.",
      resultC:
        "NASA is shocked and does not know what to do, this scares you so bad that you die of dysentary. Mission over!"
    },
    multiplier: {
      multiplierA: "math-a",
      multiplierB: "math-b",
      multiplierC: "math-c"
    }
  },
  {
    name: "Midpoint",
    image: "url",
    fact:
      "'Nobody can prove that there is not between the Earth and Mars a china teapot revolving in an elliptical orbit, but nobody thinks this sufficiently likely to be taken into account in practice.'-Bertrand Russell",
    statement:
      "Congratlations! You have reached the halfway point between Earth and Mars, an amazing feat unto itself. While you might be thniking about that teapot, you did not encounter one. However, what you did encoutner is a glowing green orb that is approaching your ship! Without much time to react you choose to do the following:",
    option: {
      optionA:
        "Not wanting to take a risk, you turn your ship to avoid the glowing orb.",
      optionB:
        "Thinking that your experience with the Moon Men was positive, you decide to engage the orb.",
      optionC: "You reverse thrust!"
    },
    result: {
      resultA:
        "While you succeed in navigating the ship around the orb, the high amount of energy coming from the orb causes arc flashes which damage your oxygen tanks and you have lost some of your supply.",
      resultB:
        "As you engage the orb, high amounts of energy and electricity surround and penetrate the ship, causing you to lose consciousness... After coming to, you find that you survived your encoutner with the orb, but your crew has not, they have all turned into skeletons!",
      resultC:
        "After backing it up, and changing course you totally avoided any encounter with the orb. However, you lost several days off your mission, which has set you back."
    },
    multiplier: {
      multiplierA: "math-a",
      multiplierB: "math-b",
      multiplierC: "math-c"
    }
  },
  {
    name: "Deimos",
    image: "url",
    fact:
      "Deimos's orbit is slowly getting larger, because it is far enough away from Mars and because of tidal acceleration. It is expected to eventually escape Mars's gravity.",
    statement:
      "Mars is glowing a fiery red in the distance as you touch down on Deimos for to plan a final approach to Mars and gather sand off the surface, which will be used as a braking dust to create a denser atmosphere in front of the ship as your enter Mars. However, while gathering the sand you encounter a large hole which appears to be an interdimentional portal to, you guessed it, HELL! Did we forget to mention that Deimos means terror? Demons start coming out of the portal and turn thier attention towards you; what do you do?",
    option: {
      optionA: "You drop the sand and run like hell back to the ship.",
      optionB:
        "You hold on to the sand, which slows you down, and hightail it back to the ship.",
      optionC: "You go rambo on their asses and start hurling rocks at them. "
    },
    result: {
      resultA:
        "You arrive but your crew has been devoured by demons and you took a few fireballs to the butt. You really don't need that sand anyways.",
      resultB:
        "The demons are gaining on you as your crew dashes ahead. They dropped thier sand, and you decide to do it, too. You take a few fireballs to the butt, but get back to the ship and get off that rock.",
      resultC:
        "Biggest mistake ever!! Why you gonna throw a rock at a demon? You are eviscerated and torn to shreads as your crew watches in terror, knowing what will happen to them next. Your name and photo appear in the Darwin Awards as number one idiot getting themselves killed. Good Job, idiot! Enjoy burning in Hell!"
    },
    multiplier: {
      multiplierA: "math-a",
      multiplierB: "math-b",
      multiplierC: "math-c"
    }
  }
];

var factsContainer = $(".modal__facts");
var optionsContainer = $(".modal__options");

factsContainer.hide();
optionsContainer.hide();

//========= SEND THE FACT TEXT HERE =============//
var facts = $("#eventFact");

//========= SEND THE STATUS TEXT =============//
var statement = $("#status");

//========= SEND THE OPTIONS TEXTS HERE =============//
var optionA = $("#optionA");
var optionB = $("#optionB");
var optionC = $("#optionC");

//========= SEND THE RESULTS HERE ===============//
var result = $("#status");

// Story functions

// for random event triggers
function randomEvent() {
  var random = event[Math.floor(Math.random() * event.length)];

  var selectedEvent = {
    name: random.name,
    image: random.image,
    fact: random.fact,
    statement: random.statement,
    option: random.option,
    result: random.result,
    multiplier: random.multiplier
  };

  console.log(selectedEvent);
  return selectedEvent;
}

function checkpointOne() {
  var selectedCheckpoint = {
    name: checkpoint[0].name,
    image: checkpoint[0].image,
    fact: checkpoint[0].fact,
    option: checkpoint[0].option,
    statement: checkpoint[0].statement,
    result: checkpoint[0].result,
    multiplier: checkpoint[0].multiplier
  };
  console.log(selectedCheckpoint);
  factsContainer.show();
  optionsContainer.show();

  facts.text(selectedCheckpoint.fact);
  statement.append(selectedCheckpoint.statement);
  optionA.append(selectedCheckpoint.option.optionA);
  optionB.append(selectedCheckpoint.option.optionB);
  optionC.append(selectedCheckpoint.option.optionC);

  optionA.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedCheckpoint.result.resultA);
    interval = setInterval(increment, 1000);
  });

  optionB.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedCheckpoint.result.resultB);
    interval = setInterval(increment, 1000);
  });

  optionC.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedCheckpoint.result.resultC);
    interval = setInterval(increment, 1000);
  });

  console.log(selectedCheckpoint);
}

function checkpointTwo() {
  var selectedCheckpoint = {
    name: checkpoint[1].name,
    image: checkpoint[1].image,
    fact: checkpoint[1].fact,
    option: checkpoint[1].option,
    statement: checkpoint[1].statement,
    result: checkpoint[1].result,
    multiplier: checkpoint[1].multiplier
  };
  console.log(selectedCheckpoint);
  return selectedCheckpoint;
}

function checkpointThree() {
  var selectedCheckpoint = {
    name: checkpoint[2].name,
    image: checkpoint[2].image,
    fact: checkpoint[2].fact,
    option: checkpoint[2].option,
    statement: checkpoint[2].statement,
    result: checkpoint[2].result,
    multiplier: checkpoint[2].multiplier
  };
  console.log(selectedCheckpoint);
  return selectedCheckpoint;
}
