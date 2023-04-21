// function numberToString(num) {
//   // Return a string of the number here!
//   return num.toString();

// }

// // or

// function numberToString(num) {
//   return '' + num;
// }


// // or


// function numberToString(num) {
//   // Return a string of the number here!
//   return String(num);
// }

// // or

// function numberToString(num) {
//   // Return a string of the number here!
//   return `${num}`;
// }


// var planetMoons = {
//   mercury: 0,
//   venus: 0,
//   earth: 1,
//   mars: 2,
//   jupiter: 67,
//   saturn: 62,
//   uranus: 27,
//   neptune: 14
// };

// for (var planet in planetMoons) {
//   var numberOfMoons = planetMoons[planet];
//   console.log("Planet: " + planet + ", # of Moons: " + numberOfMoons);
// }

//Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.




// function disemvowel(str) {
//   // Define the regex pattern to match vowels (including capital vowels)
//   const vowels = /[aeiouAEIOU]/g;

//   // Use the replace method to remove vowels from the string and return the updated string
//   return str.replace(vowels, "");
// }


// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// function calculatePetAge(humanYears) {
//   let catYears = 0;
//   let dogYears = 0;

//   for (let i = 1; i <= humanYears; i++) {
//     if (i === 1) {
//       catYears += 15;
//       dogYears += 15;
//     } else if (i === 2) {
//       catYears += 9;
//       dogYears += 9;
//     } else {
//       catYears += 4;
//       dogYears += 5;
//     }
//   }

//   return [humanYears, catYears, dogYears];
// }

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
// var countSheep = function(num) {
//   //your code here
//   let result = '';
//   for (let i = 1; i <= num; i++) {
//     result += i + ' sheep...';
//   }
//   return result;
// };
/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/

// var number = function(busStops) {
//   // Good Luck!
//   let totalPeople = 0;
//   for (let i = 0; i < busStops.length; i++) {
//     totalPeople += busStops[i][0];
//     totalPeople -= busStops[i][1];

//   }
//   return totalPeople >= 0 ? totalPeople : 0;
// };
/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/


// function removeChar(str) {
//   //You got this!
//   if (str.lemgth <= 2) {
//     return '';
//   }
//   return str.slice(1, -1);
// };
/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

// function sumMix(x) {
//   let sum = 0;
//   for (let i = 0; i < x.length; i++) {
//     sum += Number(x[i]);
//   }
//   return sum;
// }