// Day 10: Working with Numbers and Math in JavaScript

"use strict"; // Enforcing strict mode

// 1. Declaring Numbers
let score = 100;  // Integer
let temperature = 36.5;  // Floating-point number

console.log(score); // Output: 100
console.log(temperature); // Output: 36.5

// 2. Number Methods
let numString = "123.45";

// a. Converting string to number
let num = Number(numString); // Converts string to number
console.log(num); // Output: 123.45

// b. parseInt and parseFloat
let intNum = parseInt(numString); // Extracts integer part
console.log(intNum); // Output: 123

let floatNum = parseFloat(numString); // Extracts floating-point number
console.log(floatNum); // Output: 123.45

// c. toFixed - Rounding numbers to a fixed number of decimals
let roundedNumber = num.toFixed(2); // Rounds to 2 decimal places
console.log(roundedNumber); // Output: 123.45

// d. toString - Convert a number to a string
let numberAsString = score.toString();
console.log(numberAsString); // Output: "100"

// 3. Working with Math Object

// a. Math.round - Rounds to the nearest integer
console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(4.3)); // Output: 4

// b. Math.ceil and Math.floor
console.log(Math.ceil(4.1)); // Output: 5 (rounds up)
console.log(Math.floor(4.9)); // Output: 4 (rounds down)

// c. Math.abs - Returns the absolute value
let negativeNumber = -25;
console.log(Math.abs(negativeNumber)); // Output: 25

// d. Math.max and Math.min - Find the maximum and minimum value from a list
console.log(Math.max(10, 20, 30, 5, 50)); // Output: 50
console.log(Math.min(10, 20, 30, 5, 50)); // Output: 5

// e. Math.pow - Exponentiation
console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)

// f. Math.sqrt - Square root
console.log(Math.sqrt(25)); // Output: 5

// g. Math.random - Generate a random number between 0 and 1
console.log(Math.random()); // Output: A random decimal number between 0 and 1

// To generate a random integer between a specific range (e.g., 1 to 10):
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); // Output: A random integer between 1 and 10

// h. Math.trunc - Truncate the decimal part
console.log(Math.trunc(4.9)); // Output: 4

// 4. Special Number Values

// a. Infinity
console.log(1 / 0); // Output: Infinity

// b. NaN (Not a Number)
let invalidNum = Number("Hello");
console.log(invalidNum); // Output: NaN

// c. isNaN - Check if a value is NaN
console.log(isNaN(invalidNum)); // Output: true

// d. Number.MAX_VALUE and Number.MIN_VALUE
console.log(Number.MAX_VALUE); // Output: The largest number possible in JavaScript
console.log(Number.MIN_VALUE); // Output: The smallest number possible in JavaScript

// 5. Handling Precision Issues in JavaScript
let preciseSum = 0.1 + 0.2;
console.log(preciseSum); // Output: 0.30000000000000004 (due to floating-point precision issues)

// Solution for precision issues
let fixedSum = Number(preciseSum.toFixed(2));
console.log(fixedSum); // Output: 0.30

let value = 123.456789;

console.log(value.toPrecision(5)); // Output: "123.46" (5 total digits, rounded)
console.log(value.toPrecision(3)); // Output: "123" (3 total digits, rounded)
console.log(value.toPrecision(8)); // Output: "123.45679" (8 total digits)
console.log((0.0001234).toPrecision(3)); // Output: "0.000123" (3 significant digits)

let bigNumber = 123456789.12345;

console.log(bigNumber.toLocaleString()); // Output: "123,456,789.123" (default locale, typically US)

// Format with specific locales
console.log(bigNumber.toLocaleString('en-US')); // Output: "123,456,789.123" (US English)
console.log(bigNumber.toLocaleString('de-DE')); // Output: "123.456.789,123" (German formatting, commas as decimals)

// Format as currency
let price = 2500;

console.log(price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // Output: "$2,500.00" (US Dollar)
console.log(price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })); // Output: "2.500,00 €" (Euro)
console.log(price.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })); // Output: "￥2,500" (Japanese Yen)

let smallest = Math.min(5, 10, -3, 50, 0);
console.log(smallest); // Output: -3 (smallest value in the list)

let noValue = Math.min(); // When no argument is passed
console.log(noValue); // Output: Infinity

let largest = Math.max(5, 10, -3, 50, 0);
console.log(largest); // Output: 50 (largest value in the list)

let noMaxValue = Math.max(); // When no argument is passed
console.log(noMaxValue); // Output: -Infinity


// Finding min and max in an array using spread operator
let numbers = [5, 10, -3, 50, 0];

let smallestInArray = Math.min(...numbers);
console.log(smallestInArray); // Output: -3

let largestInArray = Math.max(...numbers);
console.log(largestInArray); // Output: 50