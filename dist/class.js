"use strict";
/*
  Type Annotations With Class
*/
class User1 {
    constructor(username, salary) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return `Hello ${this.u} Your Salary Is ${this.s}`;
        };
    }
    sayMsg() {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
}
let uOne = new User1("akram", 6000);
console.log(uOne.u);
console.log(uOne.s);
console.log(uOne.msg());
console.log(uOne.sayMsg());
/*
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/
class UserTwo {
    constructor(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Hello ${this.username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}
let uTwo = new UserTwo("akram", 6000, "casa");
// console.log(uTwo.username);
// console.log(uTwo.salary);
console.log(uTwo.msg());
console.log(uTwo.sayMsg());
/*
  - Get And Set Accessors
*/
class User3 {
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    constructor(_username, salary, address) {
        this._username = _username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return `Hello ${this._username} Your Salary Is ${this.salary}`;
        };
    }
    sayMsg() {
        return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
}
let user = new User3("akram", 8000, "Cairo");
console.log(user.username);
user.username = "ali";
console.log(user.username);
console.log(user.salary);
console.log(user.msg());
console.log(user.sayMsg());
/*
  - Static Members
  the static keyword is used to define static methods and properties within a class.
  Static methods and properties are associated with the class itself
  rather than with instances of the class. This means you can call a static method
  or access a static property directly on the class, without needing to create
  an instance.

  --- Don't Use "name, length, call"
*/
class User4 {
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    constructor(username) {
        this.username = username;
        User4.created++;
    }
}
User4.created = 0;
let u1 = new User4("akram");
let u2 = new User4("user");
let u3 = new User4("test");
// console.log(User.created);
User4.getCount();
class User5 {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log(`Saved`);
    }
    update() {
        console.log(`Updated`);
    }
}
let userOne = new User5("akram", true, "Open Sans");
console.log(userOne.username);
console.log(userOne.font);
userOne.save();
userOne.update();
/*
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Time For Pizza Is 1 Hour`);
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Time For Burger Is Half Hour`);
    }
}
let pizzaOne = new Pizza("Awesome Pizza", 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
/*
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride : you must write override before override method
*/
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attacking Now");
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        // super.attack();
        console.log("Attacking With Spear");
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        // super.attack();
        console.log("Attacking With Axe");
        this.axeDurability -= 1;
    }
}
let barOne = new Barbarian("user", 100);
console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);
