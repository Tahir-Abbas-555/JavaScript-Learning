// Day 8: Understanding Stack and Heap Memory in JavaScript

let myYoutubename = "KingAbbasTech"; // Primitive value (String) stored in Stack
let anothername = myYoutubename; // 'anothername' is a copy of 'myYoutubename'
anothername = "KingAbbasTechLive"; // 'anothername' is now pointing to a new string

console.log(myYoutubename); // Output: KingAbbasTech
console.log(anothername);   // Output: KingAbbasTechLive

// Explanation: Since 'myYoutubename' is a primitive type (string), it is stored in the Stack. 
// When you assign 'anothername = myYoutubename', a new copy of the value is created in the Stack.
// Changing 'anothername' does not affect 'myYoutubename' since they are independent copies.

// Heap Memory Example:
let userOne = {
    email: "tahirabbasshaikh555@gmail.com",
    upi: "jazzcash"
}; // This object is stored in Heap memory, and 'userOne' holds a reference to it.

let userTwo = userOne; // 'userTwo' now holds the same reference as 'userOne'

userTwo.email = "Tahirabbas@iba-suk.com"; // This modifies the object in the Heap, so both references (userOne and userTwo) are affected.

console.log(userOne); // Output: {email: "Tahirabbas@iba-suk.com", upi: "jazzcash"}
console.log(userTwo); // Output: {email: "Tahirabbas@iba-suk.com", upi: "jazzcash"}

// Explanation: Both 'userOne' and 'userTwo' are pointing to the same object in Heap memory.
// Changing 'userTwo.email' affects the same object that 'userOne' is pointing to, 
// so both variables reflect the change in the email property.
