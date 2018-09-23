var data = require("../data/data.js");

function randomEvent () {
    var event = data.event[Math.floor(Math.random()*data.event.length)];

    var selectedEvent = {
        name: event.name,
        image: event.image,
        fact: event.fact,
        option: event.option,
        result: event.result,
        multiplier: event.multiplier
    }
    console.log(selectedEvent);
    return selectedEvent
}

module.exports = {
    randomEvent: randomEvent()
}