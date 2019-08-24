/*
============================================
; Title:  Exercise 3.2
; Author: Brittany Dockter 
; Date:   24 August 2019
; Modified by: Brittany Dockter
; Description: Using Factory Patterns
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

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle(properties) {
    this.username = properties.username || 'admin';
    this.password = properties.password || 'o=s3cret';
    this.server = properties.server || 'localhost:5454';
    this.version = properties.version || '10g';
}

function Informix(properties) {
    this.username = properties.username || 'admin';
    this.password = properties.password || 'in-s3cret';
    this.server = properties.server || 'localhost:3030';
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === 'MySQL') {
        this.databaseClass = MySql;
    }

    if (properties.databaseType === 'Oracle') {
        this.databaseClass = Oracle;
    }

    if (properties.databaseType === 'Informix') {
        this.databaseClass = Informix;
    }
    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "<username>",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "<username>",
    password: "<password>",
    server: "<server>",
    version: "<version"
});

var informixFactory = new DatabaseFactory;
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "<username>",
    password: "<password>",
    server: "<server>"
});

// Output

console.log("");
console.log(oracle);
console.log(informix);

// end program