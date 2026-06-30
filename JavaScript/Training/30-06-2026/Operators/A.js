// ================================
// VARIABLES
// ================================

var city = "Hyderabad";
let age = 22;
const country = "India";

console.log("City:", city);
console.log("Age:", age);
console.log("Country:", country);

// ================================
// DATA TYPES
// ================================

let name = "Prasanth";                  // String
let marks = 95;                         // Number
let isStudent = true;                   // Boolean
let salary;                             // Undefined
let address = null;                     // Null
let bigNumber = 12345678901234567890n;  // BigInt
let id = Symbol("ID");                  // Symbol

let person = {
    name: "Prasanth",
    age: 22
};

let colors = ["Red", "Green", "Blue"];

function greet() {
    return "Hello";
}

// ================================
// TYPEOF OPERATOR
// ================================

console.log("\n===== typeof Operator =====");

console.log(typeof name);       // string
console.log(typeof marks);      // number
console.log(typeof isStudent);  // boolean
console.log(typeof salary);     // undefined
console.log(typeof address);    // object
console.log(typeof bigNumber);  // bigint
console.log(typeof id);         // symbol
console.log(typeof person);     // object
console.log(typeof colors);     // object
console.log(typeof greet);      // function

// ================================
// ARITHMETIC OPERATORS
// ================================

console.log("\n===== Arithmetic Operators =====");

let a = 20;
let b = 6;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** 2);

// Increment & Decrement

let x = 5;

console.log("Post Increment:", x++);
console.log("After Post Increment:", x);

console.log("Pre Increment:", ++x);

console.log("Post Decrement:", x--);
console.log("After Post Decrement:", x);

console.log("Pre Decrement:", --x);

// ================================
// ASSIGNMENT OPERATORS
// ================================

console.log("\n===== Assignment Operators =====");

let num = 10;

num += 5;
console.log("+= :", num);

num -= 2;
console.log("-= :", num);

num *= 3;
console.log("*= :", num);

num /= 2;
console.log("/= :", num);

num %= 4;
console.log("%= :", num);

num **= 2;
console.log("**= :", num);

// ================================
// COMPARISON OPERATORS
// ================================

console.log("\n===== Comparison Operators =====");

let p = 10;
let q = "10";

console.log("== :", p == q);
console.log("=== :", p === q);
console.log("!= :", p != q);
console.log("!== :", p !== q);
console.log("> :", p > 5);
console.log("< :", p < 20);
console.log(">= :", p >= 10);
console.log("<= :", p <= 10);

// ================================
// TERNARY OPERATOR
// ================================

console.log("\n===== Ternary Operator =====");

let result = age >= 18 ? "Eligible to Vote" : "Not Eligible";

console.log(result);

let marksResult = marks >= 35 ? "Pass" : "Fail";

console.log(marksResult);

// ================================
// LOGICAL OPERATORS
// ================================

console.log("\n===== Logical Operators =====");

let hasLicense = true;

console.log("AND (&&):", age >= 18 && hasLicense);

let isHoliday = false;

console.log("OR (||):", hasLicense || isHoliday);

console.log("NOT (!):", !isHoliday);

// ================================
// WHEN TO STORE / HOW TO STORE
// ================================

console.log("\n===== Store Example =====");

const productName = "Laptop";
let quantity = 2;
const price = 50000;

let totalPrice = quantity * price;

console.log("Product:", productName);
console.log("Quantity:", quantity);
console.log("Price:", price);
console.log("Total:", totalPrice);