DROP DATABASE IF EXISTS mars_db;
CREATE DATABASE mars_db;
USE mars_db;

CREATE TABLE missions
(
	id INT NOT NULL AUTO_INCREMENT,
	missionName varchar(50) NOT NULL,
    astronautOne varchar(50) NOT NULL,
    astronautTwo varchar(50) NOT NULL,
    astronautThree varchar(50) NOT NULL,
    astronautFour varchar(50) NOT NULL,
    daysTravelled INT,
    distance INT,
    oxygen INT,
    fuel INT,
	PRIMARY KEY (id)
);

CREATE TABLE losers
(
	id INT NOT NULL AUTO_INCREMENT,
	missionName varchar(50) NOT NULL,
    astronautsAlive INT,
    daysTravelled INT,
    victoryMessage varchar(50) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE winners
(
	id INT NOT NULL AUTO_INCREMENT,
	missionName varchar(50) NOT NULL,
    daysTravelled INT,
    distance INT,
    epitaph varchar(50) NOT NULL,
	PRIMARY KEY (id)
);