// This class represents all that is common between Student and Mentor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }

  greeting() {
    return `Hi, my name is ${this.name}. Nice to meet you!`;
  }
}




class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

let james = new Student('James', ' I like gaming', 'james@email.com ');
console.log(james.email);
console.log(james.greeting());
console.log(james.bio());

let bob = new Mentor("Bob", "I like fishing", 'bobs@email.com');
console.log(bob.email);
console.log(bob.bio());
console.log(bob.greeting());