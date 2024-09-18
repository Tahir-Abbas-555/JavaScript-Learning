// Day 4: Type Conversion, Coercion, and Common Problems in JavaScript

"use strict"; // Enforces strict mode

// Type Conversion (Explicit) - Manually converting from one type to another

// Converting string to number
let strNum = "42";
let convertedNumber = Number(strNum); 
console.log(typeof convertedNumber); // "number"
console.log(convertedNumber); // 42

// Problem 1: What if the string contains non-numeric characters?
let invalidStrNum = "42abc";
let invalidConversion = Number(invalidStrNum);
console.log(invalidConversion); // NaN (Not a Number) - This happens when the string can't be fully converted

// Converting number to string
let num = 100;
let convertedString = String(num);
console.log(typeof convertedString); // "string"
console.log(convertedString); // "100"

// Converting boolean to number
let isTrue = true;
let convertedBoolToNum = Number(isTrue); 
console.log(convertedBoolToNum); // 1 (true is converted to 1, false would be 0)

// Problem 2: Beware of implicit conversions!
console.log(Number(false)); // 0
console.log(Number(true));  // 1
console.log(Number(null));  // 0
console.log(Number(undefined)); // NaN (undefined can't be converted to a number)

// Type Coercion (Implicit) - JavaScript automatically converts types in certain situations

let result = "5" + 3; // "5" is coerced to a string, so result is a concatenated string
console.log(result); // "53"

// Problem 3: Confusing implicit type coercion
let weirdResult = "5" - 3; // "5" is coerced to number, subtraction happens
console.log(weirdResult); // 2 (coercion is automatic, but the result can be confusing)

let subResult = "5" - "2"; // Both are coerced to numbers for subtraction
console.log(subResult); // 3

// Interesting Coercion Cases
console.log(true + false); // 1 (true is 1, false is 0)
console.log("10" - "4" + "2"); // 62 (Subtraction happens first as numbers, then "6" is concatenated with "2")

// Problem 4: Coercion leads to unexpected results
console.log(null + 5); // 5 (null is coerced to 0)
console.log(undefined + 5); // NaN (undefined can't be converted to a valid number)

// Converting to boolean (Explicit)
console.log(Boolean(0)); // false (0 is falsy)
console.log(Boolean(1)); // true (non-zero numbers are truthy)
console.log(Boolean("")); // false (empty string is falsy)
console.log(Boolean("hello")); // true (non-empty string is truthy)

// Problem 5: Not all falsy values are obvious
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false
console.log(Boolean(NaN));       // false
console.log(Boolean([]));        // true (empty arrays are truthy)
console.log(Boolean({}));        // true (empty objects are truthy)
