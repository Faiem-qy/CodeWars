
const swapper = function(key1, object1, key2, object2) {
  console.log("Swap!");

  // Put your solution here



  console.log("object1: ", object1);
  console.log("object2: ", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });




// Swap!
// object1: { a: 5 , b: 2, c: 3 }
// object2: { a: 4, b: 3, c: 1 }
// Swap!
// object1: { a: 8 , b: 12, c: 6 }
// object2: { a: 5, b: 1, c: 2, d: 7}
// Swap!
// object1: { a: 1 , b: 3, c: 5, d: 7 }
// object2: { a: 4, b: 0, c: 3 }


INSERT INTO famous_people(first_name, last_name, birthdate) VALUES('Paul', 'Giamatti', '1967-06-06');

function twoSort(s) {
  s.sort();
  const firstString = s[0];

  const result = firstString.split('').join('***');
  return result;
}

const inputArray = ['banana', 'apple', 'orange', 'grape'];
const output = twoSort(inputArray);
console.log(output);