// 1. Default Parameters
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Prasanth"); // Hello, Prasanth
greet();           // Hello, Guest


// 2. Rest Parameters
function addNumbers(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    console.log("Sum:", sum);
}

addNumbers(10, 20);             // Sum: 30
addNumbers(5, 10, 15, 20);      // Sum: 50
addNumbers(1, 2, 3, 4, 5);      