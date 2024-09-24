// Day 11: Date and Time in JavaScript

"use strict"; // Enforcing strict mode

// 1. Creating a New Date Object
let currentDate = new Date(); // Gets the current date and time
console.log("this CurrentData:", currentDate); // Output: Current date and time

// Creating a date object with a specific date (year, month (0-indexed), day, hours, minutes, seconds, milliseconds)
let specificDate = new Date(2020, 11, 25, 10, 30, 0); // Dec 25, 2020, 10:30:00 AM
console.log("this specificDate:", specificDate); // Dec 25, 2020, 10:30:00 AM
// // You can also pass a string format
let dateString = new Date("2022-07-01T14:00:00Z"); // UTC date-time format
console.log("this dateString:", dateString);

// // 2. Getting Date Components
let year = currentDate.getFullYear(); // Gets the year (e.g., 2023)
console.log("Year:", year);

let month = currentDate.getMonth(); // Gets the month (0-indexed, Jan is 0, Dec is 11)
console.log("Month:", month + 1); // Adding 1 to get the correct month number

let day = currentDate.getDate(); // Gets the day of the month (1-31)
console.log("Day:", day);

let dayOfWeek = currentDate.getDay(); // Gets the day of the week (0 for Sunday, 6 for Saturday)
console.log("Day of Week:", dayOfWeek);

let hours = currentDate.getHours(); // Gets the hour (0-23)
console.log("Hours:", hours);

let minutes = currentDate.getMinutes(); // Gets the minutes (0-59)
console.log("Minutes:", minutes);

let seconds = currentDate.getSeconds(); // Gets the seconds (0-59)
console.log("Seconds:", seconds);

// 3. Setting Date Components
let newDate = new Date(); // Create a new date
newDate.setFullYear(2025); // Change the year to 2025
newDate.setMonth(6); // Change the month to July (0-indexed)
newDate.setDate(15); // Change the day to 15th

console.log("Updated Date:", newDate); // Output: Updated date with the new values

// 4. Getting Time in Milliseconds
let timeInMs = currentDate.getTime(); // Gets the time in milliseconds since Jan 1, 1970
console.log("Time in ms since 1970:", timeInMs);

// 5. Date Operations
let futureDate = new Date(); // Current date
futureDate.setDate(futureDate.getDate() + 30); // Add 30 days to the current date
console.log("Future Date (30 days later):", futureDate);

// 6. Converting Dates to Strings
let dateToString = currentDate.toDateString(); // Converts to a readable date string (e.g., "Wed Sep 18 2024")
console.log("Date to String:", dateToString);

let timeToString = currentDate.toTimeString(); // Converts to a readable time string (e.g., "15:30:55 GMT+0530")
console.log("Time to String:", timeToString);

// 7. Locale-Sensitive Date Formatting
let localeDateString = currentDate.toLocaleDateString(); // Format according to local date conventions
console.log("Locale Date String:", localeDateString);

let localeTimeString = currentDate.toLocaleTimeString(); // Format according to local time conventions
console.log("Locale Time String:", localeTimeString);

// 8. Working with Timezones
let utcDate = currentDate.toUTCString(); // Converts to UTC (Coordinated Universal Time)
console.log("UTC Date:", utcDate);

let isoDate = currentDate.toISOString(); // Converts to ISO 8601 format (e.g., "2024-09-18T10:55:22.123Z")
console.log("ISO Date:", isoDate);

// 9. Date Comparisons
let date1 = new Date(2024, 9, 1); // Oct 1, 2024
let date2 = new Date(2024, 9, 15); // Oct 15, 2024

console.log(date1 > date2); // Output: false (Oct 1 is earlier than Oct 15)
console.log(date1 < date2); // Output: true

// Difference between two dates in milliseconds
let dateDifference = date2 - date1;
console.log("Difference in days:", dateDifference / (1000 * 60 * 60 * 24)); // Convert ms to days
