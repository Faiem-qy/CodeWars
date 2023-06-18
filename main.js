
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

function take(arr, n) {
  return arr.slice(0, n);
}

function nameShuffler(str) {
  let names = str.split(" "); // Split the string into an array of names
  let firstName = names[0];
  let lastName = names[1];

  // Swap the first and last name
  let shuffledName = lastName + " " + firstName;

  return shuffledName;
}


function bugSpeed(s) {
  // Convert km/h to cm/s
  const speedCmPerSec = Math.floor(s * 100000 / 3600);

  return speedCmPerSec;
}
