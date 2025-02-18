"use strict";
/*
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/
let user1 = {
    id: 100,
    username: "akram",
    country: "morocco"
};
user1.country = "japan";
console.log(user1);
function getData(data) {
    console.log(`Id Is ${data.id}`);
    console.log(`Username Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
}
getData({ id: 200, username: "ali", country: "fr" });
let user2 = {
    id: 100,
    username: "akrambl01",
    country: "mar",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user2.username}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
console.log(user2.id);
console.log(user2.sayHello());
console.log(user2.sayWelcome());
console.log(user2.getDouble(100));
let pageSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
};
let user3 = {
    id: 100,
    username: "akram",
    country: "mar",
    role: "Mod",
    protect: true
};
console.log(user.id);
/*
  - Interface vs Type Aliases
  - Take A Look On HTMLElement Interface
*/
let el = document.getElementById("id");
let userSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
};
