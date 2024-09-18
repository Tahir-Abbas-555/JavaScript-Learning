// Day 5: Comparison Operators and Equality in JavaScript

"use strict"; // Enforcing strict mode

// 1. Strict Equality (===) - No type conversion, checks both value and type
let a = 5;
let b = "5";

console.log(a === b); // false (strict equality checks type, number is not equal to string)
console.log(a === 5); // true (same value and type)

// 2. Loose Equality (==) - Performs type conversion before comparison
console.log(a == b); // true (JavaScript coerces "5" into a number, then compares)

// Problem 1: Loose equality can lead to unexpected results
console.log(0 == false); // true (0 is falsy and false is falsy, so they're considered equal)
console.log("" == false); // true (empty string is falsy too)
console.log(null == undefined); // true (null and undefined are considered equal with loose equality)

console.log(0 === false); // false (strict equality, different types: number and boolean)
console.log("" === false); // false (strict equality, string and boolean are different types)
console.log(null === undefined); // false (strict equality, different types)

// 3. Comparison operators (>, <, >=, <=)
let x = 10;
let y = 20;

console.log(x > y); // false (10 is less than 20)
console.log(x < y); // true
console.log(x >= 10); // true (x is equal to 10)
console.log(x <= 20); // true (x is less than 20)

// Problem 2: String comparison is based on lexicographical order (alphabetical order)
console.log("apple" > "banana"); // false (because "a" comes before "b")
console.log("2" > "10"); // true (compares strings, not numbers! "2" comes after "1")

// 4. Best practice: Always use strict equality (===) to avoid unexpected type coercion issues

// 5. Edge cases for equality
console.log(NaN === NaN); // false (NaN is never equal to NaN)
console.log(Object.is(NaN, NaN)); // true (use Object.is() for proper equality check of NaN)

console.log(null === undefined); // false (they are different types)
console.log(null == undefined); // true (they are loosely equal)
