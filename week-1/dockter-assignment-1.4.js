/*
============================================
; Title:  Exercise 1.4
; Author: Brittany Dockter 
; Date:   10 August 2019
; Modified by: Brittany Dockter
; Description: 
;===========================================
*/

// Begin Header
var header = require('C:/Users/Brittany/Documents/bu-webdev/web-340/GitHub Files/Dockter-header-test.js');
// End Header

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

function Car(model)
{
    this.model = model;
}

Car.prototype.start = function() {
    console.log("Car added to the racetrack!");
}

function Truck(model, year) 
{
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function() {
    console.log("Truck added to the racetrack!");
}

function Jeep(model, year, color)
{
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function() {
    console.log("Jeep added to the racetrack!");
}

var racetrack = [];

function driveIt(vehicle) 
{
    vehicle.start();

    racetrack.push(vehicle);
}

var celica = new Car("Celica");
var fordF150 = new Truck("F150", "2018");
var wrangler = new Jeep("Wrangler", "2016", "White");


// Output
console.log("");

driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);
console.log("");

console.log("-- The following vehicles have been added to the racetrack --");
for (var x = 0; x < racetrack.length; x++)
{
    console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
};


// end program