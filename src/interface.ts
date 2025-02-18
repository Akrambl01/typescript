/*
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

interface User {
    id: number | undefined,
    readonly username: string,
    country: string
  }
  
  let user1: User = {
    id: 100,
    username: "akram",
    country: "morocco",
    sayHello() {
      return `Hello ${this.username}`;
    },
    sayWelcome() {
      return `Welcome ${this.username}`;
    },
    getDouble(n) {
      return n * 2;
    }
  }
  
  user1.country = "japan";
  
  console.log(user1);
  
  function getData(data: User) {
    console.log(`Id Is ${data.id}`);
    console.log(`Username Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
  }
  
  getData({
    id: 200,
    username: "ali",
    country: "fr",
    sayHello() {
      return `Hello ${this.username}`;
    },
    sayWelcome() {
      return `Welcome ${this.username}`;
    },
    getDouble(n) {
      return n * 2;
    }
  });
  
  /*
    - Interface Method And Parameters
  */
  
  interface User {
      id: number | undefined;
      readonly username: string;
      country: string;
      sayHello() : string;
      sayWelcome: () => string;
      getDouble(num: number) : number;
    }
  
  let user2: User = {
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
  }
  
  console.log(user2.id);
  console.log(user2.sayHello());
  console.log(user2.sayWelcome());
  console.log(user2.getDouble(100));
  
  /*
    - ReOpen The Interface And Use Cases
  */
  
  // Homepage
  interface PageSettings {
    readonly theme: boolean;
    font: string;
    sidebar: boolean;
    external: boolean;
  }
  
  let pageSettings: PageSettings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
  }
  
  /*
    - Extending Interfaces
  */
  
  interface User {
      id: number | undefined;
      readonly username: string;
      country: string;
    }
  
  interface Moderator {
    role: string | number;
  }
  
  interface Admin extends User,Moderator {
    protect?: boolean;
  }
  
  let user3: Admin = {
    id: 100,
    username: "akram",
    country: "mar",
    role: "Mod",
    protect: true,
    sayHello() {
      return `Hello ${this.username}`;
    },
    sayWelcome() {
      return `Welcome ${this.username}`;
    },
    getDouble(n: number) {
      return n * 2;
    }
  }
  
  console.log(user3.id);
  
  
  /*
    - Interface vs Type Aliases
    - Take A Look On HTMLElement Interface
  */
  
  let el = document.getElementById("id") as HTMLElement;
  
  // Homepage
  type Settings = {
    readonly theme: boolean;
    font: string;
    sidebar: boolean;
    external: boolean;
  }
  
  let userSettings: Settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
  }