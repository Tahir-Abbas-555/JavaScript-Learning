// Day 6: Summary of JavaScript Data Types - Primitive and Non-Primitive

"use strict"; // Enforcing strict mode

// Primitive Data Types
// These types are immutable and passed by value

// 1. Number: Represents both integer and floating-point numbers.
let num = 42; // Example of a number
console.log(typeof num); // "number"

// 2. BigInt: For integers larger than the Number type can safely represent.
let bigIntNum = 1234567890123456789012345678901234567890n; // BigInt literal
console.log(typeof bigIntNum); // "bigint"

// 3. String: Represents text. Immutable and enclosed in quotes.
let str = "Hello, World!";
console.log(typeof str); // "string"

// 4. Boolean: Represents logical values true or false.
let isTrue = true;
let isFalse = false;
console.log(typeof isTrue); // "boolean"

// 5. Null: Represents the intentional absence of any value.
let emptyValue = null;
console.log(typeof emptyValue); // "object" (This is a known quirk in JavaScript)

// 6. Undefined: Represents a variable that has been declared but not yet assigned a value.
let undefinedValue;
console.log(typeof undefinedValue); // "undefined"

// 7. Symbol: Represents unique and immutable values, often used as object property keys.
let uniqueSymbol = Symbol("id");
console.log(typeof uniqueSymbol); // "symbol"

// Non-Primitive Data Types
// These types are mutable and passed by reference

// 1. Object: A collection of key-value pairs. Mutable and used to store complex data.
let person = {
  name: "Tahir",
  age: 21
};
console.log(typeof person); // "object"

// 2. Array: A special type of object used to store ordered collections of values.
let fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // "object"
console.log(Array.isArray(fruits)); // true (Check if it's an array)

// 3. Function: A block of code designed to perform a particular task. Functions are objects in JavaScript.
function greet() {
  console.log("Hello!");
}
console.log(typeof greet); // "function"

// 4. Date: A built-in object to handle dates and times.
let now = new Date();
console.log(typeof now); // "object"

// 5. RegExp: A built-in object used for pattern matching in strings.
let pattern = /abc/;
console.log(typeof pattern); // "object"

// Summary of Data Types
console.log("Primitive Data Types:");
console.log("Number:", typeof num);
console.log("BigInt:", typeof bigIntNum);
console.log("String:", typeof str);
console.log("Boolean:", typeof isTrue);
console.log("Null:", typeof emptyValue);
console.log("Undefined:", typeof undefinedValue);
console.log("Symbol:", typeof uniqueSymbol);

console.log("\nNon-Primitive Data Types:");
console.log("Object:", typeof person);
console.log("Array:", typeof fruits, Array.isArray(fruits)); // true indicates it is an array
console.log("Function:", typeof greet);
console.log("Date:", typeof now);
console.log("RegExp:", typeof pattern);
