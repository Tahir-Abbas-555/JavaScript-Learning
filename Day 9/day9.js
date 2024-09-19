// Day 9: Working with Strings in JavaScript

"use strict"; // Enforcing strict mode

// 1. Declaring Strings
let channelName = "KingAbbasTech";
let anotherChannel = 'TechWithAbbas';
let message = `Welcome to ${channelName}!`; // Template literal

console.log(channelName); // Output: KingAbbasTech
console.log(anotherChannel); // Output: TechWithAbbas
console.log(message); // Output: Welcome to KingAbbasTech!

// 2. String Length
console.log(channelName.length); // Output: 13 (counts the number of characters)

// 3. Accessing characters in a string
console.log(channelName[0]); // Output: K (first character)
console.log(channelName[channelName.length - 1]); // Output: h (last character)

// 4. Common String Methods
let tutorial = "  JavaScript Basics  ";

// a. Trim - removes whitespace from both sides of a string
console.log(tutorial.trim()); // Output: JavaScript Basics

// b. toUpperCase and toLowerCase
console.log(channelName.toUpperCase()); // Output: KINGABBASTECH
console.log(anotherChannel.toLowerCase()); // Output: techwithabbas

// c. indexOf - finds the position of the first occurrence of a substring
console.log(channelName.indexOf("Abbas")); // Output: 4 (starts at index 4)
console.log(anotherChannel.indexOf("Tech")); // Output: 0 (starts at index 0)

// d. includes - checks if a string contains a substring
console.log(channelName.includes("King")); // Output: true
console.log(anotherChannel.includes("Coding")); // Output: false

// e. slice - extracts a part of the string
console.log(channelName.slice(0, 4)); // Output: King (from index 0 to 3)
console.log(anotherChannel.slice(4)); // Output: WithAbbas (from index 4 to the end)

// f. replace - replaces a part of the string with another
let updatedChannel = channelName.replace("Tech", "Live");
console.log(updatedChannel); // Output: KingAbbasLive

// g. split - splits a string into an array
let topics = "JavaScript, Python, HTML, CSS";
let topicsArray = topics.split(", "); // Splits based on comma and space
console.log(topicsArray); // Output: ['JavaScript', 'Python', 'HTML', 'CSS']

// h. concat - concatenates two or more strings
let fullMessage = channelName.concat(" is your go-to channel for coding tutorials.");
console.log(fullMessage); // Output: KingAbbasTech is your go-to channel for coding tutorials.

// 5. Escaping characters
let quote = 'It\'s a great day for coding!'; // Use backslash to escape single quote
console.log(quote); // Output: It's a great day for coding!

// 6. Template Literals - Using backticks for multi-line strings and embedding expressions
let welcomeMessage = `Hello, ${channelName} viewers!
Today we're learning about JavaScript strings.`;
console.log(welcomeMessage);

// 7. String Immutability - Strings are immutable, meaning they cannot be changed once created.
// Instead of modifying a string, you create a new one.
let originalString = "JavaScript";
let modifiedString = originalString.replace("Java", "ECMA");
console.log(modifiedString); // Output: ECMAScript
console.log(originalString); // Output: JavaScript (unchanged)

// 8. String Concatenation Performance (small note)
// When performing a lot of string concatenation, it’s more efficient to use template literals (`) or arrays with join, especially in loops.

