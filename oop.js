
// // let pizza1 = new Pizza();
// // let pizza2 = new Pizza();

// // pizza1 === pizza2; // false

// class Pizza {

//   constructor(size, crust) {
//     this.size = size;
//     this.crust = crust;
//     this.toppings = ["cheese"];
//     this.sauce = ["garlic"];
//     this.seasoning = ["italian"];
//   }

//   addTopping(topping) {
//     this.toppings.push(topping);
//   }


// }

// // adding a method to a class using the followinf syntax
// // class SomeClass {
// //   methodName(parameters) {
// //     // this is a method
// //   }
// // }

// //adding properties to a class using the this. keyword
// // class SomeClass {
// //   someMethod() {
// //     this.hello = "hi"; // Created a property called hello
// //   }
// // }


// let pizza1 = new Pizza();
// // console.log(pizza1.toppings);
// pizza1.addTopping("mushrooms");
// pizza1.addTopping("peppers");
// // console.log(pizza1.toppings);

// let pizza2 = new Pizza();
// console.log(pizza2.toppings);
// pizza2.addTopping("more cheese");
// console.log(pizza2.toppings);
// console.log(pizza2.sauce);
// console.log(pizza2.sauce);


// let pizza = new Pizza('large', 'thin');
// console.log(pizza.toppings);
/*
class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
    this.sauce = ["garlic"];
    this.seasoning = ["italian"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  addSauce(sauce) {
    this.sauce.push(sauce);
  }

  addSeasoning(seasoning) {
    this.seasoning.push(seasoning);
  }
}

let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]
pizza1.addSauce("tomato");
pizza1.addSauce("bbq");
pizza1.addSeasoning('chili powder');
console.log(pizza1.seasoning);
console.log(pizza1.sauce);

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];
*/

// m1w4 OOP 3
// Super class
/*
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor extends Person {
  // Mentor bios need to include a bit more info
  bio() {
    return `I'm a mentor at Lighthouse Labs. ${super.bio()}`;
  }
}

class student extends Person {
  
  bio() {
    return `I'm a student at Lighthouse Labs(aka Labber). ${super.bio()}`;
  }
}
// DRIVER CODE

const bob = new Mentor('Bob Ross', 'I like mountains way too much');
console.log(bob.bio());

*/

class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
    this.sauce = ["garlic"];
    this.seasoning = ["italian"];
  }

  get size() {
    return this._size;
  }
  //VALIDATING SIZE BEFORE AN ERROR IS SET
  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    } else {
      return false;
    }
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  addSauce(sauce) {
    this.sauce.push(sauce);
  }

  addSeasoning(seasoning) {
    this.seasoning.push(seasoning);
  }



  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
}




// DRIVER CODE
const pizza = new Pizza();
pizza.setSize('m');
pizza.getSize(); // m
console.log(pizza.size);//m


let pizza3 = new Pizza();
pizza.getPrice();


let pizza1 = new Pizza();
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]
pizza1.addSauce("tomato");
pizza1.addSauce("bbq");
pizza1.addSeasoning('chili powder');
console.log(pizza1.seasoning);
console.log(pizza1.sauce);

let pizza2 = new Pizza();
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];