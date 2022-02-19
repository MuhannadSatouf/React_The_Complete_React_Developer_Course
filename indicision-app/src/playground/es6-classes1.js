class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi Iam ${this.name}! and My age: ${this.age}`;
  }

  getDescription(name = "anonymous", age) {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` and te major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.homeLocation) {
      description += ` I am visiting from ${this.homeLocation}`;
    }
    return description;
  }
}

const me = new Traveler("Muhannad", 32, "KRISTIANSTAD");
console.log(me.getDescription());

const him = new Student();
console.log(him.getDescription());
