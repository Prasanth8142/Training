// OBJECTS IN JAVASCRIPT

// Creating an Object
let student = {
    name: "Prasanth",
    age: 22,
    city: "Hyderabad"
};

console.log("Original Object:", student);

// Dynamic Object (Add, Update, Delete)
student.course = "JavaScript";   // Add
student.age = 23;                // Update
delete student.city;             // Delete

console.log("After Dynamic Changes:", student);

// Iterating Object
console.log("\nIterating Object:");
for (let key in student) {
    console.log(key + " : " + student[key]);
}

// Cloning / Copying Object
let copy = { ...student };
// let copy = Object.assign({}, student);

console.log("\nCopied Object:", copy);

// Math Object
console.log("\nMath Object:");
console.log("PI =", Math.PI);
console.log("Square Root =", Math.sqrt(25));
console.log("Power =", Math.pow(2, 3));
console.log("Maximum =", Math.max(10, 20, 30));
console.log("Minimum =", Math.min(10, 20, 30));
console.log("Random =", Math.random());

// Date Object
let today = new Date();

console.log("\nDate Object:");
console.log("Current Date:", today);
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

// String Object
let text = "JavaScript";

console.log("\nString Object:");
console.log("Length:", text.length);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Character:", text.charAt(4));
console.log("Index:", text.indexOf("Script"));
console.log("Replace:", text.replace("Java", "Type"));
console.log("Slice:", text.slice(0, 4));
console.log("Includes:", text.includes("Java"));