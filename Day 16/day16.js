// Day 16: Working with Arrays, Maps, and Control Flow in JavaScript

// 1. Define an array
const arr = [1, 2, 3, 4, 5];

// 2. Using for..in loop to iterate over array indices
for (const num in arr) {
    console.log(num);  // Logs the indices of the array (0 to 4)
}

// 3. Using for..of loop to iterate over array values
for (const num of arr) {
    console.log(num);  // Logs the values of the array (1 to 5)
}

// 4. Define a string for character iteration
const greetings = "Hello World!";

// 5. Using for..in loop to iterate over string indices
for (const char in greetings) {
    console.log(`char:${char}`);  // Logs the indices of the string
}

// 6. Using for..of loop to iterate over string characters
for (const char of greetings) {
    console.log(`char:${char}`);  // Logs each character in the string
}

// 7. Working with Maps
const map = new Map();
map.set("IN", "Indian");  // Set country code and name
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");  // Updating the value for the key "IN"

// Log the entire map
console.log(map);

// 8. Using for..of loop to iterate over map entries
for (const [key, value] of map) {
    console.log(key);  // Logs each key in the map
}

// 9. Define an object to demonstrate for..in loop
const myobject = {
    game1: "GTA Vice City",
    game2: "GTA v"
};

// Explain why for..of loop doesn't work on objects
// Uncommenting the below code will result in an error because for..of is not compatible with plain objects
// for (const [key, value] of myobject){
//     console.log(key);
// }

// 10. Using for..in loop to iterate over object properties
for (const key in myobject) {
    console.log(`key: ${key}, Value: ${myobject[key]}`);  // Logs each key-value pair
}

// 11. Using for..in loop on array
for (const key in arr) {
    console.log(`key: ${key}, Value: ${arr[key]}`);  // Logs array indices and values
}

// 12. Using forEach to iterate over an array
arr.forEach(function (item) {
    console.log(item);  // Logs each item in the array
});

// 13. Using arrow function in forEach
arr.forEach((item) => {
    console.log(item);  // Logs each item in the array
});

// 14. Define a print function to use in forEach
function print(item) {
    console.log(item);  // Logs each item passed to the function
}

// 15. Using forEach with a defined function
arr.forEach(print);

// 16. Using forEach with additional parameters: index and array
arr.forEach((item, index, array) => {
    console.log(`${index}:${item}    => ${array}`);  // Logs index, item, and the whole array
});

// 17. Define an array of coding experiences
const mycoding = [
    { languge: "python", time: "2 years" },
    { languge: "cpp", time: "1 month" },
    { languge: "javascript", time: "6 month" },
    { languge: "python", time: "2 months" }
];

// 18. Using forEach to log languages learned
mycoding.forEach((item) => {
    console.log(item.languge);  // Logs each programming language
});

// 19. Define an array of books
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// 20. Using filter to find books in the History genre
let userBooks = books.filter((bk) => bk.genre === 'History');

// 21. Filtering books published after 1995 in the History genre
userBooks = books.filter((bk) => { 
    return bk.publish >= 1995 && bk.genre === "History";  // Returns books meeting both criteria
});
console.log(userBooks);  // Logs the filtered books

// 22. Define an array of numbers
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 23. Chaining map and filter to transform and filter numbers
const newNums = myNumers
    .map((num) => num * 10)  // Multiply each number by 10
    .map((num) => num + 1)   // Add 1 to each resulting number
    .filter((num) => num >= 40);  // Filter numbers greater than or equal to 40

console.log(newNums);  // Logs the resulting array

// 24. Define another array of numbers for reduction
const myNums = [1, 2, 3];

// 25. Using reduce to calculate total
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);  // Sum all numbers in the array

console.log(myTotal);  // Logs the total sum

// 26. Define a shopping cart with items and prices
const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
];

// 27. Using reduce to calculate total price to pay
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);  // Sum of all item prices

console.log(priceToPay);  // Logs the total price
