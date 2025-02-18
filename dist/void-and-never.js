"use strict";
/*
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Iam A Message"));
console.log("Test");
const fail = (msg) => {
    throw new Error(msg);
    // return 10;
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
alwaysLog("akram");
// console.log("Test");
