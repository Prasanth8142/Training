// ARRAYS IN JAVASCRIPT

let numbers = [10, 20, 30, 40, 50];

console.log("Original Array:", numbers);

// join()
console.log("join():", numbers.join("-"));
// Output: 10-20-30-40-50

// sort()
let values = [50, 10, 40, 20, 30];
values.sort((a, b) => a - b);
console.log("sort():", values);
// Output: [10, 20, 30, 40, 50]

// filter()
let filtered = numbers.filter(num => num > 25);
console.log("filter():", filtered);
// Output: [30, 40, 50]

// map()
let doubled = numbers.map(num => num * 2);
console.log("map():", doubled);
// Output: [20, 40, 60, 80, 100]

// reduce()
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("reduce():", total);
// Output: 150