
const sayHelloTo = require('./myModule');

// Just to check the value of what we just required here
console.log('sayHelloTo: ', sayHelloTo);

sayHelloTo('Bernie');

function chromosomeCheck(s) {
  if (s === 'X') {
    return "Congratulations! You're going to have a daughter.";
  } else if (s === 'Y') {
    return "Congratulations! You're going to have a son.";
  }
}

function calculateValue(x) {
  if (typeof x === 'string') {
    return "Error";
  } else {
    return (x * 50) + 6;
  }
}
