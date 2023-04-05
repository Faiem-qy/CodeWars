function numberToString(num) {
  // Return a string of the number here!
  return num.toString();

}

// or 

function numberToString(num) {
  return '' + num;
}


// or


function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

// or 

function numberToString(num) {
  // Return a string of the number here!
  return `${num}`;
}


var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14
};

for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: " + numberOfMoons);
}

//Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.




function disemvowel(str) {
  // Define the regex pattern to match vowels (including capital vowels)
  const vowels = /[aeiouAEIOU]/g;

  // Use the replace method to remove vowels from the string and return the updated string
  return str.replace(vowels, "");
}