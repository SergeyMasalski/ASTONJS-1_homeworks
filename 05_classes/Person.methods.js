//First method

// function Person(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
// }

// Person.prototype.getInfo = function () {
//   return `Name Person is ${this.name} and lastName is ${this.lastName}`;
// };

// Person.logInfo = function () {
//   console.log('This is static method');
// };

// function AnotherPerson(name, lastName, city) {
//   Person.call(this, name, lastName);
//   this.city = city;
// }

// AnotherPerson.prototype = Object.create(Person.prototype);
// AnotherPerson.prototype.constructor = AnotherPerson;

// AnotherPerson.prototype.getFullInfo = function () {
//   return `${this.getInfo()}, and person's city is ${this.city}`;
// };

// Second method

class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  getInfo() {
    return `Name Person is ${this.naAnotherPersonme} and lastName is ${this.lastName}`;
  }
}

class AnotherPerson extends Person {
  constructor(name, lastName, city) {
    super(name, lastName);
    this.city = city;
  }

  getFullInfo() {
    return `${super.getInfo} and person's city is ${this.city}`;
  }

  static logInfo() {
    console.log('This is static method');
  }
}
