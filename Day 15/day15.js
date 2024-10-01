// Day 15: Control Flow with If-Else, For, While, Do-While, Break, and Continue

// 1. If-Else Condition Example:
let x = 10;

// Check if x is greater than 5
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}

// 2. Complex If-Else Condition with Logical Operators:
let num = 15;

// Check if num is between 10 and 20
if (num > 10 && num < 20) {
    console.log("num is between 10 and 20");
} 
// Check if num is either 10 or 20
else if (num === 10 || num === 20) {
    console.log("num is either 10 or 20");
} 
// Check if num is not 15 using NOT operator
else if (!(num === 15)) {  
    console.log("num is not 15");
} 
// Default case: num is exactly 15
else {
    console.log("num is exactly 15");
}

// 3. For Loop Example:
for (let i = 0; i < 5; i++) {
    console.log("Iteration: ", i);  // Simple iteration from 0 to 4
}

// 4. For Loop with Break and Continue:
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at iteration 5");
        break;  // Exit loop when i equals 5
    }
    if (i % 2 === 0) {
        console.log("Skipping even number", i);
        continue;  // Skip even numbers
    }
    console.log("Odd number: ", i);  // Only log odd numbers
}

// 5. While Loop Example:
let count = 0;

// Simple While loop to count from 0 to 4
while (count < 5) {
    console.log("Count is: ", count);
    count++;
}

// 6. While Loop with Break and Continue:
while (count < 10) {
    if (count === 6) {
        console.log("Breaking the loop at count 6");
        break;  // Exit the loop when count is 6
    }
    if (count === 3) {
        console.log("Skipping count 3");
        count++;
        continue;  // Skip iteration when count is 3
    }
    console.log("Count is: ", count);
    count++;
}

// 7. Do-While Loop Example:
do {
    console.log("Count is: ", count);
    count++;
} while (count < 5);  // Runs at least once before checking the condition

// 8. Do-While Loop with Break and Continue:
let i = 0;

do {
    if (i === 7) {
        console.log("Breaking at i = 7");
        break;  // Exit the loop when i equals 7
    }
    if (i === 4) {
        console.log("Skipping iteration 4");
        i++;
        continue;  // Skip iteration when i equals 4
    }
    console.log("Iteration: ", i);  // Log all iterations except 4 and stop at 7
    i++;
} while (i < 10);
