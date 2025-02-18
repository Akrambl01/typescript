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

function returnNumber(val: number) : number {
    return val;
  }
  function returnString(val: string) : string {
    return val;
  }
  function returnBoolean(val: boolean) : boolean {
    return val;
  }
  
  console.log(returnNumber(100));
  console.log(returnString("abcd"));
  console.log(returnBoolean(true));
  
  function returnType<T>(val: T) : T {
    return val;
  }
  
  console.log(returnType<number>(100));
  console.log(returnType<string>("abddd"));
  console.log(returnType<boolean>(true));
  console.log(returnType<number[]>([1, 2, 3, 4]));
  
  
  /*
    - Arrow Function
    - Multiple Types
    - Discussion
  */
  
  function returnType<T>(val: T): T {
    return val;
  }
  
  console.log(returnType<number>(100));
  console.log(returnType<string>("akram"));
  
  const returnTypeArrowSyntax = <T>(val: T): T => val;
  
  console.log(returnTypeArrowSyntax<number>(100));
  console.log(returnTypeArrowSyntax<string>("noone"));
  
  function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
  }
  
  console.log(testType<number>(100));
  console.log(testType<string>("akram"));
  
  function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
  }
  
  console.log(multipleTypes<string, number>("user", 100));
  console.log(multipleTypes<string, boolean>("akram", true));
  
  /*
    Generics
    - Classes
  */
  
  class User<T = string> {
    constructor(public value: T) {}
    show(msg: T) : void {
      console.log(`${msg} - ${this.value}`);
    }
  }
  
  let userOne = new User<string>("akram");
  console.log(userOne.value);
  userOne.show("Message");
  
  let userTwo = new User<number | string>(100);
  console.log(userTwo.value);
  userTwo.show("Message");
  
  /*
    Generics
    - Classes And Interfaces
  */
  
  interface Book {
    itemType: string;
    title: string;
    isbn: number;
  }
  
  interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
  }
  
  class Collection<T> {
    public data: T[] = [];
    add(item: T) : void {
      this.data.push(item);
    }
  }
  
  let itemOne = new Collection<Book>();
  itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
  itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
  console.log(itemOne);
  
  let itemTwo = new Collection<Game>();
  itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
  console.log(itemTwo);