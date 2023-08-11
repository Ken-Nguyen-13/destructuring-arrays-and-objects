"use strict";

////////////////////////////////---OBJECTS---////////////////////////////////

// Exercise 1
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // 8 ✅
console.log(yearNeptuneDiscovered); // 1846 ✅

// Exercise 2
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets: numPlanets2, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // [1846, 1659] ❌ --> {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Exercise 3
function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })); // Your name is Alejandro and you like purple ✅
console.log(getUserData({ firstName: "Melissa" })); // Your name is Melissa and you like green ✅
console.log(getUserData({})); // Your name is undefined and you like green ✅

////////////////////////////////---ARRAYS---////////////////////////////////

// Exercise 1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya ✅
console.log(second); // Marisa ✅
console.log(third); // Chi ✅

// Exercise 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // Raindrops on roses ✅
console.log(whiskers); // whiskers on kittens ✅
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"] ✅

// Exercise 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // [10, 30, 20] ✅'

////////////////////////////////---ES5_TO_ES2015_REFACTORING---////////////////////////////////

// Exercise 1
// ES5
var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

var a = obj.numbers.a;
var b = obj.numbers.b;
console.log(a, b);

// ES2015
const {
  numbers: { a: c, b: d },
} = obj;
console.log(c, d);

// Exercise 2
//ES5
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
console.log(arr);

//ES2015
const arr2 = ["a", "b"];
[arr2[0], arr2[1]] = [arr2[1], arr2[0]];
console.log(arr2);

////////////////////////////////---CHALLENGE_EXERCISE---////////////////////////////////

/*
Write a function called raceResults which accepts a single array argument. 
It should return an object with the keys first, second, third, and rest.

first: the first element in the array
second: the second element in the array
third: the third element in the array
rest: all other elements in the array
Write a one line function to make this work using
An arrow function
Destructuring
‘Enhanced’ object assignment (same key/value shortcut)
 */

const raceResults = (arrOfRacers) => {
  let obj3 = {};
  [obj3.firstPlace, obj3.secondPlace, obj3.thirdPlace, ...obj3.runnerUps] =
    arrOfRacers;
  return obj3;
};
console.log(
  raceResults(["Tom1", "Tom2", "Tom3", "Tom4", "Tom5", "Tom6", "Tom7"])
);

////////////////////////////////---CHALLENGE_EXERCISE_2---////////////////////////////////

let user = { name: "John", years: 30 };

const {name, years: age, isAdmin = false} = user;

console.log(name); // John ✅
console.log(age); // 30 ✅
console.log(isAdmin); // false ✅

////////////////////////////////---CHALLENGE_EXERCISE_3---////////////////////////////////

/*There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.

What I Can't Figure Out: 
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

function Salaries(salary1, salary2, salary3) {
    this.tom1 = salary1 || 0;
    this.tom2 = salary2 || 0;
    this.tom3 = salary3 || 0;
}
const salariesObj1 = new Salaries(100, 300, 250);
console.log(salariesObj1);

const salariesObj2 = new Salaries(1, 2, 3);
console.log(salariesObj2);

const salariesObj3 = new Salaries(100, 2500);
console.log(salariesObj3);

const salariesObj4 = new Salaries(1, 1.5);
console.log(salariesObj4);

const salariesObj5 = new Salaries(10000, 12340, 600);
console.log(salariesObj5);

function topSalary({tom1: tom1Salary, tom2: tom2Salary, tom3: tom3Salary} = {}) {
    let topPaid = Math.max(tom1Salary, tom2Salary, tom3Salary);
    return topPaid > 0 ? topPaid : null;
}
console.log(topSalary(salariesObj1))
console.log(topSalary(salariesObj2))
console.log(topSalary(salariesObj3))
console.log(topSalary(salariesObj4))
console.log(topSalary(salariesObj5))
console.log(topSalary())

