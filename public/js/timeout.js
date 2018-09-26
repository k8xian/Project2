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

// resources
var oxygen = 100;
var fuel = 100;

function resourceGain() {
    oxygen = oxygen + 10;
    fuel = fuel + 10;
}

function resourceLoss() {
    oxygen = oxygen - 10;
    fuel = fuel - 10;
}

// speeds --- original fast speed is 58,000 and original slow is 29,000. The following values represent double speeds
var fast = 14500;
var slow = 11600;

// rounded distances to make neat divisibilities with speed
var moonDistance = 348000;
var midpointDistance = 29000000;
var deimosDistance = 46400000;

var distanceAway = 348000;

// speed selection - initally fast
// === BUTTONS NOT WORKING AS INTENDED ===//
var speedSelected = fast;
// $('#switch_right').click(function() {
//     speedSelected = fast;
//     console.log(speedSelected);
// })

// $('#switch_left').click(function() {
//     speedSelected = slow;
//     console.log(speedSelected);
// })

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
  distanceAway = distanceAway - fast;
  $("#toCheckpoint").text(distanceAway);

  if ((speedSelected = fast)) {
    distance = (distance % final) + fast;
    $("#travelled").text(distance);
    $("#progress").width((distance / 58000000) * 250);
    // switch case for distance variable
    switch (true) {
    case distance === moonDistance:
      clearInterval();
      checkpointOne();
      break;
    case distance === midpointDistance:
      clearInterval();
      checkpointTwo();
      $(".checkpointOne").hide();
      $(".checkpointTwo").show();
      break;
    case distance === deimosDistance:
      clearInterval();
      checkpointThree();
      $(".checkpointTwo").hide();
      $(".checkpointThree").show();
      break;
    case distance === final:
      clearInterval();
      winningScreen();
      break;
      // case ((eventTimer % 60) === 0):
      //   clearInterval();
      //   randomEvent();
      //   eventTimer = 0;
      //   break;
    }
  } else {
    switch (true) {
        case distance === moonDistance:
          clearInterval();
          checkpointOne();
          break;
        case distance === midpointDistance:
          clearInterval();
          checkpointTwo();
          $(".checkpointOne").hide();
          $(".checkpointTwo").show();
          break;
        case distance === deimosDistance:
          clearInterval();
          checkpointThree();
          $(".checkpointTwo").hide();
          $(".checkpointThree").show();
          break;
        case distance === final:
          clearInterval();
          winningScreen();
          break;
          // case ((eventTimer % 60) === 0):
          //   clearInterval();
          //   randomEvent();
          //   eventTimer = 0;
          //   break;
        }
  }

  // After the distance check, this function will then check if it's time for a random event
    if (eventTimer % 60 === 0) {
      console.log("random event was triggered");
      clearInterval();
      randomEvent();
    }

  if (dayIncrements % 12 === 0) {
    days++;
    sols = days * 1.0114;
    $("#earthDays").text(days);
    $("#marsDays").text(sols.toFixed(2));
    oxygen = oxygen - 2;
    fuel = fuel - 2;
    $("#oxygen").text(oxygen);
    $("#fuel").text(fuel);

    if (oxygen === 0 || fuel === 0) {
      console.log("Game Over");
    }
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
      "Your ship has been hit by a hunk of flying space junk! Your sensor array has become inoperable. You must quickly do one of the following:",
    option: {
      optionA:
        "You send one of your crew to perform a spacewalk and fix the array. This is the best option to repair the sensor array but you risk losing an astronaut.",
      optionB:
        "You send the rocket-fuel-powered robot to fix the array, but there is only a 50% chance of it being repaired and the robot consumes the fuel.",
      optionC:
        "You send both a crew memeber and the robot to ensure the repair because you're a baby boomer and you don't trust technology--oh the irony right now."
    },
    result: {
      resultA: "Success you have repaired the sensor array! Turns out, the hit gave you a bit of momentum towards mars, you can save some fuel and oxygen.",
      resultB:
        "The robot was unable to repair the sensor and because it too so long, 10% of your fuel was burned. You had to send an astronaut, who made the repair, but you lost one day",
      resultC:
        "The array is repaired, but the robot misfired a truster. It shot itself and the astronaut into the void of space. You were right not to trust technology."
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
    statement: "All systems nominal. Or so you think. The emptiness of space has caused insanity to grow among the crew. You see an existential crisis about to erupt, how should you respond?",
    option: {
      optionA: "Shout,'its game night!' and gather the crew around for hours of dungeons and dragons fun.",
      optionB: "Stop all operations to enjoy a feast. It may use up resources, but at least all your problems will temporarily go away with some not-a-lie cake",
      optionC: "Continue staring at the unrest..."
    },
    result: {
      resultA: "Hours of roleplaying has resulted in a total wipe of your DnD party, but hey, it was a good run and you had forgetten you were falling through a void of emptiness.",
      resultB: "The feast was a success. Everyone is relaxed, full, and unregretably satisfied with all that cake. It was worth the loss of resources.",
      resultC: "One of your crew members breaks, succumbing to the insanity. Their first reaction is to launch out of the air lock. Maybe it was best for everyone."
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
    fact: "You need a straw to drink liquids in space!",
    statement:
      "While trying to scratch her nose, one of the crew floated into the coffee machine--HARD! sending coffee flying onto the nav computer.",
    option: {
      optionA: "Gently pat the nav computer with a space rag, don't rub. You've been yelled at your mother long enough to know, never rub a spill.",
      optionB: "'Nav computer?! I don't take directions from a metal box!'",
      optionC: "Fly blind until the coffee dries and the computer reboots."
    },
    result: {
      resultA: "The the computer was repaired. You gain resources for listening to your mother.",
      resultB:
        "After bashing the nav computer for a bit, you wonder why you're acting like a barbarian. That deserves a loss of resources.",
      resultC:
        "After flying blindly for a few days, your ship orbits into an extra-dimensional Aztec space god. You're forced to sacrifice a crew member. Who would have thought the Aztecs were right this whole time."
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
      optionA: "Send a robot out to mine asteroids for much needed resources.",
      optionB: "Absolutely refuse to even look at a single asteroid.",
      optionC:
        "Hand a pickaxe to a member of your crew, forcing them to start mining for resources."
    },
    result: {
      resultA: "Oxygen and fuel has been gained! We live to see another random event",
      resultB: "Why wouldn't you choose to gain resources, idiot. You've only wasted resources from that decision.",
      resultC: "Well, that was definitely one of your worst decisions. The astronaut collided into an asteroid at tremendous speeds. Remember, its not the hit that kills you, its the accerlation change."
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
      "One of the crew has been having chest pains and have been placed in the medical pod. Exams results show that the astronaut has an alien growing inside. You must choose from the following:",
    option: {
      optionA: "Perform a host transfer to a lab rat.",
      optionB: "Attempt surgery with a robot",
      optionC: "You've seen the movie 'Alien' plenty of times, so you don't want to risk these symptoms. Throw them out the airlock."
    },
    result: {
      resultA:
        "Succees! You manage to coax out the alien and transfer it to the rat. The rat was then injected from the airlock. You'll be remembered lab rat 1101001-CB. That's one less mouth to feed.",
      resultB:
        "Surgery is successful! The alien has been removed and burned in an incinerator four times over. However, the procedure expended resources.",
      resultC:
        "A struggle breaks out, but you manage to shoot the host out of the airlock. Hopefully that body doesn't end up on earth."
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
      "You encountered an asteroid field. Choose how you want to navigate it. I thought this was between Mars and Jupiter.",
    option: {
      optionA: "Go through the field, but risk damange or outright destruction.",
      optionB:
        "Go around the field. That's going to cost time and resources.",
      optionC: "Panic and call NASA for help."
    },
    result: {
      resultA:
        "Congratulations, you successfull navigated the field and even picked up some resources along the way. Great job!",
      resultB:
        "You managed to navigate around the field without damages. It was a good call, but you lost resources because of the wasted time.",
      resultC:
        "After waiting for NASA to respond, one of the astronauts gets impatient. Resulting in a spacewalk for a better view of the field. That was a terrbile idea, the astronaut forgot a tether. Bye bye astronaut."
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
      "You have arrived at the Moon, the first stop on a long voyage. You get a signal from the dark side of the moon. What do you do?",
    option: {
      optionA: "You go and investigate and land on the dark side of the moon.",
      optionB:
        "You freak and say, 'there's nobody on the Moon, f- that noise, I am out!'",
      optionC:
        "You radio back to NASA and explain there is some strange signal coming from the dark side of the Moon, and ask what to do."
    },
    result: {
      resultA:
        "You land on the dark side of the Moon and are greeted by Moon Men who are friendly and give you provisions; resupplying your oxygen and fuel. ",
      resultB: "You continue on your current course and never look back. Bye Felicia.",
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
      "'Nobody can prove that there is NOT a china teapot revolving in an elliptical orbit between the Earth and Mars, but nobody thinks this sufficiently likely to be taken into account in practice.'-Bertrand Russell Congratlations! You have reached the halfway point between Earth and Mars, an amazing feat unto itself.",
    statement:
      "You encoutner a glowing green orb that is approaching your ship! Without much time to react you have to choose to do one of the following:",
    option: {
      optionA:
        "Not wanting to take a risk, you turn your ship to avoid the glowing orb.",
      optionB:
        "Thinking that your experience at the Moon was positive, you decide to engage the orb.",
      optionC: "You reverse thrust!"
    },
    result: {
      resultA:
        "While you succeed in navigating the ship around the orb, the high amount of energy coming from the orb causes EM radiation damage to your oxygen tanks and you have lost some of your supply.",
      resultB:
        "As you engage the orb, high amounts of energy surround and penetrate the ship, causing you to lose consciousness... After coming to, you find that you survived your encoutner with the orb, but your crew has not, they have all turned into skeletons! Good luck.",
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
      "Deimos's orbit is slowly getting larger, because it is far enough away from Mars and because of tidal acceleration. It is expected to eventually escape Mars's gravity. Mars is glowing a fiery red in the distance as you touch down on Deimos to plan a final approach to Mars and gather sand off the surface, which will be used as a braking dust to create a denser atmosphere in front of the ship as your enter Mars. ",
    statement:
      "While gathering the sand you encounter a large hole which appears to be an interdimentional portal to, you guessed it, HELL! Demons start coming out of the portal and turn their attention towards you; what do you do?",
    option: {
      optionA: "You drop the sand and run like hell back to the ship.",
      optionB:
        "You hold on to the sand, which slows you down, and hightail it back to the ship.",
      optionC: "You go rambo on their asses and start hurling rocks at them."
    },
    result: {
      resultA:
        "You arrive but your crew has been devoured by demons and you took a few fireballs to the butt. You really don't need that sand anyways.",
      resultB:
        "The demons are gaining on you as your crew dashes ahead. They dropped their sand, and you decide to do it, too. You take a few fireballs to the butt, but get back to the ship and get off that rock.",
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

  // unbind events
  optionA.unbind("click");
  optionB.unbind("click");
  optionC.unbind("click");

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
  factsContainer.show();
  optionsContainer.show();

  facts.text(selectedEvent.fact);
  statement.text(selectedEvent.statement);
  optionA.text(selectedEvent.option.optionA);
  optionB.text(selectedEvent.option.optionB);
  optionC.text(selectedEvent.option.optionC);

  optionA.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedEvent.result.resultA);
    resourceGain();
    interval = setInterval(increment, 1000);
  });

  optionB.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedEvent.result.resultB);
    resourceLoss();
    interval = setInterval(increment, 1000);
  });

  optionC.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedEvent.result.resultC);
    interval = setInterval(increment, 1000);
    killAstronaut();
  });
}

function checkpointOne() {
 // unbind events
 optionA.unbind("click");
 optionB.unbind("click");
 optionC.unbind("click");

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
  statement.text(selectedCheckpoint.statement);
  optionA.text(selectedCheckpoint.option.optionA);
  optionB.text(selectedCheckpoint.option.optionB);
  optionC.text(selectedCheckpoint.option.optionC);

  optionA.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedCheckpoint.result.resultA);
    fast = 116000;
    slow = 58000;
    resourceGain();
    interval = setInterval(increment, 1000);
  });

  optionB.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedCheckpoint.result.resultB);
    fast = 116000;
    slow = 58000;
    interval = setInterval(increment, 1000);
  });

  optionC.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedCheckpoint.result.resultC);
    fast = 116000;
    slow = 58000;
    interval = setInterval(increment, 1000);
    losingScreen();
  });

  console.log(selectedCheckpoint);
  //temporary fix to speedSelected bug - assigned it again to fast
  //speedSelected = fast;
  distanceAway = 28652000;
}

function checkpointTwo() {

 // unbind events
 optionA.unbind("click");
 optionB.unbind("click");
 optionC.unbind("click");

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
  factsContainer.show();
  optionsContainer.show();

  facts.text(selectedCheckpoint.fact);
  statement.text(selectedCheckpoint.statement);
  optionA.text(selectedCheckpoint.option.optionA);
  optionB.text(selectedCheckpoint.option.optionB);
  optionC.text(selectedCheckpoint.option.optionC);

  optionA.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedCheckpoint.result.resultA);
    interval = setInterval(increment, 1000);
    resourceLoss();
  });

  optionB.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedCheckpoint.result.resultB);
    interval = setInterval(increment, 1000);
    killAstronaut();
    killAstronaut();
    killAstronaut();
  });

  optionC.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    days = days + 5;
    result.text(selectedCheckpoint.result.resultC);
    interval = setInterval(increment, 1000);
  });

  distanceAway = 17400000;
  console.log(selectedCheckpoint);
}

function checkpointThree() {
 // unbind events
 optionA.unbind("click");
 optionB.unbind("click");
 optionC.unbind("click");

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
  clearInterval();
  factsContainer.show();
  optionsContainer.show();

  facts.text(selectedCheckpoint.fact);
  statement.text(selectedCheckpoint.statement);
  optionA.text(selectedCheckpoint.option.optionA);
  optionB.text(selectedCheckpoint.option.optionB);
  optionC.text(selectedCheckpoint.option.optionC);

  optionA.click(function() {
    factsContainer.hide();
    optionsContainer.hide();
    result.text(selectedCheckpoint.result.resultA);
    interval = setInterval(increment, 1000);
    killAstronaut();
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
    losingScreen();
  });

  distanceAway = 11600000;
  console.log(selectedCheckpoint);
}
