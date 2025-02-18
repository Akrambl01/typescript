"use strict";
/*
  - Type Assertions
  --- Sometime Compiler doesn't Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/
// let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = document.getElementById("my-img");
console.log(myImg.src);
let data = 1000;
console.log(data.repeat(3));
