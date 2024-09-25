// Day 12: Arrays in JavaScript

"use strict"; // Enforcing strict mode

// 1. Creating Arrays
let fruits = ["Apple", "Banana", "Mango", "Orange"]; // Array with string elements
let numbers = [1, 2, 3, 4, 5]; // Array with number elements
let mixedArray = ["Text", 42, true, { key: "value" }]; // Mixed array (strings, numbers, booleans, objects)

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed Array:", mixedArray);

// 2. Accessing Array Elements
console.log("First Fruit:", fruits[0]); // Output: "Apple"
console.log("Second Number:", numbers[1]); // Output: 2

// 3. Modifying Array Elements
fruits[1] = "Grapes"; // Changing "Banana" to "Grapes"
console.log("Updated Fruits:", fruits); // Output: ["Apple", "Grapes", "Mango", "Orange"]

// 4. Array Length
console.log("Fruits Length:", fruits.length); // Output: 4

// 5. Adding and Removing Elements
fruits.push("Pineapple"); // Adds "Pineapple" to the end
console.log("After push:", fruits); // Output: ["Apple", "Grapes", "Mango", "Orange", "Pineapple"]

let lastFruit = fruits.pop(); // Removes the last element ("Pineapple")
console.log("Popped Element:", lastFruit); // Output: "Pineapple"
console.log("After pop:", fruits); // Output: ["Apple", "Grapes", "Mango", "Orange"]

fruits.unshift("Strawberry"); // Adds "Strawberry" to the start
console.log("After unshift:", fruits); // Output: ["Strawberry", "Apple", "Grapes", "Mango", "Orange"]

let firstFruit = fruits.shift(); // Removes the first element ("Strawberry")
console.log("Shifted Element:", firstFruit); // Output: "Strawberry"
console.log("After shift:", fruits); // Output: ["Apple", "Grapes", "Mango", "Orange"]

// 6. Finding Elements
let indexOfMango = fruits.indexOf("Mango"); // Finds the index of "Mango"
console.log("Index of Mango:", indexOfMango); // Output: 2

let isBananaInArray = fruits.includes("Banana"); // Checks if "Banana" is in the array
console.log("Is Banana in array?", isBananaInArray); // Output: false

// 7. Array Slicing and Splicing
let slicedFruits = fruits.slice(1, 3); // Slices the array from index 1 to index 3 (non-inclusive)
console.log("Sliced Fruits:", slicedFruits); // Output: ["Grapes", "Mango"]

fruits.splice(1, 1, "Peach", "Kiwi"); // Removes 1 element at index 1 and adds "Peach" and "Kiwi"
console.log("After Splice:", fruits); // Output: ["Apple", "Peach", "Kiwi", "Mango", "Orange"]

// // 8. Iterating Over Arrays
fruits.forEach(function(fruit, index) {
  console.log(`Fruit at index ${index}:`, fruit);
});
// // Output:
// // Fruit at index 0: Apple
// // Fruit at index 1: Peach
// // Fruit at index 2: Kiwi
// // Fruit at index 3: Mango
// // Fruit at index 4: Orange

// 9. Combining Arrays
let vegetables = ["Carrot", "Tomato"];
let food = fruits.concat(vegetables); // Combines fruits and vegetables arrays
console.log("Food Array:", food); // Output: ["Apple", "Peach", "Kiwi", "Mango", "Orange", "Carrot", "Tomato"]

// 10. Sorting Arrays
let sortedFruits = fruits.sort(); // Sorts alphabetically
console.log("Sorted Fruits:", sortedFruits); // Output: ["Apple", "Kiwi", "Mango", "Orange", "Peach"]

let sortedNumbers = numbers.sort((a, b) => b - a); // Sorts numbers in descending order
console.log("Sorted Numbers:", sortedNumbers); // Output: [5, 4, 3, 2, 1]

// 11. Reversing Arrays
let reversedFruits = fruits.reverse(); // Reverses the array
console.log("Reversed Fruits:", reversedFruits); // Output: ["Peach", "Orange", "Mango", "Kiwi", "Apple"]

// 12. Array Map and Filter
let fruitLengths = fruits.map(function(fruit) {
  return fruit.length; // Get the length of each fruit name
});
console.log("Fruit Lengths:", fruitLengths); // Output: [5, 6, 5, 4, 6]

let longNamedFruits = fruits.filter(function(fruit) {
  return fruit.length > 5; // Return fruits with names longer than 5 characters
});
console.log("Fruits with long names:", longNamedFruits); // Output: ["Orange", "Mango"]

// 13. Reducing Arrays
let numberSum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue; // Adds each element together
}, 0);
console.log("Sum of Numbers:", numberSum); // Output: 15

// 14. Converting Arrays to Strings
let fruitsString = fruits.join(", "); // Joins array elements into a string with a comma separator
console.log("Fruits String:", fruitsString); // Output: "Peach, Orange, Mango, Kiwi, Apple"
