# Martian Odyssey

**Collaborators:** 
[Kate Christian](https://github.com/k8xian) - 
[John Cirone](https://github.com/Ciwonie) - 
[Eric Eissler](https://github.com/eeissler83)

**Deployment Link:** https://martianodyssey.herokuapp.com

**For Northwestern University's Full Stack Flex Coding Bootcamp**

* This web-app is an homage to the 1997 game Oregon Trail, but set in space on a mission to Mars

##

### Interface / Development
* [Initial screen](https://martianodyssey.herokuapp.com/) gives you four options, to
    * [Add a New Mission](https://martianodyssey.herokuapp.com/mission)
        * When you add a mission this takes you to the [gameplay](https://martianodyssey.herokuapp.com/play/6) screen
    * [Choose from a List of Current Missions](https://martianodyssey.herokuapp.com/current_missions)
        * Takes you to [gameplay](https://martianodyssey.herokuapp.com/play/6) for that mission
    * [View Successful Missions](https://martianodyssey.herokuapp.com/successful_missions)
    * [View Failed Missions](https://martianodyssey.herokuapp.com/failed_missions)
* On the play screen, you will experience random events and three checkpoints on the mission to Mars
* Your Oxygen, Fuel, and Astronauts can all deplete (or die)-  if you lose any of the three, you die
* If you win, you will be directed to the [winning screen](https://martianodyssey.herokuapp.com/win/6), where you can input a victory message
* If you lose, you will be directed to the [losing screen](https://martianodyssey.herokuapp.com/loss/6) where you can input your epitaph
* These screens redirect to the [Successful Missions](https://martianodyssey.herokuapp.com/successful_missions) page and [Failed Missions](https://martianodyssey.herokuapp.com/failed_missions)page respectively
* The math is based on the actual distances to Mars and the fastest an object from earth has ever travelled, and scaled to gameplay

##

### Challenges
* Deploying to Heroku with JawsDB with Sequelize from the base code we were given for this assignment lead to needing to rewrite the Sequelize code with custom ORMs
* Getting the timing function to work with resource depletion and timing functions

##

### Upcoming Features
* Saving state of current mission
* More complex css animations
* Integration of astroids minigame for resource renewal
* Sounds