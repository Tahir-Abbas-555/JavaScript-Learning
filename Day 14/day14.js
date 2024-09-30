// 1. Function to print the multiplication table of 9
function table() {
    console.log("9 * 1  = ", 1 * 9);
    console.log("9 * 2  = ", 2 * 9);
    console.log("9 * 3  = ", 3 * 9);
    console.log("9 * 4  = ", 4 * 9);
    console.log("9 * 5  = ", 5 * 9);
    console.log("9 * 6  = ", 6 * 9);
    console.log("9 * 7  = ", 7 * 9);
    console.log("9 * 8  = ", 8 * 9);
    console.log("9 * 9  = ", 9 * 9);
    console.log("9 * 10 = ", 10 * 9);
}

table(); // Calling the function to print the table

// 2. Function to add two numbers
function addTwoNums(num1, num2) {
    console.log(num1 + num2);
}

addTwoNums(2, 4); // Output: 6
console.log(addTwoNums(2, 4)); // Output: undefined (because the function doesn't return anything)

// 3. Function to multiply two numbers with return
function multipleTwoNums(num1, num2) {
    return num1 * num2;
}

let result = multipleTwoNums(2, 8);
console.log(result); // Output: 16

// 4. Function with parameter and return value
function loginUserMessage(username) {
    return `${username} just logged in`;
}

console.log(loginUserMessage("Tahir Abbas")); // Output: "Tahir Abbas just logged in"

// 5. Function handling undefined username
function loginUserMessage(username) {
    if (username === undefined) {
        return "Please Enter a name"; // Corrected typo: "numer" to "name"
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()); // Output: "Please Enter a name"

// 6. Function checking falsy values
function loginUserMessage(username) {
    if (!username) {
        return "Please Enter a name"; // Corrected typo: "numer" to "name"
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()); // Output: "Please Enter a name"

// 7. Function with default parameter
function loginUserMessage(username = "Non-User") {
    return `${username} just logged in`;
}

console.log(loginUserMessage()); // Output: "Non-User just logged in"

// 8. Function to calculate cart price with rest parameters
function calculateCartPrice(...num1) {
    return num1; // Returns an array of numbers
}

console.log(calculateCartPrice(100, 123, 4556)); // Output: [100, 123, 4556]

// 9. Function to handle an object
const user = {
    username: "hitesh",
    prices: 90000,
};

function handleObject(anyObject) {
    return `Username is ${anyObject.username} and price is ${anyObject.prices}`;
}

console.log(handleObject(user)); // Output: "Username is hitesh and price is 90000"

// 10. Function with incorrect property access
function handleObject(anyObject) {
    return `Username is ${anyObject.username} and price is ${anyObject.price}`; // typo in 'price'
}

console.log(handleObject(user)); // Output: "Username is hitesh and price is undefined"

// 11. Function to return the second value of an array
const myNewArray = [200, 33, 234, 455];

function returnSecondValue(getArray) {
    return getArray[1]; // Accessing the second element
}

console.log(returnSecondValue(myNewArray)); // Output: 33

// 12. Function demonstrating variable scope
function test() {
    let a = 10; // Block scope
    const b = 20; // Block scope
    var c = 30; // Function scope
}

console.log(a); // Uncaught ReferenceError: a is not defined
console.log(b); // Uncaught ReferenceError: b is not defined
console.log(c); // Uncaught ReferenceError: c is not defined

// 13. Function nested function scope
function one() {
    const username = "tahir";
    function two() {
        const website = "youtube";
        console.log(username); // Accessing outer variable
    }
    console.log(website); // Uncaught ReferenceError: website is not defined
    two();
}

one(); // Calls function one

// 14. Function hoisting
functionOne(); // Works due to hoisting
function functionOne() {
    console.log("function one");
}

functionTwo(); // Uncaught TypeError: functionTwo is not a function
const functionTwo = function () {
    console.log("function two");
};

// 15. Object method
const tahir = {
    username: "Tahir Abbas",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}. Welcome to website`);
    },
};

user.welcomeMessage(); // Output: "Username is hitesh and price is 90000"
user.username = "Tahir"; // Updating property
user.welcomeMessage(); // Output: "Tahir. Welcome to website"

// 16. Global context
console.log(this); // Refers to global object (Window in browsers)

function chai() {
    console.log(this); // Refers to global object
}

chai(); // Calls function chai

// 17. Function demonstrating this context
function chai() {
    let username = "tahir";
    console.log(this); // Refers to global object
    console.log(this.username); // Undefined in global scope
}

chai(); // Calls function chai

// 18. Function expression
const chai2 = function () {
    let username = "tahir";
    console.log(this); // Refers to global object
};

chai2(); // Calls function chai2

// 19. Arrow function demonstrating this context
const arrowChai = () => {
    let username = "tahir";
    console.log(this); // Refers to the lexical scope (not the global object)
};

arrowChai(); // Calls arrowChai

// 20. Arrow function for addition
const addTwo = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(3, 5)); // Output: 8

// 21. Arrow function with implicit return
const addTwo2 = (num1, num2) => num1 + num2;

console.log(addTwo2(3, 5)); // Output: 8

// 22. Arrow function with parentheses
const addTwo3 = (num1, num2) => (num1 + num2);

console.log(addTwo2(3, 5)); // Output: 8

// 23. Arrow function returning an object (incorrect)
const value = () => {username: "tahir"}; // Incorrect syntax, returns undefined
console.log(value); // Output: function definition

// 24. Arrow function returning an object (correct)
const value1 = () => ({username: "tahir"}); // Correct syntax
console.log(value1()); // Output: { username: 'tahir' }

// 25. Simple function
function func() {
    console.log(`DB Connected`);
}

func(); // Output: "DB Connected"

// 26. Immediately Invoked Function Expression (IIFE)
(function func1() {
    console.log(`DB Connected`);
})();

// 27. IIFE with named function
(function func1() {
    console.log(`DB Connected`); // Output: "DB Connected"
})();

// 28. IIFE using arrow function
(() => {
    console.log(`DB Connected`); // Output: "DB Connected"
})();

// 29. IIFE with parameter
((name) => {
    console.log(`DB Connected ${name}`); // Output: "DB Connected tahir abbas"
})("tahir abbas");
