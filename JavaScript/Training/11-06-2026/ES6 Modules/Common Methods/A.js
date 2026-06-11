let num1 = parseInt("123");
let num2 = parseInt("123.45");
let num3 = parseInt("100px");

console.log(num1); // 123
console.log(num2); // 123
console.log(num3); 



let num1 = parseFloat("123.45");
let num2 = parseFloat("10.5px");
let num3 = parseFloat("3.14");

console.log(num1); // 123.45
console.log(num2); // 10.5
console.log(num3); // 3.14




const user = {
  name: "Prasanth",
  age: 22
};

const jsonString = JSON.stringify(user);

console.log(jsonString);
// {"name":"Prasanth","age":22}






const jsonString = '{"name":"Prasanth","age":22}';

const user = JSON.parse(jsonString);

console.log(user.name); // Prasanth
console.log(user.age);  // 22



let num = 123;

let str = num.toString();

console.log(str);        // "123"
console.log(typeof str); // string





let price = 99.4567;

console.log(price.toFixed(2)); // "99.46"
console.log(price.toFixed(1)); // "99.5"
console.log(price.toFixed(0)); // "99"