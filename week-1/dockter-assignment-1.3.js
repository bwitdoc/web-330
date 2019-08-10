/*
============================================
; Title:  Exercise 1.3
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

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

function CellPhone(manufacturer, model, color, price)
{
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;
// get price
this.getPrice = function()
    {
    return this.price;
    }

this.getModel = function()
    {
    return this.model;
    }

this.getDetails = function()
    {
    return "Manufacturer: " + this.manufacturer + "\n" + "Model: " + this.getModel() +
    "\n" + "Color: " + this.color + "\n" + "Price: " + this.getPrice();
    }
}
var cellPhone = new CellPhone("Apple", "iPhone X", "White", "$399.99");
console.log("")
console.log("-- DISPLAYING CELL PHONE DETAILS --")
console.log(cellPhone.getDetails());



// end program