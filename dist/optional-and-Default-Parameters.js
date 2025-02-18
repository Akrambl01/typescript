"use strict";
/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/
function showData(name, age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData("akram", 21, "morocco"));
