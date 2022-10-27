console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// Write a function that takes in a number parameter and
// returns a function that adds the number parameter with
// a new number parameter.

// Declare a function plus that takes in a number parameter.
// Inside the body of plus, use the return keyword to
//  return an anonymous function
// The return function will take in a plusNumber parameter,
//  and return the value of plusNumber with the first parameter number
// Next, declare a variable plus15 that is assigned the
//  value of plus with 15 passed in
// console.log the result of plus15 with 10 passed in
// End result should resemble:
//  console.log(plus15(10)) // Outputs 25

function plus(number) {
  return function (plusNumber = 0) {
    plusNumber += number;
    return plusNumber;
  };
}

let plus15 = plus(15);
console.log(plus15(10));
let plus47 = plus(47);
console.log(plus47(12));
console.log(plus47());

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
// Use the Array forEach method to print the names of
// each user within the list. Start with the following code:

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// console.log(users);
// console.log(users[0]);
// console.log(users[3].name);
users.forEach((element) => {
  console.log(element.name);
});

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
// Use the Array map method to return a new array just
// containing objects with names and scores. Start with the
// previously defined users array.

users.map((element) => {
  console.log(element.name, element.score);
});

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
// Use the Array filter method to return a new array
// that only contains users that are listed as active.
// Start with the previously defined users array.

let result = users.filter((element) => {
  return element.isActive == true;
});

console.log(result);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
// Use the Array sort method to sort the users array in-place
// with the users sorted in descending order by score. Start
// with the previously defined users array.
let newResult = users.sort((a, b) => b.score - a.score);
console.log(newResult);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");
// Use the Array reduce method to return sum of all
// users' scores. Once you have the sum of all scores,
// find the average score from the users. Start with the
//  previously defined users array.

const arrayScoreSum = users.reduce((acc, curr) => {
  acc += curr.score;
  return acc;
}, 0);

const arrayScoreAvr = arrayScoreSum / users.length;

console.log(arrayScoreSum);
console.log(arrayScoreAvr);
