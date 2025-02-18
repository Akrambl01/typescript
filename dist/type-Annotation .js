"use strict";
// variables :
let age = 20;
let username = "akram";
let isStudent = true;
// let allVars; // Any
// objects :
let person = {
    username: "Akram",
    age: 20,
};
/*
  Type Annotations With Arrays
*/
let allVars = "akram";
allVars = "A";
allVars = 100;
allVars = true;
let myFriends = ["akram", "user", "noone"];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
/*
  Type Annotations With Multidimensional Arrays
*/
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["A", "B", "C"];
let arrayThree = [1, 2, 3, 4, "A", "B", "C"];
let arrayFour = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];
/*
  Type Annotations With Functions

  - noImplicitAny
    --- Will Report Error If There Is No Type Annotation For Function Parameters

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
    }
    return `No Data To Show`;
}
console.log(showDetails("akram", 40, 5000));
/*
  Type Annotations With Object
*/
let myObject = {
    username: "akrambl01",
    id: 100,
    hire: true,
    skills: {
        one: "js",
        two: "ts"
    }
};
// myObject.username = "akram";
myObject.id = 101;
myObject.hire = false;
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
