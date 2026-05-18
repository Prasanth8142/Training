let name = "Prasanth";
let city = 'Dharmavaram';
let message = `Welcome ${name}`;

let text = "JavaScript";

console.log(text.length);          // 10
console.log(text.toUpperCase());   // JAVASCRIPT
console.log(text.slice(0,4));      // Java
console.log(text.includes("Script")); // true



// Store data
localStorage.setItem("username", "Prasanth");

// Get data
let user = localStorage.getItem("username");

console.log(user);

// Remove item
localStorage.removeItem("username");

// Clear all
localStorage.clear();




let user = {
  name: "Prasanth",
  age: 22
};

localStorage.setItem("user", JSON.stringify(user));

let data = JSON.parse(localStorage.getItem("user"));

console.log(data.name);