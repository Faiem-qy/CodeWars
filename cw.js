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
// // }

// function array(string) {
//   let n = string.split(',');
//   if (n.length < 3) {
//     return null;
//   } else {
//     n = n.slice(1, -1);
//     return n.join(' ');
//   }
// }



// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

// function periodIsLate(last, today, cycleLength) {
//   const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds
//   const daysPassed = Math.round((today - last) / oneDay);
//   return daysPassed > cycleLength;
// }

// // Return the number(count) of vowels in the given string.

// // We will consider a, e, i, o, u as vowels for this Kata(but not y).

// // The input string will only consist of lower case letters and / or spaces.;

// function getCount(str) {
//   let count = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }


// // Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// // If you want to know more: http://en.wikipedia.org/wiki/DNA

// // In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// // More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// // Example: (input --> output)

// // "ATTGC" --> "TAACG"
// // "GTAT" --> "CATA"

// function DNAStrand(dna) {
//   const pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
//   let complement = '';

//   for (let i = 0; i < dna.length; i++) {
//     complement += pairs[dna[i]];
//   }

//   return complement;
// }

// // In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// // For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// function findMultiples(integer, limit) {
//   let multiples = [];
//   let multiple = integer;
//   while (multiple <= limit) {
//     multiples.push(multiple);
//     multiple += integer;
//   }
//   return multiples;
// }

// // Convert number to reversed array of digits
// // Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// function digitize(n) {
//   //code here
//   const digits = String(n).split('');
//   digits.reverse();
//   return digits.map(Number);
// }

// // It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// // Return the average of the given array rounded down to its nearest integer.

// // The array will never be empty.

// function getAverage(marks) {
//   // Calculate the sum of the marks
//   const sum = marks.reduce((acc, curr) => acc + curr, 0);

//   // Calculate the average
//   const avg = sum / marks.length;

//   // Round down to the nearest integer using Math.floor()
//   return Math.floor(avg);
// }

// // Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// function duplicates(arr) {
//   const duplicates = [];

//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     const firstIndex = arr.indexOf(item);
//     const lastIndex = arr.lastIndexOf(item);

//     if (firstIndex !== lastIndex && !duplicates.includes(item)) {
//       duplicates.push(item);
//     }
//   }

//   return duplicates;
// }

// // The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// // What if the string is empty? Then the result should be empty object literal, {}.


// function count(string) {
//   let result = {};

//   for (const char of string) {
//     result[char] = (result[char] || 0) + 1;
//   }
//   return result;
// }

// function digitize(n) {
//   return n.toString().split('').map(Number).reverse();
// }


// function array(string) {
//   const elements = string.split(',');

//   if (elements.length <= 2) {
//     return null;
//   }

//   return elements.slice(1, -1).join(' ');
// }



// function findOdd(A) {
//   let result = 0;
//   for (let i = 0; i < A.length; i++) {
//     result ^= A[i];
//   }
//   return result;
// }


// function findAverage(array) {
//   if (array.length === 0) {
//     return 0;
//   }

//   const sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   return sum / array.length;
// }

// function findAverage(array) {
//   if (array.length === 0) {
//     return 0;
//   }

//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   var average = sum / array.length;
//   return average;
// }

// function grow(x) {
//   // Initialize the result variable with 1
//   let result = 1;

//   // Iterate over each element in the array
//   for (let i = 0; i < x.length; i++) {
//     // Multiply the current element with the result
//     result *= x[i];
//   }

//   // Return the final result
//   return result;
// }

// function greet() {
//   const message = "hello";
//   const world = "world";
//   const punctuation = "!";

//   return `${message} ${world}${punctuation}`;
// }


// function getGrade(s1, s2, s3) {
//   // Calculate the average score
//   const average = (s1 + s2 + s3) / 3;

//   // Assign the letter grade based on the average score
//   if (average >= 90 && average <= 100) {
//     return "A";
//   } else if (average >= 80 && average < 90) {
//     return "B";
//   } else if (average >= 70 && average < 80) {
//     return "C";
//   } else if (average >= 60 && average < 70) {
//     return "D";
//   } else {
//     return "F";
//   }
// }


// function findAverage(array) {
//   if (array.length === 0) {
//     return 0;
//   }

//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   var average = sum / array.length;
//   return average;
// }

// const rps = (p1, p2) => {
//   // Define the winning combinations
//   const winningCombinations = {
//     rock: "scissors",
//     paper: "rock",
//     scissors: "paper"
//   };

//   // Check for a draw
//   if (p1 === p2) {
//     return "Draw!";
//   }

//   // Check if player 1 wins
//   if (winningCombinations[p1] === p2) {
//     return "Player 1 won!";
//   }

//   // Player 2 wins by elimination
//   return "Player 2 won!";
// };


// function bmi(weight, height) {
//   const bmiValue = weight / (height * height);

//   if (bmiValue <= 18.5) {
//     return "Underweight";
//   } else if (bmiValue <= 25.0) {
//     return "Normal";
//   } else if (bmiValue <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// function findAverage(array) {
//   if (array === 0) {
//     return 0;
//   }


//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }

//   let average = sum / array.length;
//   return average;
// }

// function highAndLow(numbers) {
//   var numberArray = numbers.split(' ').map(Number);
//   var maxNumber = Math.max(...numberArray);
//   var minNumber = Math.min(...numberArray);

//   return `${maxNumber} ${minNumber}`;
// }


// function findMissingLetter(array) {
//   let firstCharCode = array[0].charCodeAt(0);

//   for (let i = 1; i < array.length; i++) {
//     let currentCharCode = array[i].charCodeAt(0);
//     if (currentCharCode - firstCharCode > 1) {
//       return String.fromCharCode(firstCharCode + 1);
//     }
//     firstCharCode = currentCharCode;
//   }
//   return '';
// }


// function arrayPlusArray(arr1, arr2) {
//   let sum = 0;

//   // Add elements from the first array
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }

//   // Add elements from the second array
//   for (let j = 0; j < arr2.length; j++) {
//     sum += arr2[j];
//   }

//   return sum;
// }

// const reverseSeq = n => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

// function arrayDiff(a, b) {
//   const result = [];

//   for (let i = 0; i < a.length; i++) {
//     let found = false;

//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       result.push(a[i]);
//     }
//   }
//   return result;
// }

// function square(number) {
//   return number * number;
// }


// function betterThanAverage(classPoints, yourPoints) {

//   let total = yourPoints;
//   for (let i = 0; i < classPoints.length; i++) {
//     total += classPoints[i];
//   }

//   let average = total / (classPoints.length + 1);

//   if (yourPoints > average) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function getRealFloor(n) {
//   if (n <= 0) {
//     return n;
//   } else if (n <= 13) {
//     return n - 1;
//   } else {
//     return n - 2;
//   }
// }

// function countPositivesSumNegatives(input) {
//   if (!input || input.length === 0) {
//     return [];
//   }

//   let positiveCount = 0;
//   let negativeSum = 0;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       positiveCount++;
//     } else if (input[i] < 0) {
//       negativeSum += input[i];
//     }
//   }

//   return [positiveCount, negativeSum];
// }

// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }

// function mouthSize(animal) {
//   if (animal.toLowerCase() === 'alligator') {
//     return 'small';
//   } else {
//     return 'wide';
//   }
// }


// function sayHello(name) {
//   return 'Hello, ' + name;
// }

// function gooseFilter(birds) {
//   let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter((bird) => !geese.includes(bird));
// }

// function rentalCarCost(d) {
//   const dailyRate = 40;
//   let totalAmount = d * dailyRate;
//   if (d >= 7) {
//     totalAmount -= 50;

//   } else if (d >= 3) {
//     totalAmount -= 20;
//   }
//   return totalAmount;
// }

// function makeUpperCase(str) {
//   return str.toUpperCase();
// }

// function pipeFix(numbers) {
//   const min = Math.min(...numbers);
//   const max = Math.max(...numbers);

//   const fixedList = [];

//   for (let i = min; i <= max; i++) {
//     if (numbers.includes(i)) {
//       fixedList.push(i);
//     }
//   }

//   return fixedList;
// }

// function remove(string) {
//   if (string.endsWith("!")) {
//     return string.slice(0, -1);
//   }
//   return string;
// }

// function findMultiples(integer, limit) {
//   let multiples = [];

//   for (let i = integer; i <= limit; i += integer) {
//     multiples.push(i);
//   }

//   return multiples;
// }

// function getChar(c) {
//   return String.fromCharCode(c);
// }


// function removeUrlAnchor(url) {
//   let parts = url.split('#');

//   return parts[0];
// }

// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// function dontGiveMeFive(start, end) {
//   let coundt = 0;

//   for (let num = start; num <= end; num++) {
//     if (num.toString().indexOf('5' === -1){
//       count++;
//     })
//   }
//   return count;
// }
// function gimme(triplet) {
//   const [a, b, c] = triplet;

//   if ((a < b && a > c) || (a > b && a < c)) {
//     return 0;
//   } else if ((b < a && b > c) || (b > a && b < c)) {
//     return 1;
//   } else {
//     return 2;
//   }
// }

// function reverseLetter(str) {
//   // Step 1: Remove non-alphabetic characters from the string
//   let lettersOnly = str.replace(/[^a-zA-Z]/g, '');

//   // Step 2: Reverse the letters
//   let reversed = lettersOnly.split('').reverse().join('');

//   return reversed;
// }

// function maxMultiple(divisor, bound) {
//   let largestMultiple = 0;

//   for (let i = bound; i > 0; i--) {
//     if (i % divisor === 0) {
//       largestMultiple = i;
//       break;
//     }
//   }

//   return largestMultiple;
// }
// function getSum(a, b) {
//   return a + b;
// }

// function smallEnough(a, limit) {
//   return a.every((element) => element <= limit);
// }

// const sequenceSum = (begin, end, step) => {
//   if (begin > end) {
//     return 0; // If the begin value is greater than the end value, the sum is 0
//   }

//   let sum = 0;

//   for (let i = begin; i <= end; i += step) {
//     sum += i; // Add each number in the sequence to the sum
//   }

//   return sum;
// };

// const multiplicationTable = function(size) {
//   const table = [];
//   for (let i = 1; i <= size; i++) {
//     const row = [];
//     for (let j = 1; j <= size; j++) {
//       row.push(i * j);
//     }
//     table.push(row);
//   }
//   return table;
// };

// function getEvenNumbers(numbersArray) {
//   return numbersArray.filter(number => number % 2 === 0);
// }


// function angle(n) {
//   if (n < 3) {
//     return -1; // Invalid input, return -1
//   }

//   return (n - 2) * 180 / n; // Calculate and return the angle
// }

// function reverseWords(str) {
//   // Split the string into an array of words
//   let wordsArray = str.split(" ");

//   // Reverse the order of the words
//   let reversedArray = wordsArray.reverse();

//   // Join the reversed words back into a string
//   let reversedString = reversedArray.join(" ");

//   // Return the reversed string
//   return reversedString;
// }

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
//   let enteredDate = new Date(currentDate);
//   let expirationDate = new Date(expirationDate);

//   // Check if the entered code matches the correct code
//   if (enteredCode !== correctCode) {
//     return false;
//   }

//   // Check if the current date is after the expiration date
//   if (enteredDate > expirationDate) {
//     return false;
//   }

//   return true;
// }

// function soltuion(nums) {
//   if (!nums || nums.length === 0) {
//     return [];
//   }
//   return nums.sort(function(a, b) {
//     return a - b;
//   });
// }

// function filter_list(l) {
//   return l.filter(function(item) {
//     return typeof item !== 'string';
//   });
// }

// loop fron 100 to 200;
// let num = the current step in the loop
// print num;
// End loop;

// loop from 100 to 200
//   let num = the current step in the loop
//   If num is a multiple of 3
//     Print "loopy"
//   Otherwise
//     Print num
//   End if
// End loop

// loop from 100 to 200
//   let num = the current step in the loop
//   If num % 3 is equal to 0
//     Print "loopy"
//   Otherwise
//     Print num
//   End if
// End loop


// loop from 100 to 200
//   let nun = the current step in the loop
//   If num % 3 us equal to 0
//     Print "loopy"
//   Else if num % 4 is equal to 0
//     Print "lighthouse"
//   Else if num % 3 is equal to 0 and num % 4 is equal to 0
//     Print "LoopyLighthouse"
//   Otherwise
//     Print num
//   End if
// End loop


// loop from 100 to 200
//   let num = the current step in the loop
//   If num % 3 is equal to 0 and num % 4 is equal to 0;
//     Print "LoopyLighthouse"
//   Else if num % 3 is equal to 0
//     Print "Loopy"
//   Else if num % 4 is equal to 0
//     Print "Lighthouse"
//   Otherwise
//     Print num
//   End if
// End loop


// for (let num = 100; num <= 200; num++) {
//   if (num % 3 === 0 && num % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (num % 3 === 0) {
//     console.log("Loopy");
//   } else if (num % 4 === 0) {
//     console.log('Lighthouse');
//   } else {
//     console.log(num);
//   }
// }


// if (num % 3 === 0 && num % 4 === 0) {
//   console.log("loopyLighthouse");
// } else if (num % 3 === 0) {
//   console.log("Loopy");
// } else if (num % 4 === 0) {
//   console.log("Lighthouse");
// }

// let output = "";

// for (const num of nums) {
//   let output = '';

//   if (num % 3 == 0) {
//     output += "Loopy";
//   }
//   if (num % 4 === 0) {
//     output += "Lighthouse";
//   }
//   console.log(output === "" ? num : output);
// }

// function numberToString(num) {
//   // Return a string of the number here!
//   return num.toString();
// }

// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }

// const volume = Kata.getVolumeOfCuboid(5, 3, 2);
// console.log(volume);

// // Testing a new line
// function greet(language) {
//   if (language === 'English') {
//     return 'Hello!';
//   } else if (language === 'Spanish') {
//     return '¡Hola!';
//   } else if (language === 'French') {
//     return 'Bonjour!';
//   } else {
//     return 'Language not supported.';
//   }
// }

/*
<<<<<<< HEAD


// const volumee = Kata.getVolumeOfCuboid(5, 3, 2);
// console.log(volume); // Output: 30



function distinct(a) {
  const uniqueSet = new Set();
  const newArray = [];

  for (const num of a) {
    if (!uniqueSet.has(num)) {
      uniqueSet.add(num);
      newArray.push(num);
    }
  }

  return newArray;
}


function drawStairs(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      result += ' ';
    }
    result += 'I\n';
  }
  console.log(result);
}
drawStairs(20);
=======
// const volumee = Kata.getVolumeOfCuboid(5, 3, 2);
// console.log(volume); // Output: 30

// function distinct(a) {
//   const uniqueSet = new Set();
//   const newArray = [];

//   for (const num of a) {
//     if (!uniqueSet.has(num)) {
//       uniqueSet.add(num);
//       newArray.push(num);
//     }
//   }

//   return newArray;
// }


>>>>>>> 20bc15eb6994edeeb3b3b3000e330cf6d0cd63b3


function distinct(a) {
  let newArr = [];

  for (let i = 0; i < a.length; i++) {
    if (!newArr.includes(a[i])) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}

*/

/*
const sum = function(arr) {
  // declare variable
  let total = 0;
  // iterate over array
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    total += arr[i];
    // console.log(total);
  }
  return total;
};

console.log(sum([3, 7, 5, 9, 4, 2]));
*/

/*
const round = function(number) {
  return Math.round(number * 100) / 100;
};


const mean = function(arr) {
  // if the array is empty return null
  if (arr.length === 0) {
    return null;
  }

  let total = 0;

  //iterate over arr
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return round(total / arr.length);
};


console.log(mean([6, 2, 3, 4, 5]));
*/


/*

* MIN - the lowest value in a list
*
* For example:
*
*    min([6,2,3,4,9,6,1,0,5])
*
* Returns:
*
*    0
*/

/*
const min = function(arr) {
  let minValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
};

console.log(min([6, 2, 3, 4, 9]));

const max = function(arr) {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

console.log(max([6, 2, 3, 4, 9]));

const range = function(arr) {
  const minValue = min(arr);
  const maxValue = max(arr);
  return maxValue - minValue;

};


console.log(range([3, 7, 1, 6, 2, 3, 4, 9]));// 9 - 1 = 8
*/

// const round = function(number) {
//   return Math.round(number * 100) / 100;
// };

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// const median = function(arr) {
//   /* IMPLEMENT ME */
//   if (arr.length === 0) {
//     return null;
//   }
//   arr.sort((a, b) => a - b);
//   const middle = Math.floor(arr.length / 2);

//   if (arr.length % 2 === 1) {
//     return [arr[middle]];
//   } else {
//     const averageOfMiddle = (arr[middle - 1] + arr[middle] / 2);
//     return (round(averageOfMiddle));
//   }

// };
// console.log(median([6, 2, 3, 4, 9, 3, 6, 1, 0]));


// class Sandwich {

//   constructor(slices, toasted) {
//     this.slices = slices;
//     this.toasted = toasted;
//     this.ingredients = ['cheese'];
//   }

//   addIngredient(ingredient) {
//     this.ingredients.push(ingredient);
//   }
// }

// let sandwich1 = new Sandwich('two', 'yes');
// console.log(sandwich1);
// console.log(sandwich1.ingredients, 'sandwich1');

// sandwich1.addIngredient('pimento');
// sandwich1.addIngredient('olives');
// console.log(sandwich1.ingredients, 'sandwich1');


// let sandwich2 = new Sandwich();
// console.log(sandwich2.ingredients);
// sandwich2.addIngredient('sausage');
// console.log(sandwich2.ingredients, 'sandwich 2');

/*
// Both student and mentor
class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

// employer only
class Employer extends Person {
  enroll(startedJob) {
    this.job = startedJob;
  }
}

// employee only
class Employee extends Person {
  goOnShift() {
    this.onShift = true;
  }
  goOffShift() {
    this.offShift = false;
  }
}

// wmployer
let employer1 = new Employer("Fred","bald")
console.log('employer1 - ',employer1.bio());

employer1.enroll("Jan 2023")
console.log('Started Job -',employer1.job);

//employee
let employee1 = new Employee("Jeff", "I can drum for 6 hours")
console.log(employee1.bio());

employee1.goOnShift()
console.log(employee1.onShift);

employee1.goOffShift()
console.log(employee1.offShift);

*/
/*
function findMultiples(integer, limit) {
  let multiples = [];

  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }

  return multiples;
}
*/

/*
class Sandwich {

  constructor(slices, toasted) {
    this.slices = slices;
    this.toasted = toasted;
    this.ingredients = ['cheese'];
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }
}

let sandwich3 = new Sandwich();
sandwich3.price;  // instead of getPrice()
sandwich3.size = 's';// instead of setSize(size)



// let sandwich1 = new Sandwich('two', 'yes');
// console.log(sandwich1);
// console.log(sandwich1.ingredients, 'sandwich1');

// sandwich1.addIngredient('pimento');
// sandwich1.addIngredient('olives');
// console.log(sandwich1.ingredients, 'sandwich1');


// let sandwich2 = new Sandwich();
// console.log(sandwich2.ingredients);
// sandwich2.addIngredient('sausage');
// console.log(sandwich2.ingredients, 'sandwich 2');


// Sum Numbers
function sum(numbers) {

  let total = 0;
  for (const number of numbers) {
    total += number;
  }

  return total;
}

const numbersArray = [1, 2, 3, 4, 5];
console.log("Sum:", sum(numbersArray)); // Output: Sum: 15



function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  }
  return "Hello, " + name + "!";
}
*/

/*
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }

  // or ternary operator

  return number % 2 === 0 ? "Even" : "Odd";
}

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return0;
  }
  return n * m;
}


function repeatStr(n, s) {
  if (n <= 0) {
    return ''; // Return an empty string if n is zero or negative
  } else {
    return s.repeat(n); // Use the repeat method to repeat the string s n times
  }
}


function chromosomeCheck(sperm) {
  if (sperm === 'XX') {
    return "Congratulations! You're going to have a daughter.";
  } else if (sperm === 'XY') {
    return "Congratulations! You're going to have a son.";
  } else {
    // Handle invalid input (e.g., if sperm is neither 'X' nor 'Y')
    return "Invalid input. Please provide 'X' or 'Y' for sperm.";
  }
}

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  let total = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return total;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // Calculate how many years ago the father was twice as old as his son
  const ageDifference = Math.abs(dadYearsOld - 2 * sonYearsOld);
  return ageDifference;
}

const dadAge1 = 40;
const sonAge1 = 10;
const yearsAgoOrFuture1 = twiceAsOld(dadAge1, sonAge1);
console.log(`Years ago or in the future: ${yearsAgoOrFuture1}`);

function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] === "R" || name[0] === "r") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

function getPlanetName(id) {
  let name;
  switch (id) {
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
    default:
      name = "Unknown";
  }

  return name;
}
*/

/*
function smash(words) {
  return words.join(' ');
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));  //=> 'hello world this is great'


function greet(name) {
  if (greet) {
    return `Hello, ${name} how are you doing today?`;
  }
}

console.log(greet("Ben"));
*/

/*
function removeEveryOther(arr) {
  //your code here
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}
/*
function removeEveryOther(arr) {
  return arr.filter((_, index) => index % 2 === 0);
}



console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));



function descendingOrder(n) {
  return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}

const result = descendingOrder(42145);
console.log(result); // Output will be 54421


function fakeBin(x) {
  let answer = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      answer += "0";
    } else {
      answer += "1";
    }
  }
  return answer;
}

console.log(fakeBin('65454654231654'));

*/

/*
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let enoughFuel = distanceToPump / mpg;
  if (fuelLeft >= enoughFuel) {
    return true;
  } else {
    return false;
  }
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
*/

/*

function removeExclamationMarks(s) {
  // Use the replace method with a regular expression to remove exclamation marks (!)
  return s.replace(/!/g, '');
}


function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  if (typeof i === 'number') {
    return i * 2;
  } else {
    return "NaN";
  }
}

console.log(doubleInteger(1));
console.log(doubleInteger('bob'));
console.log(doubleInteger(3));
console.log(doubleInteger(4));
console.log(doubleInteger(5));
console.log(doubleInteger(6));
*/


/*
function setAlarm(employed, vacation) {
  // if employed is true and vacation is true return false
  // if employed is true and vacation is false return true
  // if employed is false and vacation is true return false
  // if employed is false anf vacation is false return false

  if (employed && !vacation) {
    return true;
  } else {
    return false;
  }
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));



// Write a function "greet" that returns "hello world!"

function greet(){
  return 'hello world!'
}

function SeriesSum(n) {
  if(n === 0) {
    return "0.00"
  }

  let sumSeries = 0;
  let denominator = 1;

  for (let i = 0; i < n; i ++) {
    sumSeries += 1 / denominator
    denominator += 3
  }

return sumSeries.toFixed(2)
}

console.log(sumSeries(1));


*/
/*
function squareSum(numbers) {
  // Initialize a variable to store the sum of squared numbers
  let sum = 0;

  // Loop through the array of numbers
  for (let i = 0; i < numbers.length; i++) {
    // Square the current number and add it to the sum
    sum += numbers[i] * numbers[i];
  }

  // Return the final sum
  return sum;
}

// Example usage:
console.log(squareSum([1, 2, 2]));// Output: 9



function addBinary(a, b) {
  const sum = a + b; // Calculate the sum in decimal
  return sum.toString(2); // Convert the sum to binary and return as a string
}

console.log(addBinary(1, 1)); // Output: '10'
console.log(addBinary(5, 9)); // Output: '1110'
*/

/*
function doubleChar(str) {
  // Your code here
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}


console.log(doubleChar("This is fun!!"));



const allPlayerNames = function(outcomes) {
  const results = [];

  for (const game of outcomes) {

    if (!results.includes(game.winner)) {
      results.push(game.winner);
    }

    if (!results.includes(game.loser)) {
      results.push(game.loser);
    }
  }
  return results;
};


const fs = require('fs');

const sumFileData = function(filePath1, filePath2, callback) {
  // IMPLEMENT ME

  fs.readFile(filePath1, 'utf8', (err1, data1) => {
    if (err1) {
      callback(err1, null);
    }

    const number1 = Number(data);
    fs.readFile(filePath2, 'utf8', (err2, data2) => {
      if (err2) {
        callback(err2, null);
      }

      const number2 = Number(data);
      callback(null, number1 + number2);
    });
  });

};

const binaryArrayToNumber = arr => {
  let result = 0;

  for (const bit of arr) {
    // Shift the current result left by 1 and add the current bit
    result = (result << 1) | bit;
  }
  return result;
};


// Test cases
console.log("Testing:", [0, 0, 0, 1], "==> ", binaryArrayToNumber([0, 0, 0, 1]));
console.log("Testing:", [0, 0, 1, 0], "==> ", binaryArrayToNumber([0, 0, 1, 0]));
console.log("Testing:", [0, 1, 0, 1], "==> ", binaryArrayToNumber([0, 1, 0, 1]));
console.log("Testing:", [1, 0, 0, 1], "==> ", binaryArrayToNumber([1, 0, 0, 1]));
console.log("Testing:", [0, 0, 1, 0], "==> ", binaryArrayToNumber([0, 0, 1, 0]));
console.log("Testing:", [0, 1, 1, 0], "==> ", binaryArrayToNumber([0, 1, 1, 0]));
console.log("Testing:", [1, 1, 1, 1], "==> ", binaryArrayToNumber([1, 1, 1, 1]));
console.log("Testing:", [1, 0, 1, 1], "==> ", binaryArrayToNumber([1, 0, 1, 1]));

function DNAtoRNA(dna) {
  // Use the replace() method with a regular expression to replace 'T' with 'U'
  return dna.replace(/T/g, 'U');
}

// Example usage:
const dnaString = "GCAT";
const rnaString = DNAtoRNA(dnaString);
console.log(rnaString); // Output: "GCAU"


function calculateOriginalPrice(finalPrice) {
  // Check if the input value is null or not a number
  if (finalPrice === null || isNaN(finalPrice)) {
    return -1;
  }

  // Calculate the original price without VAT
  const originalPrice = finalPrice / 1.15; // 15% VAT means 115% of the original price
  return parseFloat(originalPrice.toFixed(2)); // Round to 2 decimal places
}

// Example usage:
const finalPrice = 230.00;
const originalPrice = calculateOriginalPrice(finalPrice);
console.log("Original Price: " + originalPrice); // Output: Original Price: 200.00



// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

function spinAround(turns) {
  let orientation = 0;
  let fullRotations = 0;

  for (const direction of turns) {
    if (direction === "right") {
      orientation += 90;
    } else if (direction === "left") {
      orientation -= 90;
    }
    if (orientation >= 360) {
      fullRotations++;
      orientation -= 360;
    }

  }
  return fullRotations;
}


console.log(spinAround(["right", "right", "right", "right", "left", "right"])); // Output: 1
console.log(spinAround(["left", "right", "left", "right"])); // Output: 0
console.log(spinAround(["right", "right", "right", "right", "right", "right", "right", "right"])); // Output: 2
console.log(spinAround(["left", "left", "left", "left"])); // Output: 1
*/

/*
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) {
    return 0;
  }

  let highest = array[0];
  let lowest = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > highest) {
      highest = array[i];
    }
    if (array[i] < lowest) {
      lowest = array[i];
    }
  }
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== highest && array[i] !== lowest) {
      sum += array[i];
    }
  }
  return sum;
}

console.log(sumArray([6, 2, 1, 8, 10])); // Output: 16
console.log(sumArray([1, 1, 11, 2, 3])); // Output: 6
console.log(sumArray([])); // Output: 0 (input validation)
console.log(sumArray([7])); // Output: 0 (input validation)
*/

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

/*
function powersOfTwo(n) {
  if (n < 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }

  return result;
}

console.log(powersOfTwo(0));  // [1]
console.log(powersOfTwo(1));  // [1, 2]
console.log(powersOfTwo(2));  // [1, 2, 4]


function stringToArray(string) {
  // Use the split method to split the string by spaces
  const words = string.split(" ");
  return words;
}

// Example usage:
const input1 = "Robin Singh";
const input2 = "I love arrays they are my favorite";

console.log(stringToArray(input1)); // Output: ["Robin", "Singh"]
console.log(stringToArray(input2)); // Output: ["I", "love", "arrays", "they", "are", "my", "favorite"]


function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  // Calculate the index of the phrase for the last petal
  const lastIndex = (nbPetals - 1) % phrases.length;

  return phrases[lastIndex];
}

// Example usage:
const nbPetals = 7;
const result = howMuchILoveYou(nbPetals);
console.log(result); // This will print "I love you"

// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.replace(/\s/g, "");
}


function powersOfTwo(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}

function maps(x) {
  // Use the map method to create a new array with each value doubled
  const doubledArray = x.map((value) => value * 2);

  return doubledArray;
}

const originalArray = [1, 2, 3];
const doubledArray = maps(originalArray);
console.log(doubledArray); // Output: [2, 4, 6]


function sumStr(a, b) {
  const sum = (Number(a) || 0) + (Number(b) || 0);
  return String(sum);
}
// Examples:
console.log(sumStr("4", "5"));  // Output: "9"
console.log(sumStr("34", "5")); // Output: "39"
console.log(sumStr("", ""));    // Output: "0"
console.log(sumStr("2", ""));   // Output: "2"
console.log(sumStr("-5", "3"));  // Output: "-2"



function getGrade(s1, s2, s3) {
  // Calculate the average of the three scores
  const average = (s1 + s2 + s3) / 3;

  // Determine the letter grade based on the average
  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// Test cases
console.log(getGrade(95, 85, 75));  // 'B'
console.log(getGrade(70, 75, 80));  // 'C'
console.log(getGrade(60, 65, 55));  // 'D'
console.log(getGrade(45, 50, 35));  // 'F'
console.log(getGrade(100, 100, 100));  // 'A'

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.

function isLeapYear(year) {
  // TODO
  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      return true;
    }
  }
  return false;
}

function ticketKiosk(age) {
  if (age <= 12) {
    console.log('Here is your free ticket');
  } else if (age >= 13 && age <= 17) {
    console.log('Here is our discounted ticket');
  } else if (age >= 18 && age <= 64) {
    console.log('Here is your adult ticket');
  } else {
    console.log('Here is your discounted senior ticket');
  }
}

// using shortcircuit

function ticketKiosk(customerAge) {
  return customerAge <= 12
    ? "Here is your free ticket"
    : customerAge <= 17
      ? "Here is your discounted teen ticket"
      : customerAge <= 64
        ? "Here is your adult ticket"
        : "Here is your discounted senior ticket";
}

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.


function getGrade(s1, s2, s3) {
  // Code here
  const average = (s1 + s2 + s3) / 3;

  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 85, 75)); // Expected output: 'B' (Average is 85)
console.log(getGrade(70, 68, 75)); // Expected output: 'C' (Average is 71)
console.log(getGrade(60, 62, 59)); // Expected output: 'D' (Average is 60.333...)
console.log(getGrade(45, 30, 20)); // Expected output: 'F' (Average is 31.666...)
console.log(getGrade(100, 100, 100)); // Expected output: 'A' (Average is 100)


// Now you have to write a function that takes an argument and returns the square of it.

function square(number) {
  return number * number;
}
*/

/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
*/

/*
function feast(beast, dish) {
  //your function here

  // the dish must start and end witht the same letters of the Animal's name
  // compare first and last letter of animal's name and dish.
  const firstLetterBeast = beast[0].toLowerCase();
  const lastLetterBeast = beast[beast.length - 1].toLowerCase();
  const firstLetterDish = dish[0].toLowerCase();
  const lastLetterDish = dish[dish.length - 1].toLowerCase();

  console.log(firstLetterBeast, lastLetterBeast);
  console.log(firstLetterDish, lastLetterDish);
  console.log(beast, dish);
  
  return firstLetterBeast === firstLetterDish && lastLetterBeast === lastLetterDish

}

console.log(feast("great blue heron", "garlic naan"));

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  //your code here
  if (b) {
    return "true"
  } else {
    return "false"
  }
}

/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 
*/

/*
String.prototype.toAlternatingCase = function () {
  return this.split('').map(char => {
    if (char === char.toLowerCase()) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
};

console.log("hello world".toAlternatingCase()); // "HELLO WORLD"
console.log("HELLO WORLD".toAlternatingCase()); // "hello world"
console.log("hello WORLD".toAlternatingCase()); // "HELLO world"
console.log("HeLLo WoRLD".toAlternatingCase()); // "hEllO wOrld"
console.log("12345".toAlternatingCase());       // "12345"
console.log("1a2b3c4d5e".toAlternatingCase());  // "1A2B3C4D5E"
console.log("String.prototype.toAlternatingCase".toAlternatingCase()); // "sTRING.PROTOTYPE.TOaLTERNATINGcASE"


const inputArray = ['banana', 'apple', 'orange', 'grape'];
const output = twoSort(inputArray);
console.log(output);
*/

/*
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}

const inputArray = [3, 1, 9, 5, 7];
const result = minMax(inputArray);
console.log(result);


function isPalindrome(str) {
  // Convert the string to lowercase
  const lowerCaseStr = str.toLowerCase();

  // Remove non-alphanumeric characters using a regular expression
  const cleanStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');

  // Compare the clean string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

const testString = "A man, a plan, a canal, Panama!";
const resultt = isPalindrome(testString);

console.log(resultt);

function stray(numbers) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result ^= numbers[i];
  }
  return result;
}

console.log(stray([1, 1, 2, 1, 1]));

*/
/*
function findNeedle(haystack) {
  // your code here
  const index = haystack.indexOf("needle");
  if (index !== -1) {
    return `found the needle at position ${index}`;
  } else {
    return "needle not found";
  }
}

// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:



console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])); // --> "found the needle at position 5" 

function anyArrows(arrows) {
  return arrows.some(arrow => !arrow.damaged);
}

console.log(anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }]));
*/
/*
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    // Check if the number has an integer square root
    if (Math.sqrt(array[i]) % 1 === 0) {
      // If yes, take the square root
      newArray.push(Math.sqrt(array[i]));
    } else {
      // Otherwise, square the number
      newArray.push(array[i] * array[i]);
    }
  }

  return newArray;
}

const iArray = [4, 3, 9, 7, 2, 1];
const resultArray = squareOrSquareRoot(iArray);
console.log(resultArray); // Output: [2, 9, 3, 49, 4, 1]



function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && b + c > a && c + a > b) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
*/
/*
function findOdd(A) {
  let counts = {};

  for (let i = 0; i < A.length; i++) {
    if (counts[A[i]] === undefined) {
      counts[A[i]] = 1;
    } else {
      counts[A[i]]++;
    }
  }

  for (const num in counts) {
    if (counts[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
}

function accum(s) {
  // Check if the input is a string
  if (typeof s !== 'string') {
    return "Invalid input. String required";
  }

  let result = '';
  // Iterate through each character in the input string
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();
    // Append the lowercase version of the current character repeated (i) times

    result += s[i].toLowerCase().repeat(i);

    // Add a hyphen between characters unless it's the last character

    if (i < s.length - 1) {
      result += '-';
    }
  }

}
*/

/*There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.*/

const flip = (d, a) => {
  return d === 'R' ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);
};

/*Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.*/

const stringToNumber = function(str) {
  return parseInt(str, 10);
};

/*
You must return false without ever actually using the word false...
*/

function ifChuckSaysSo() {
  return !true;
}


// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string) {
//   const toLowerCase = string.toLowerCase();

//   for (let charCode = 97; charCode <= 122; charCode++) {
//     const letter = String.fromCharCode(charCode);

//     if (!toLowerCase.includes(letter)) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// function persistence(num) {
//   let count = 0;

//   // Continue multiplying until num is a single digit
//   while (num >= 10) {
//     // Convert the number to an array of digits
//     const digits = Array.from(String(num), Number);

//     // Multiply the digits
//     num = digits.reduce((product, digit) => product * digit, 1);

//     // Increment the persistence count
//     count++;
//   }

//   return count;
// }


// console.log(persistence(39));

// function order(words) {
//   if (!words) {
//     return '';
//   }

//   // Split the input string into an array of words
//   const wordArray = words.split(' ');

//   // Create an array to store words in their correct positions
//   const resultArray = [];

//   // Iterate over each word and place it in the correct position
//   for (let i = 0; i < wordArray.length; i++) {
//     const word = wordArray[i];
//     const num = parseInt(word.match(/\d+/)[0]); // Extract the numeric value

//     // Place the word in its correct position
//     resultArray[num - 1] = word;
//   }

//   // Join the result array back into a string
//   const result = resultArray.join(' ');

//   return result;
// }


// console.log(order("is2 Thi1s T4est 3a")); // Output: "Thi1s is2 3a T4est"


// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
/*
function likes(names) {
  if (names === null || names.length === 0) {
    return `no one likes this`;
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`;
  }
}

console.log(likes(['Yt5RgyOfkQk', 'slBqetMt', 'A', 'B', 'C'])); // Should return "Yt5RgyOfkQk, slBqetMt and 3 others like this"

console.log(likes(''));
console.log(likes(['Peter']));
console.log(likes(['Jacob', "Alex"]));
console.log(likes(['Jacob', "Alex", "Mark"]));
console.log(likes(['Jacob', "Alex", "Mark", "Max"]));



function past(h, m, s) {
  const millisecondsPerHour = 3600000;
  const millisecondsPerMinute = 60000;
  const millisceondsPerSecond = 1000;

  const totalmilliseconds = (h * millisecondsPerHour) + (m * millisecondsPerMinute) + (s * millisceondsPerSecond);

  return totalmilliseconds;
}

const h = 0;
const m = 1;
const s = 1;
const result = past(h, m, s);


console.log(`Time since midnight: ${result} milliseconds`);

*/

/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.*/

/*
function duplicateEncode(word) {
  word = word.toLowerCase();

  let charCount = {};

  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let result = '';
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);
    if (charCount[char] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}

console.log(duplicateEncode("Success this is cool"));


// rock paper scissors
const rps = (p1, p2) => {

  if (p1 === p2) {
    return "Draw!";
  } else if ((p1 === "rock" && p2 === "scissors") || (p1 === "scissors" && p2 === "paper") || (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  };
};

console.log(rps("paper", "rock"));
*/

/*0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.*/

/*
function litres(time) {
  return Math.floor(time * .5);
}

console.log(litres(3));
console.log(litres(6.7));
console.log(litres(11.8));

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "green";
    default:
      return "unknown";
  }
}

console.log(updateLight("red"));
console.log(updateLight("green"));
console.log(updateLight("yellow"));


function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));


function findNb(m) {
  let n = 1;
  let totalVolume = 0;

  while (totalVolume < m) {
    totalVolume += Math.pow(n, 3);
    n++;
  }

  if (totalVolume === m) {
    return n - 1;
  } else {
    return -1; // If there is no such n
  }
}

// Examples
console.log(findNb(1071225)); // 45
console.log(findNb(91716553919377)); // -1


function alphabetPosition(text) {
  let result = '';

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);

    // Check if the character is a letter (a-z)
    if (/^[a-z]$/.test(char)) {
      // Calculate the position of the letter in the alphabet (a=1, b=2, ..., z=26)
      const position = char.charCodeAt(0) - 96;

      // Append the position to the result string
      result += position + ' ';
    }
  }

  // Remove the trailing space and return the result
  return result.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function sumDigits(number) {
  const absoluteNumber = Math.abs(number);
  const numberString = absoluteNumber.toString();
  let sum = 0;

  for (let i = 0; i < numberString.length; i++) {
    // Convert each digit back to a number and add it to the sum
    const digit = parseInt(numberString[i], 10);
    sum += digit;
  }
  return sum;
}

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));


const min = function(list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minValue) {
      minValue = list[i];
    }
  }
  return minValue;
};

const max = function(list) {
  let maxValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > maxValue){
      maxValue = list[i];
    }
  }
  return maxValue;
};
*/


// function cantBeatSoJoin(arr) {
//   const result = [];

//   while (arr.length > 0) {
//     let maxIndex = 0;
//     let maxValue = arr[0].reduce((sum, val) => sum + val, 0); //Calculate the total value of the first array

//     for (let i = 1; i < arr.length; i++) {
//       const currentValue = arr[i].reduce((sum, val) => sum + val, 0);
//       if (currentValue > maxValue) {
//         maxIndex = i; //Update the index of the maximum value array
//         maxValue = currentValue;  // Update the maximum value
//       }
//     }
//     result.push(...arr[maxIndex]); // Push the elements of the array with the highest total value into the result
//     arr.splice(maxIndex, 1); // Remove the array that was added to the result from the input array
//   }
//   return result;
// }

// console.log(cantBeatSoJoin([[1, 2], [3, 4], [5, 6], [7, 8], [9]]));

// function SeriesSum(n) {
//   let sum = 0;

//   for (let i = 0; i < n; i++) {
//     sum += 1 / (1 + i * 3);
//   }

//   // Round the sum to 2 decimal places
//   sum = Math.round(sum * 100) / 100;
//   // Convert the rounded sum to a string with 2 decimal places
//   return sum.toFixed(2);
// }

// console.log(SeriesSum(1)); // Output: "1.00"
// console.log(SeriesSum(2)); // Output: "1.25"
// console.log(SeriesSum(5)); // Output: "1.57"


// // function sumTwoSmallestNumbers(numbers) {
// //   //Code here
// //   let min = Math.min(numbers[0], numbers[1]);
// //   let beforeMin = Math.max(numbers[0], numbers[1]);

// //   for (let i = 0; i < numbers.length; i++) {
// //     if(numbers[i] < min){
// //       beforeMin = min
// //       min = numbers[i]
// //     }else if (numbers[i]< beforeMin) {
// //       beforeMin = numbers[i]
// //     }
// //   }
// //   return min + beforeMin
// // }

// // or

// function sumTwoSmallestNumbers(numbers) {
//   const [min, secondMin] = numbers.sort((a, b) => a - b).slice(0, 2);
//   return min + secondMin;
// }

// console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));


// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   const ageGap = dadYearsOld - 2 * sonYearsOld;
//   const absoluteAgeGap = Math.abs(ageGap);
//   return absoluteAgeGap;
// }

// const dadAge = 40;
// const sonAge = 10;

// const yearsAgoOrInFuture = twiceAsOld(dadAge, sonAge);
// console.log(`The father was or will be twice as old as his son ${yearsAgoOrInFuture} years ago or in the future.`);


// let numberI = function(array) {
//   return array.map(function(line, index) {
//     return (index + 1) + ": " + line;
//   });
// };

// console.log(numberI(["a", "b", "c"]));

// function XO(str) {
//   const lowerStr = str.toLowerCase();
//   const countX = (lowerStr.match(/x/g) || []).length;
//   const countO = (lowerStr.match(/o/g) || []).length;

//   return countX === countO;
// }

// console.log(XO("ooxx"));
// console.log(XO("xooxx"));


// function getAge(inputString) {
//   // Use a regular expression to extract the age (a number between 0 and 9)
//   const ageRegex = /\b(\d)\s*year[s]?\s*old\b/;
//   const match = inputString.match(ageRegex);

//   // If a match is found, return the extracted age as an integer
//   if (match) {
//     return parseInt(match[1]);
//   }

//   // If no match is found, return -1 or handle the error as needed
//   return -1;
// }

// // Test cases
// console.log(getAge("1 year old")); // Output: 1
// console.log(getAge("5 years old")); // Output: 5
// console.log(getAge("3 year old")); // Output: 3

// function XO(str) {
//   //code here
//   str = str.toLowerCase();

//   let xCount = 0;
//   let oCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'x') {
//       xCount++;
//     } else if (str[i] === 'o') {
//       oCount++;
//     }
//   }
//   return xCount === oCount;
// }

// function saleHotdogs(n) {
//   return n < 5 ? n * 100 : (n >= 5 && n < 10) ? n * 95 : n * 90;
// }


// function check(a, x) {
//   return a.includes(x);
// }

// const result = check([1, 2, 3], 3);

// console.log(result ? "true" : "false");

// function findNextSquare(sq) {
//   // Check if the square root is an integer
//   const sqrt = Math.sqrt(sq);
//   if (Number.isInteger(sqrt)) {
//     // Calculate the next perfect square by squaring the next integer
//     const nextInteger = sqrt + 1;
//     return nextInteger * nextInteger;
//   } else {
//     // If not a perfect square, return -1
//     return -1;
//   }
// }

// // Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// function gooseFilter(birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   let filteredBirds = birds.filter(function(bird) {
//     return !geese.includes(bird);
//   });
//   return filteredBirds;
// };

// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));


// function solution(str) {
//   return str.split('').reverse().join('');
// }

// console.log(solution("world"));

// function solution(nums) {
//   if (!nums || nums.length === 0) {
//     return [];
//   }
//   nums.sort(function(a, b) {
//     return a - b;
//   });
//   return nums;
// }

// function openOrSenior(data){
//   return data.map(member => {
//     const [age, handicap] = member;
//     if (age >= 55 && handicap > 7) {
//       return "Senior";
//     } else {
//       return "Open";
//     }
//   });
// }

// function getSum(a, b) {
//   if (a > b) {
//     a = b;
//     b = temp;
//   }
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i;
//   }
//   return `${sum} --> (${a} + ${b} = ${sum})`;
// }


// console.log(getSum(1, 2));


// function shortcut(string) {
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     if (!['a', 'e', 'i', 'o', 'u'].includes(string[i])) {
//       result += string[i];
//     }
//   }
//   return result;
// }

// console.log(shortcut("hello"));
// console.log(shortcut("goodbye"));



// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// function encrypt(text, n) {
//   if (text === "" || n <= 0) {
//     return text;
//   }

//   let result = text;

//   for (let i = 0; i < n; i++) {
//     let odd = "";
//     let even = "";

//     for (let j = 0; j < result.length; j++) {
//       if (j % 2 === 1) {
//         odd += result[j];
//       } else {
//         even += result[j];
//       }
//     }
//     result = odd + even;
//   }
//   return result;
// }


// function decrypt(encryptedText, n) {
//   if (encryptedText === "" || n <= 0) {
//     return encryptedText;
//   }
//   const mid = Math.floor(encryptedText.length / 2);

//   for (let i = 0; i < n; i++) {
//     let odd = encryptedText.slice(0, mid);
//     let even = encryptedText.slice(mid);
//     encryptedText = "";

//     for (let j = 0; j < mid || j < even.length; j++) {
//       if (even[j]) {
//         encryptedText += even[j];
//       }
//       if (odd[j]) {
//         encryptedText += odd[j];
//       }
//     }
//   }
//   return encryptedText;
// }
// console.log(encrypt("012345", 1));  // Output: "135024"


// function switchItUp(number) {
//   //Write your own Code!
//   switch (number) {
//     case 0:
//       return "Zero";
//     case 1:
//       return "One";
//     case 2:
//       return "Two";
//     case 3:
//       return "Three";
//     case 4:
//       return "Four";
//     case 5:
//       return "Five";
//     case 6:
//       return "Six";
//     case 7:
//       return "Seven";
//     case 8:
//       return "Eight";
//     case 9:
//       return "Nine";
//     default:
//       return "Invalid number";
//   }
// }

// console.log(switchItUp(1));
// console.log(switchItUp(3));


// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(positiveSum([1, -4, 7, 12]));

// function getRealFloor(n) {
//   if (n <= 0) {
//     return n;
//   } else if (n < 13) {
//     return n - 1;
//   } else {
//     return n - 2;
//   }
// }
// console.log(getRealFloor(1))

// function sortByLength (array) {
//   // Return an array containing the same strings,
//   // ordered from shortest to longest
// array.sort((a,b) => a.length - b.length)
// return array
// }

// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])); 

// function solution(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       // Check if the current character is uppercase
//       if (char === char.toUpperCase() && i !== 0) {
//           // Add a space before the uppercase character
//           result += ' ';
//       }
//       result += char;
//   }
//   return result;
// }

// // Test cases
// console.log(solution("camelCasing")); // Output: "camel Casing"


// // // Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
// function problem(x) {
//   if (typeof x === 'number') {
//     return x * 50 + 6;
//   } else {
//     return "Error";
//   }
// }

// // Test cases
// console.log(problem(5));   // Output: 256 (5 * 50 + 6)
// console.log(problem(10));  // Output: 506 (10 * 50 + 6)
// console.log(problem("a")); // Output: "Error"


// function greet(name, owner) {
//   if (name === owner) {
//     return 'Hello boss';
//   } else {
//     return 'Hello guest';
//   }
// }

// // Test cases
// console.log(greet('John', 'John')); // Output: 'Hello boss'
// console.log(greet('Jane', 'John')); // Output: 'Hello guest'

// function disemvowel(str) {
//   // Define the regex pattern to match vowels (including capital vowels)
//   const vowels = /[aeiouAEIOU]/g;

//   // Use the replace method to remove vowels from the string and return the updated string
//   return str.replace(vowels, "");
// }

// console.log(disemvowel("This website is for losers 😅"));

// function peopleWithAgeDrink(old) {
//   if (old < 14) {
//     return `${old} --> drink toddy`;
//   } else if (old < 18) {
//     return `${old} --> drink coke`;
//   } else if (old < 21) {
//     return `${old} --> drink beer`;
//   } else {
//     return `${old} --> drink whisky`;
//   }
// };
// // } else if (old < 18 && old > 18) {

// console.log(peopleWithAgeDrink(13));
// console.log(peopleWithAgeDrink(17));
// console.log(peopleWithAgeDrink(20));
// console.log(peopleWithAgeDrink(30));

// function peopleWithAgeDrink2(old) {
//   let drink;
//   switch (true) {
//     case old < 14:
//       drink = "toddy";
//       break;
//     case old < 18:
//       drink = "coke";
//       break;
//     case old < 21:
//       drink = "beer";
//       break;
//     default:
//       drink = "whisky";
//   }
//   return `${old} --> drink ${drink}`;
// }

// console.log(peopleWithAgeDrink2(13), '-switch-');
// console.log(peopleWithAgeDrink2(17), '-switch-');
// console.log(peopleWithAgeDrink2(20), '-switch-');
// console.log(peopleWithAgeDrink2(30), '-switch-');


// // Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2) {
//   // moment of truth
//   if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(lovefunc(5, 8));
// console.log(lovefunc(6, 8));
// console.log(lovefunc(15, 8));

// function arithmetic(a, b, operator) {
//   switch (operator) {
//     case "add":
//       return a + b;
//     case "subtract":
//       return a - b;
//     case "multiply":
//       return a * b;
//     case "divide":
//       return a / b;
//     default:
//       return "Invalid operator";
//   }
// };


// console.log(arithmetic(5, 2, "add"));      
// console.log(arithmetic(5, 2, "subtract")); 
// console.log(arithmetic(5, 2, "multiply")); 
// console.log(arithmetic(5, 2, "divide"));   

// function findUniq(arr) {
//   // do magic
//   let uniqueNumber;
//   let counts = {};

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     counts[num] = (counts[num] || 0) + 1;
//   }
//   for (let num in counts) {
//     if (counts[num] === 1) {
//       uniqueNumber = parseFloat(num);
//       break;
//     }
//   }
//   return uniqueNumber;
// }

// console.log(findUniq([1, 1, 1, 2, 1, 1])); //=== 2
// console.log(findUniq([0, 0, 0.55, 0, 0])); //=== 0.55


// function boolToWord(bool) {
//   //...
//   if (bool === true) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }
// function boolToWordTernary(bool) {
//   return bool === true ? "Yes" : "No";
// }
// console.log(boolToWord(true));
// console.log(boolToWord(false));
// console.log(boolToWordTernary(true), "-> ternary");
// console.log(boolToWordTernary(false), "-> ternary");

// function points(games) {
//   let totalPoints = 0;
//   for (let match of games) {
//     let [x, y] = match.split(':').map(Number);
//     if (x > y) {
//       totalPoints += 3;
//     } else if (x === y) {
//       totalPoints += 1;
//     }
//   }
//   return totalPoints;
// }
// console.log(points(["3:1", "2:3", "5:1"]));



// function sumMix(x) {
//   return x.map(Number).reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sumMix(["1", "3", "5"]));

// const uniqueInOrder = function(iterable) {
//   //your code here - remember iterable can be a string or an array
//   if (!Array.isArray(iterable)) {
//     iterable = iterable.split('');
//   }

//   const uniqueArray = [];

//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       uniqueArray.push(iterable[i]);
//     }
//   }
//   return uniqueArray;
// };
// console.log(uniqueInOrder('AAAAAABBBCCCCCDDDAAABBB'));
// console.log(uniqueInOrder('ABBCcAD'));


// function longest(s1, s2) {
//   // your code
//   let combined = s1 + s2;
//   let uniqueChars = new Set(combined);
//   let sortedChars = [...uniqueChars].sort();
//   let result = sortedChars.join('');
//   return result;
// }

// let a = "xyaabbbccccdefww";
// let b = "xxxxyyyyabklmopq";
// console.log(longest(a, b));

// a = "abcdefghijklmnopqrstuvwxyz";
// console.log(longest(a, a));

// function enough(cap, on, wait) {
//   // your code here
//   let availableSpace = cap - on;
//   if (availableSpace >= wait) {
//     return 0;
//   } else {
//     return wait - availableSpace;
//   }
// }

// console.log(enough(10, 5, 5));
// console.log(enough(100, 60, 50)); 


// function century(year) {
//   let century = Math.ceil(year/100) 
//   return century
// }

// console.log(century(1705));

// function duplicateCount(text) {
//   //...
//   const lowerText = text.toLowerCase();
//   const charCount = {};
//   for (const char of lowerText) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   let duplicateCount = 0;
//   for (const char in charCount) {
//     if (charCount[char] > 1) {
//       duplicateCount++;
//     }
//   }
//   return duplicateCount;
// }

// console.log(duplicateCount("abcde"));
// console.log(duplicateCount("aabbcde"));

// function high(x) {
//   // Split the input string into words
//   const words = x.split(' ');

//   // Function to calculate the score of a word
//   const wordScore = (word) => {
//     let score = 0;
//     for (const char of word) {
//       score += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
//     }
//     return score;
//   };

//   // Initialize variables to keep track of the highest score and word
//   let highestScore = 0;
//   let highestWord = '';

//   for (const word of words) {
//     const score = wordScore(word);
//     if (score > highestScore) {
//       highestScore = score;
//       highestWord = word;
//     }
//   }

//   return highestWord;
// }


// console.log(high("man i need a taxi up to ubud"));
// console.log(high("what time are we climbing up the volcano")); 
// console.log(high("take me to semynak")); 
// console.log(high("ABBA")); 


// function simpleMultiplication(number) {
//   // your code........
//   return number % 2 === 0 ? number * 8 : number * 9;
// }

// console.log(simpleMultiplication(5));
// console.log(simpleMultiplication(10));


// // Given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
// function opposite(number) {
//   //your code here
//   return -number;
// }
// console.log(opposite(1));  // Output: -1
// console.log(opposite(14)); // Output: -14
// console.log(opposite(-34)); // Output: 34

// const quarterOf = (month) => {
//   // Your code here
//   return Math.ceil(month / 3);
// };

// console.log(quarterOf(11));

// function between(a, b) {
//   const numbers = [];
//   for (let i = a; i <= b; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(between(1, 50));


// Given a non-empty array of integers, return the result of multiplying the values together in order 

// function grow(x) {
//   if (!Array.isArray(x)) {
//     return 'not an array';
//   } else {
//     return x.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
//   }
// }

// console.log(grow([1, 2, 3, 4]));


// // Since each dragon takes 2 bullets to be defeated, the total number of bullets needed is dragons * 2. If the number of bullets the hero has is greater than or equal to this total, he will survive; otherwise, he will not.

// function hero(bullets, dragons) {
//   //Get Coding!
//   return bullets >= 2 * dragons;
// }


// console.log(hero(10, 5));
// console.log(hero(7, 4));

// function findDifference(a, b) {
//   //loading...
//   return Math.abs(a.reduce((acc, val) => acc * val, 1) - b.reduce((acc, val) => acc * val, 1));
// }

// console.log(findDifference([2, 2, 3], [5, 4, 1])); // Output should be 8

// let isAnagram = function(test, original) {
//   const sortedTest = test.toLowerCase().split('').sort().join('');
//   const sortedOriginal = original.toLowerCase().split('').sort().join('');
//   return sortedTest === sortedOriginal;
// };


// function removeSmallest(numbers) {
//   if (numbers.length === 0) return [];

//   // Find the index of the smallest element
//   const minIndex = numbers.indexOf(Math.min(...numbers));

//   // Create a new array without the smallest element
//   return numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));
// }


// function addFive(num) {
//   let total = num + 5;
//   return total;
// }

// function firstNonConsecutive(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1] + 1) {
//       return arr[i];
//     }
//   }
//   return null;
// }

// // You are given two interior angles (in degrees) of a triangle.Write a function to return the 3rd. Note: only positive integers will be tested.

// function otherAngle(a, b) {
//   return 180 - a - b;
// }

// function squareDigits(num) {
//   let numString = num.toString();
//   let result = '';

//   for (let i = 0; i < numString.length; i++) {
//     let squaredDigit = Math.pow(parseInt(numString[i]), 2).toString();

//     result += squaredDigit;
//   }

//   return parseInt(result);
// }

// // Example usage:
// console.log(squareDigits(9119)); // Output: 811181
// console.log(squareDigits(765));  // Output: 493625

// function testEven(n) {
//   //Your awesome code here!
//   return n % 2 === 0 && Number.isInteger(n);
// }

// function replace(s) {
//   //coding and coding....
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     if ('aeiouAEIOU'.includes(s[i])) {
//       result += '!';
//     } else {
//       result += s[i];
//     }
//   }
//   return result;
// }

// console.log(replace("HI!"));


// function removeUrlAnchor(url) {
//   return url.split('#')[0];
// }

// console.log(removeUrlAnchor("www.codewars.com#about"));


// // In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// function makeNegative(num) {
//   if (num > 0) {
//     return -num;
//   } else {
//     return num;
//   }
// }


// // Write a program that finds the summation of every number from 1 to num
// let summation = function(num) {
//   if (num < 0) {
//     return 0;
//   }
//   return num * (num + 1) / 2;
// };

// function factorial(n) {
//   if (n < 0 || n > 12) {
//     throw new RangeError('The input should be a non-negative integer less than or equal to 12.');
//   }
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));


// // returning 5 without using any of the characters 
// function unusualFive() {
//   return 'abcde'.length;
// }

// console.log(unusualFive());


// function multiTable(number) {
//   let table = '';
//   if (number > 0 && number < 11) {
//     for (let i = 1; i <= 10; i++) {
//       table += `${i} * ${number} = ${i * number}`;
//       if (i !== 10) {
//         table += '\n'; // Add new line except for the last row
//       }
//     }
//   }
//   return table;
// }

// console.log(multiTable(5));

// function multiTable2(number) {
//   let table = [];
//   if (number > 0 && number < 13) {
//     for (let i = 1; i < 13; i++) {
//       table.push(`${i} * ${number} = ${i * number}`);
//     }
//   }
//   return table.join('\n');
// }

// console.log(multiTable2(12));


// Simple, given a string of words, return the length of the shortest word(s).

// // String will never be empty and you do not need to account for different data types.
// function findShort(s) {
//   const words = s.split(' ');

//   let shortestLenght = Infinity;
//   for (let word of words) {
//     if (word.length < shortestLenght) {

//       shortestLenght = word.length;
//     }
//   }
//   return shortestLenght;
// }

// console.log(findShort("The quick brown fox jumps over the lazy dog"));



// let v1 = 10, v2 = 20, v3 = 30, v4 = 40, v5 = 50, v6 = 60;

// function equal1() {
//   return v1 + v1;
// }

// function equal2() {
//   return v4 - v5;
// }

// function equal3() {
//   return v1 * v3;
// }

// function equal4() {
//   return v5 / v2;
// }

// function equal5() {
//   return v3 % v1;
// }

// console.log(equal1()); // output: 20
// console.log(equal2()); // output: -10


// function minValue(values) {
//   const uniqueValues = [...new Set(values)];

//   uniqueValues.sort((a, b) => a - b);

//   const smallestNumber = parseInt(uniqueValues.join(''));

//   return smallestNumber;
// }

// console.log(minValue([1,3,1]));

// function move (position, roll) {
//   // return the new position
//   let newPosition = position + roll * 2;

//   return newPosition
// }

// console.log(move(3,6));

// function mouthSize(animal) {
//   // code here
//   if (animal.toLowerCase() === 'alligator') {
//     return "small";
//   } else {
//     return "wide";
//   }
// }

// console.log(mouthSize('frog'));


// function makeUpperCase(str) {
//   // Code here
//   return str.toUpperCase();
// }

// console.log(makeUpperCase("Shrimp"));

// function hexToDec(hexString) {
//   return parseInt(hexString, 16);
// }

// console.log(hexToDec("1A"));


// function mergeArrays(arr1, arr2) {
//   // Concatenate both arrays and remove duplicates by using Set
//   const mergedSet = new Set([...arr1, ...arr2]);

//   // Convert Set back to array and sort in ascending order
//   const mergedArray = [...mergedSet].sort((a, b) => a - b);

//   return mergedArray;
// }

// // Test cases
// console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));


// function rowSumOddNumbers(n) {
//   const firstNumber = n * n - n + 1;

//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     const oddNumber = firstNumber + 2 * i;
//     sum += oddNumber;
//   }
//   return sum;
// }

// console.log(rowSumOddNumbers(3));


// function validatePIN(pin) {
//   //return true or false
//   const pinRegex = /^\d{4}$|^\d{6}$/;
//   return pinRegex.test(pin);
// }

// console.log(validatePIN("1234"));
// console.log(validatePIN("12345"));

// function remove(str) {
//   if (str.endsWith('!')) {
//     return str.slice(0, -1);
//   } else {
//     return str;
//   }
// }

// console.log(remove('Hi!'));

// function position(letter) {
//   // Convert the input letter to lowercase (to handle uppercase input)
//   const lowercaseLetter = letter.toLowerCase();

//   // Calculate the position of the letter in the alphabet
//   const position = lowercaseLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

//   // Construct the output message
//   const output = `Position of alphabet: ${position}`;

//   return output;
// }

// console.log(position("z"));


// function expressionMatter(a, b, c) {
//   // Calculate three possible expressions and find the maximum result
//   const result1 = a * b * c;
//   const result2 = (a + b) * c;
//   const result3 = a * (b + c);

//   // Find the maximum result among the three expressions
//   const maxResult = Math.max(result1, result2, result3);

//   return maxResult;
// }

// console.log(expressionMatter(5, 1, 3));

// function nameShuffler(str) {
//   const words = str.split(' ');
//   if (words.length !== 2) {
//     return str;
//   }
//   const [firstName, lastName] = words;
//   const shuffledName = `${lastName} ${firstName}`;
//   return shuffledName;
// }


// function howManyLightsabersDoYouOwn(name) {
//   if (name === "Zach") {
//     return 18;
//   } else {
//     return 0;
//   }
// }

// console.log(howManyLightsabersDoYouOwn("Zach"));

// function take(arr, n) {
//   // Your code here
//   return arr.slice(0, n);
// }

// const findAverage = function(nums) {
//   // Code here
//   if (nums.length === 0) {
//     return 0;
//   }

//   let sum = nums.reduce((acc, curr) => acc + curr, 0);

//   const mean = sum / nums.length;

//   return mean;
// };

// console.log(findAverage([1, 2, 3, 4, 5]));


// function rainAmount(mm) {
//   if (mm < 40) {
//     return "You need to give your plant " + (40 - mm) + "mm of water";
//   } else if (mm === 40) {
//     return "Your plants have received the perfect amount of water today!";
//   } else {
//     return "Your plant has had more than enough water for today!";
//   }
// }

// console.log(rainAmount(60));


// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case '+':
//       return value1 + value2;
//     case '-':
//       return value1 - value2;
//     case '*':
//       return value1 * value2;
//     case '/':
//       if (value2 === 0) {
//         return 'Division by zero is not allowed';
//       }
//       return value1 / value2;
//     default:
//       return 'Invalid operation';
//   }
// }

// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('*', 5, 5));
// console.log(basicOp('/', 49, 7));


// function flattenAndSort(array) {
//   // Good luck, brave code warrior!
//   const flattenedArray = array.reduce((acc, curr) => acc.concat(curr), []);

//   const sortedArray = flattenedArray.sort((a, b) => a - b);

//   return sortedArray;
// }

// console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));


// function updateLight(current) {
//   //your code here!
//   if (current === "green") {
//     return 'yellow';
//   } else if (current === 'yellow') {
//     return 'red';
//   } else if (current === 'red') {
//     return 'green';
//   } else {
//     return 'unknown';
//   }
// }

// console.log(updateLight('green'));


// function trafficLichtController() {
//   let currentLight = 'green';
//   let amountOfCycles = 0;

//   function updateLight() {
//     if (amountOfCycles < 3) {

//       if (currentLight === 'green') {
//         console.log("Green light -> Yellow light");
//         currentLight = 'yellow';
//         setTimeout(updateLight, 3000);
//       } else if (currentLight === 'yellow') {
//         console.log('Yellow light -> Red light');
//         currentLight = 'red';
//         setTimeout(updateLight, 2000);
//       } else if (currentLight === 'red') {
//         console.log('Red light -> Green light');
//         currentLight = 'green';
//         setTimeout(updateLight, 4000);
//         amountOfCycles++;
//       }
//     } else {
//       console.log('3 - Cycles completed');
//     }
//   }
//   updateLight();
// }

// trafficLichtController();


// function addLength(str) {
//   const words = str.split(' ')
//   const result = words.map(word => `${word} ${word.length}`)

//   return result
// }

// console.log(addLength('hi'));
// console.log(addLength('hi. How are you?'));

// function main(verb, noun) {
//   return verb + noun;
// }

// console.log(main("built", "Canada"));

// function hello(name) {
//   if (name && name.length > 0) {
//     name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     return `Hello, ${name}!`;
//   } else {
//     return `Hello, World!`;
//   }
// }


// function strCount(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(strCount("Hello", 'o'));
// console.log(strCount("Hello", 'l'));
// console.log(strCount("", 'z'));

// function correct(string) {
//   return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
// }

// console.log(correct("510"));

// function plural(n) {
//   // ...
//   return n !== 1;
// }

// plural(5);



// function bmi(weight, height) {
//   let bmi = weight / (height * height);

//   if (bmi <= 18.5) {
//     return "Underweight";
//   } else if (bmi <= 25.0) {
//     return "Normal";
//   } else if (bmi <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// console.log(bmi(80, 1.8));


// function sayHello(name, city, state) {
//   // Join the name array into a single string
//   var fullName = name.join(' ');

//   // Return the welcome message
//   return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
// }
// console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));


// function getLength(arr) {
//   //return length of arr
//   return arr.length;
// }
// function getFirst(arr) {
//   //return the first element of arr
//   return arr[0];
// }
// function getLast(arr) {
//   //return the last element of arr
//   return arr[arr.length - 1];
// }
// function pushElement(arr) {
//   const el = 1;
//   //push el to arr
//   arr.push(el);
//   return arr;
// }
// function popElement(arr) {
//   //pop an element from arr
//   arr.pop();
//   return arr;
// }

// function invert(array) {
//   return array.map(x => x * -1);
// }

// console.log(invert([1, 2, 3, 4, 5]));
// console.log(invert([1, -2, 3, -4, 5]));
// console.log(invert([]));


// function animal(obj) {
//   return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
// }

// console.log(animal({ name: "dog", legs: 4, color: "white" }));

// function calculateAge1(age) {
//   let currentAge = 4;
//   if (age > currentAge) {
//     let newAge = currentAge + (age - currentAge);
//     return `You are ${newAge} years old`;
//   } else if (age < currentAge) {
//     let years = currentAge - age;
//     return `You are ${years} years old`;
//   } else {
//     return `You are ${currentAge} years old`;
//   }
// }
// console.log(calculateAge1(6));


// function calculateAge2(yearOfBirth, yearToCount) {
//   let difference = yearToCount - yearOfBirth;
//   if (difference > 0) {
//     return "You are " + difference + (difference > 1 ? " years" : " year") + " old.";
//   } else if (difference < 0) {
//     return "You will be born in " + Math.abs(difference) + (Math.abs(difference) > 1 ? " years." : " year.");
//   } else {
//     return "You were born this very year!";
//   }
// }


// console.log(calculateAge2(2017, 2025), '2nd version');
// console.log(calculateAge2(2025, 2017), '2nd version');
// console.log(calculateAge2(2025, 2025), '2nd version');


// //replace vowel with !
// function replace(s) {
//   //coding and coding....
//   return s.replace(/[aeiouAEIOU]/g, '!');

// }

// console.log(replace("this is a pen"));

// function reverse(string) {
//   //your code here

//   let words = string.split(' ');
//   let reverseWords = words.reverse();
//   let reversedString = reverseWords.joing(' ');
//   return reversedString;
// }


// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// console.log(solution('abc', 'bc'));
// console.log(solution('abc', 'd'));


// var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n";

// function Dad() {
//   //select some variable to combine "Dad"
//   return d1 + a2 + d2;
// }

// function Bee() {
//   //select some variable to combine "Bee"
//   return b1 + e2 + e2;
// }

// function banana() {
//   //select some variable to combine "banana"
//   return b2 + a2 + n2 + a2 + n2 + a2;
// }

// console.log(Dad());
// console.log(Bee());
// console.log(banana());




// function rowWeights(array) {
//   let team1 = 0, team2 = 0;


//   for (let i = 0; i < array.length; i++) {
//     // If the index is even, add the weight to team 1
//     if (i % 2 === 0) {
//       team1 += array[i];
//     }
//     // If the index is odd, add the weight to team 2
//     else {
//       team2 += array[i];
//     }
//   }

//   // Return an array with the total weights of team 1 and team 2
//   return [team1, team2];
// }

// console.log(rowWeights([50, 60, 70, 80]));


const areaOrPerimeter = function(l, w) {
  // Return your answer
  if (l === w) {
    const square = l * w;
    return `The area of the square is ${square}m`;
  } else {
    const perimeter = 2 * (l + w);
    return `The perimeter of the rectangle is ${perimeter}m`;
  }
};

console.log(areaOrPerimeter(6, 10));
console.log(areaOrPerimeter(3, 3));


const capitals = function(word) {
  let indices = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      indices.push(i);
    }
  }
  return indices;
};

console.log(capitals("CodEWaRs"));

const humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  } else {
    catYears = 15 + 9 + (humanYears - 2) * 4;
    catYears = 15 + 9 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));


function reverseWords(str) {
  return str.split(' ').map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');
}

console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));


function printArray(array) {
  //show me the code!
  return array.join(",");
}

const inputArray = ["h", "o", "l", "a"];
const outputString = printArray(inputArray);
console.log(outputString);

function getDrinkByProfession(param) {
  const professionToDrink = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  };

  const drink = professionToDrink[param.toLowerCase()];
  return drink ? drink : "Beer";
}

console.log(getDrinkByProfession("Jabroni"));

function getRealFloor(n) {
  if (n > 0 && n < 13) {
    return n - 1;
  } else if (n > 13) {
    return n - 2;
  } else {
    return n;
  }
}

console.log(getRealFloor(1));

function multipleOfIndex(array) {
  return array.filter((num, index) => num % index === 0 || num % index === 0);
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));

function getChar(c) {
  // ...
  return String.fromCharCode(c);
}

function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}


function whatday(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}

function betterThanAve(classPoints, yourPoints) {
  // Calculate the sum of the class points
  let sum = classPoints.reduce((a, b) => a + b, 0);

  // Calculate the average score of the class
  let average = sum / classPoints.length;

  // Compare your score with the average
  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
}


function include(arr, item) {
  return arr.includes(item);
}




function gimme(triplet) {
  const sortedTriplet = triplet.slice().sort((a, b) => a - b);
  const middleValue = sortedTriplet[1];

  return triplet.indexOf(middleValue);
}

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));


function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) {
    return 0;
  }

  array.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 1; i < array.length - 1; i++) {
    sum += array[i];
  }

  return sum;
}

function remainder(n, m) {
  let larger = Math.max(n, m);
  let smaller = Math.min(n, m);

  return larger % smaller;
}

function findNeedle(haystack) {
  const position = haystack.indexOf("needle");
  return "found the needle at position " + position;
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));


function spEng(sentence) {
  const lowerCaseSentence = sentence.toLowerCase();

  return lowerCaseSentence.includes("english");
}

console.log(spEng("abcEnglishdef"));
console.log(spEng("abcnEglishsef"));
console.log(spEng("eNglisH is fun!"));


function dnaStrand(dna) {
  const complements = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
  };

  return dna.split('').map(nucleotide => complements[nucleotide]).join('');
}

console.log(dnaStrand("ATTGC")); // Output: "TAACG"
console.log(dnaStrand("GTAT"));  // Output: "CATA"


function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a);
  
  let sum = 0;
  
  for (let i = 0; i < arr.length - 1; i++) {
      sum += arr[i] - arr[i + 1];
  }
  
  return sum;
}


function abbrevName(name) {
  let words = name.split(' ');
  
  return words[0][0].toUpperCase() + '.' + words[1][0].toUpperCase();
}

console.log(abbrevName("Sam Harris"));  // Output: S.H
console.log(abbrevName("patrick feeney"));  // Output: P.F

function oddOrEven(array) {
  //enter code here
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum % 2 === 0 ? "even" : "odd";
}

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
console.log(isEvenOrOdd(4)); // Output: "Even"
console.log(isEvenOrOdd(7)); // Output: "Odd"

function highAndLow(numbers) {
  const numArray = numbers.split(' ').map(Number);
  const maxNum = Math.max(...numArray);
  const minNum = Math.min(...numArray);
  
  return `${maxNum} ${minNum}`;
}

function xor(a, b) {
  // TODO: Program Me
  return (a || b) && !(a && b);
}


function stringClean(s) {
  return s.replace(/[0-9]/g, '');
}

function mango(quantity, price) {
    const setsOf3 = Math.floor(quantity / 3); 
    const totalCost = (setsOf3 * 2 + (quantity % 3)) * price;
    
    return totalCost;
}

