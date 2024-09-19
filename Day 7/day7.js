// Day 7: JavaScript Operators - Arithmetic, Assignment, Comparison, Logical, and Ternary

"use strict"; // Enforcing strict mode

// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus (Remainder): 1
console.log(a ** b); // Exponentiation: 10^3 = 1000

// 2. Increment and Decrement Operators
let x = 5;
x++; // Post-increment: x becomes 6
console.log(x); // 6

x--; // Post-decrement: x becomes 5 again
console.log(x); // 5

// Pre-increment/decrement
let y = 7;
console.log(++y); // 8 (Pre-increment: y is increased before logging)
console.log(--y); // 7 (Pre-decrement)

// 3. Assignment Operators
let z = 10;
z += 5; // Equivalent to z = z + 5
console.log(z); // 15

z *= 2; // Equivalent to z = z * 2
console.log(z); // 30

z /= 3; // Equivalent to z = z / 3
console.log(z); // 10

z %= 3; // Equivalent to z = z % 3
console.log(z); // 1

// 4. Comparison Operators
let val1 = 10;
let val2 = "10";

console.log(val1 == val2); // true (Loose equality, type conversion happens)
console.log(val1 === val2); // false (Strict equality, no type conversion)

console.log(val1 != val2); // false (Loose inequality, considers the values equal)
console.log(val1 !== val2); // true (Strict inequality, considers the types different)

console.log(val1 > 5); // true
console.log(val1 < 20); // true
console.log(val1 >= 10); // true
console.log(val1 <= 9); // false

// 5. Logical Operators
let isAdult = true;
let hasLicense = false;

console.log(isAdult && hasLicense); // false (AND: both conditions must be true)
console.log(isAdult || hasLicense); // true (OR: at least one condition must be true)
console.log(!isAdult); // false (NOT: reverses the boolean value)

// Problem: Be careful with non-boolean values in logical operations
console.log(0 || "Hello"); // "Hello" (0 is falsy, so "Hello" is returned)
console.log(1 && "Hello"); // "Hello" (1 is truthy, so "Hello" is returned)
console.log(null || undefined); // undefined (both are falsy)

// 6. Ternary (Conditional) Operator
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // "Yes, you can vote."

// Problem: Ternary operators can become hard to read if nested, so avoid excessive nesting.
let speed = 70;
let speedMessage = speed > 100 ? "Too fast" : speed < 30 ? "Too slow" : "Just right";
console.log(speedMessage); // "Just right"

// Advanced: Nullish Coalescing Operator (??)
// This operator returns the right-hand value if the left-hand value is null or undefined.
let user;
console.log(user ?? "Guest"); // "Guest" (because user is undefined)

// Problem: Be careful using `||` vs `??`. 
// `||` returns the right-hand value if the left-hand value is falsy, including 0, "", false, etc.
console.log(0 || "Guest"); // "Guest" (0 is falsy)
console.log(0 ?? "Guest"); // 0 (because 0 is not null or undefined)
