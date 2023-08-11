"use strict";
const arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e, f] = arr;
console.log(arr, a, b, c, d, e, f);

let var1 = 1;
let var2 = 2;
console.log(var1, var2);

// [var1, var2] = [var2, var1] // --> Returns error cannot set properties of undefined setting "2"
[var1, var2] = [var2, var1]; // --> Returns console.log(...) is not a function WHEN line 8 doesn't end in a ";"
console.log(([var1, var2] = [var2, var1])); // --> Returns an array? [2, 1]
console.log(var1, var2); // --> Doesn't return an array? "2 1"

let g = 1;
let h = 2;
console.log(g, h);
const arr2 = [8, 9];
[g, h] = arr2;
console.log(g, h);

let i = 1;
let j = 2;
const obj = {
  key1: 3,
  key2: 4,
};
console.log(i, j);
({ key1: i, key2: j } = obj); //--> Returns console.log(...) is not a function WHEN line 28 doesn't end in a ";"
console.log(i, j);

const obj2 = {
  key1: 1,
  key2: 2,
  nestedObj: {
    key3: 3,
    key4: 4,
  },
};
const {key1: k, key2: l, nestedObj: { key3: m, key4: n }} = obj2;
console.log(k,l,m,n) // --> "1 2 3 4"!!!

const arr3 = [1, 2, 3];
let obj3 = {};
[obj3.a, obj3.b, obj3.c] = arr3;
console.log(obj3)
