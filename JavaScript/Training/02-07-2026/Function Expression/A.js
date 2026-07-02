// 1. Named Function Expression
const add = function sum(a, b) {
    return a + b;
};

// 2. Anonymous Function Expression
const subtract = function(a, b) {
    return a - b;
};

// 3. Arrow Function
const multiply = (a, b) => {
    return a * b;
};

// Function Calls
console.log("Addition:", add(10, 5));         // 15
console.log("Subtraction:", subtract(10, 5)); // 5
console.log("Multiplication:", multiply(10, 5)); // 50


const variableName = (parameters) => {
    // code
};