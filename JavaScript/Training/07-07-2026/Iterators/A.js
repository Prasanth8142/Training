console.log("----- Iterator -----");

let numbers = [10, 20, 30];

let iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());