"use strict";
/*
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/
function returnNumber(val) {
    return val;
}
function returnString(val) {
    return val;
}
function returnBoolean(val) {
    return val;
}
console.log(returnNumber(100));
console.log(returnString("abcd"));
console.log(returnBoolean(true));
// function returnType<T>(val: T) : T {
//   return val;
// }
// console.log(returnType<number>(100));
// console.log(returnType<string>("abddd"));
// console.log(returnType<boolean>(true));
// console.log(returnType<number[]>([1, 2, 3, 4]));
/*
  - Arrow Function
  - Multiple Types
  - Discussion
*/
function returnType(val) {
    return val;
}
console.log(returnType(100));
console.log(returnType("akram"));
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("noone"));
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType(100));
console.log(testType("akram"));
function multipleTypes(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
console.log(multipleTypes("user", 100));
console.log(multipleTypes("akram", true));
/*
  Generics
  - Classes
*/
class GenericUser {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let genericUserOne = new GenericUser("akram");
console.log(genericUserOne.value);
genericUserOne.show("Message");
let userTwo = new GenericUser(100);
console.log(userTwo.value);
userTwo.show("Message");
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
