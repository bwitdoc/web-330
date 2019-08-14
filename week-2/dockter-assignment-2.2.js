/*
============================================
; Title:  Exercise 2.2
; Author: Brittany Dockter 
; Date:   14 August 2019
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

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

var person = 
{
    getAge: function() {
        return this.getAge;
    }
};

var brittany = Object.create(person, {
    "age": 
    {
        "value": "22"
    },
        "fullname":
        {
            "value": "Brittany Dockter"
        }
    }
);

brittany.getAge();

// Output

console.log("");
console.log("The person's full name is '%s'", brittany.fullname);
console.log("The person's age is '%s'", brittany.age);

// end program