// Day 2: Basic of const let and var in JavaScript

// The 'const' keyword is used here because the account ID should not change.
const accountId = 1234324;

// 'let' is used for the email, as this can be updated if needed.
let accountEmail = "tahirabbasshaikh555@gmail.com";

// 'let' is also used for the password since it may need to be updated later.
// Avoid using 'var' in modern JavaScript for better scoping and consistency.
let accountPassword = "12345";

// Logging account details to the console for testing purposes
console.log(`Account ID: ${accountId}`);
console.log(`Account Email: ${accountEmail}`);
console.log(`Account Password: ${accountPassword}`);

// to view data in table form

console.table([accountId, accountEmail, accountPassword])