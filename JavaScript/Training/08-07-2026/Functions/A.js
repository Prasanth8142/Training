// 1. Currying
function multiply(a) {
    return function(b) {
        return a * b;
    };
}
console.log("Currying:", multiply(5)(4)); // 20

// 2. Higher-Order Function
function greet(name) {
    return "Hello " + name;
}

function display(fn, name) {
    console.log("Higher-Order Function:", fn(name));
}
display(greet, "Prasanth");

// 3. Pure Function
function add(a, b) {
    return a + b;
}
console.log("Pure Function:", add(10, 20));

// Impure Function
let count = 0;
function increase() {
    count++;
    return count;
}
console.log("Impure Function:", increase());
console.log("Impure Function:", increase());

// 4. Recursion
function factorial(n) {
    if (n === 1)
        return 1;
    return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5)); // 120

// 5. First-Class Functions
function sayHello() {
    return "Hello JavaScript";
}

let message = sayHello; // Function assigned to variable
console.log("First-Class Function:", message());
