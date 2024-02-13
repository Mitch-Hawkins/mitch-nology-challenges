// Two ways of describing types in TS

// person firstName, lastName, age

// type

// type Person = {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// const me: Person = {
//     firstName: "Martyna",
//     lastName: "Krol",
//     age: 28,
// }

// inteface
// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// const printName = (person: Person) => {
//   console.log("Hello " + person.firstName);
// };

interface Greetable {
  getName(): string;
}

class Person implements Greetable {
  //   private firstName: string;
  //   private lastName: string;
  //   private age: number;

  //   constructor(firstName: string, lastName: string, age: number) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.age = age;
  //   }

  constructor(
    private firstName: string,
    private lastName: string,
    private age: number
  ) {} // Short Hand Constructor

  getName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const me = new Person("Martyna", "Krol", 28);

class Pet implements Greetable {
  constructor(public name: string, public animalType: string) {}

  getName(): string {
    return this.name;
  }
}

const myDog = new Pet("Rocky", "Dog");

const greet = (obj: Greetable) => {
  console.log("Hello " + obj.getName());
};
