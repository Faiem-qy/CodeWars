
// let pizza1 = new Pizza();
// let pizza2 = new Pizza();

// pizza1 === pizza2; // false

class Pizza {

  constructor() {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
    this.sauce = ["garlic"];

  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  addSauce(sauce) {
    this.sauce.push(sauce);
  }

}

// adding a method to a class using the followinf syntax
// class SomeClass {
//   methodName(parameters) {
//     // this is a method
//   }
// }

//adding properties to a class using the this. keyword
// class SomeClass {
//   someMethod() {
//     this.hello = "hi"; // Created a property called hello
//   }
// }


let pizza1 = new Pizza();
// console.log(pizza1.toppings);
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
// console.log(pizza1.toppings);

let pizza2 = new Pizza();
console.log(pizza2.toppings);
pizza2.addTopping("more cheese");
console.log(pizza2.toppings);
console.log(pizza2.sauce);
pizza2.addSauce("pesto");
console.log(pizza2.sauce);


let pizza = new Pizza('large', 'thin');
console.log(pizza.toppings);