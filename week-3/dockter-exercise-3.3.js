/*
============================================
; Title:  Exercise 3.3
; Author: Brittany Dockter 
; Date:   24 August 2019
; Modified by: Brittany Dockter
; Description: Understanding the Singleton Pattern
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

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function databaseSingletonTest()
{
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    console.log("Same database instance?", oracle === postgres);
}

console.log("");
databaseSingletonTest();

// end program