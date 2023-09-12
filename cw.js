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