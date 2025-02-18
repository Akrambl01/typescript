/*
  Type Annotations With Class
*/

class User1 {
    u: string;
    s: number;
    msg: () => string;
    constructor(username: string, salary: number) {
      this.u = username;
      this.s = salary;
      this.msg = function () {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
      }
    }
    sayMsg() {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }
  
  let userOne = new User1("akram", 6000);
  
  console.log(userOne.u);
  console.log(userOne.s);
  console.log(userOne.msg());
  console.log(userOne.sayMsg());
  
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
  
  class User {
    msg: () => string;
    constructor(private username: string, protected salary: number,public readonly address: string) {
      this.msg = function () {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
      }
    }
    sayMsg() {
      return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
  }
  
  let userOne = new User2("akram", 6000, "casa");
  
  // console.log(userOne.username);
  // console.log(userOne.salary);
  console.log(userOne.msg());
  console.log(userOne.sayMsg());
  
  /*
    - Get And Set Accessors
  */
  
  class User {
    public get username(): string {
      return this._username;
    }
    public set username(value: string) {
      this._username = value;
    }
    msg: () => string;
    constructor(private _username: string, public salary: number, public readonly address: string) {
      this.msg = function () {
        return `Hello ${this._username} Your Salary Is ${this.salary}`;
      }
    }
    sayMsg() {
      return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
    // get username() : string {
    //   return this._username;
    // }
    // set username(value: string) {
    //   this._username = value;
    // }
  }
  
  let userOne = new User3("akram", 8000, "Cairo");
  
  console.log(userOne.username);
  userOne.username = "ali";
  console.log(userOne.username);
  console.log(userOne.salary);
  console.log(userOne.msg());
  console.log(userOne.sayMsg());
  
  /*
    - Static Members
    the static keyword is used to define static methods and properties within a class. 
    Static methods and properties are associated with the class itself 
    rather than with instances of the class. This means you can call a static method 
    or access a static property directly on the class, without needing to create 
    an instance.
  
    --- Don't Use "name, length, call"
  */
  
  class User {
    private static created: number = 0;
    static getCount() : void {
      console.log(`${this.created} Objects Created`);
    }
    constructor(public username: string) {
      User.created++;
    }
  }
  
  let u1 = new User4("akram");
  let u2 = new User4("user");
  let u3 = new User4("test");
  // console.log(User.created);
  User.getCount();
  
  /*
    - Implement Interface
  */
  
  interface Settings {
    theme: boolean;
    font: string;
    save(): void;
  }
  
  class User5 implements Settings {
    constructor(public username: string, public theme: boolean, public font: string) {}
    save(): void {
      console.log(`Saved`);
    }
    update(): void {
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
  
  abstract class Food {
    constructor(public title: string) {}
    abstract getCookingTime() : void;
  }
  
  class Pizza extends Food {
    constructor(title: string, public price: number) {
      super(title);
    }
    getCookingTime() : void {
      console.log(`Cooking Time For Pizza Is 1 Hour`);
    }
  }
  
  class Burger extends Food {
    constructor(title: string, public price: number) {
      super(title);
    }
    getCookingTime() : void {
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
      constructor(public name: string) {}
      attack() : void {
        console.log("Attacking Now");
      }
    }
    
    class Amazon extends Player {
      constructor(name: string, public spears: number) {
        super(name);
      }
      override attack(): void {
        // super.attack();
        console.log("Attacking With Spear");
        this.spears -= 1;
      }
    }
    
    class Barbarian extends Player {
      constructor(name: string, public axeDurability: number) {
        super(name);
      }
      override attack(): void {
        // super.attack();
        console.log("Attacking With Axe");
        this.axeDurability -= 1;
      }
    }
    
    let barOne = new Barbarian("user", 100);
    
    console.log(barOne.name);
    barOne.attack();
    console.log(barOne.axeDurability);