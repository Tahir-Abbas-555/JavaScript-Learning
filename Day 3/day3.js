// Day 3: JavaScript Basics - Strict Mode and Data Types

"use strict"; // Enforces strict mode, ensuring cleaner code and avoiding common errors.

// Data Types in JavaScript:

// 1. Number: Represents both integers and floating-point numbers.
let age = 25;
let price = 19.99; // Example of a floating-point number

// 2. BigInt: For numbers larger than the Number type can safely represent (greater than 2^53 - 1).
let bigIntExample = 123456789012345678901234567890n; // Use 'n' at the end to define a BigInt

// 3. String: Text data enclosed in quotes (single or double quotes work).
let name = "Tahir Abbas";
let greeting = 'Hello, world!';

// 4. Boolean: Represents logical values true or false.
let isJavaScriptFun = true;
let isColdToday = false;

// 5. Null: Represents an intentional absence of any value.
let emptyValue = null; // Explicitly nothing

// 6. Undefined: A variable that has been declared but not yet assigned a value.
let uninitializedVar; // This variable is declared but not defined, so it's undefined.

// 7. Symbol: A unique identifier, mainly used for object properties that shouldn't conflict.
let uniqueKey = Symbol("id");

// 8. Object: A complex data structure used to store collections of properties.
let person = {
    name: "Tahir",
    age: 21,
    isDeveloper: true
};

// 9. Function: Functions are objects but treated as their own type. They define reusable blocks of code.
function greet() {
    console.log("Hello, World!");
}

// Calling the function
greet(); // Output: Hello, World!

// Summary of Data Types
console.log(typeof age); // "number"
console.log(typeof bigIntExample); // "bigint"
console.log(typeof name); // "string"
console.log(typeof isJavaScriptFun); // "boolean"
console.log(typeof emptyValue); // "object" (this is a known quirk of JavaScript)
console.log(typeof uninitializedVar); // "undefined"
console.log(typeof uniqueKey); // "symbol"
console.log(typeof person); // "object"
console.log(typeof greet); // "function"


// in table form

console.table([age, bigIntExample, name, isJavaScriptFun, emptyValue, uninitializedVar, uniqueKey, person, greet])


// null is a Object
console.log(typeof null)