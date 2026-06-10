const map = new Map();

map.set("name", "Prasanth");
map.set("age", 22);

console.log(map);


console.log(map.get("name"))

console.log(map.has("age"))
map.delete("age")

console.log(map.size);


const set = new Set([1, 2, 3, 3, 4]);

console.log(set);


set.add(5);
console.log(set.has(2)); // true

const numbers = [1, 2, 2, 3, 4, 4];

const unique = [...new Set(numbers)];

console.log(unique); // [1,2,3,4]


const weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "Hello");

console.log(weakMap.get(obj)); // Hello


const weakSet = new WeakSet();

let user = { name: "Prasanth" };

weakSet.add(user);

console.log(weakSet.has(user)); // true