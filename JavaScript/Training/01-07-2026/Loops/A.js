// ===============================
// JavaScript Loops - One Program
// ===============================

// 1. for loop
console.log("1. for Loop");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. while loop
console.log("\n2. while Loop");
let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

// 3. do...while loop
console.log("\n3. do...while Loop");
let b = 1;
do {
    console.log(b);
    b++;
} while (b <= 5);

// 4. Infinite loop (Commented to avoid freezing)
// console.log("\n4. Infinite Loop");
// while (true) {
//     console.log("Running...");
// }

// 5. break statement
console.log("\n5. break Statement");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

// 6. continue statement
console.log("\n6. continue Statement");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// 7. for...in loop (Objects)
console.log("\n7. for...in Loop");
const student = {
    name: "Prasanth",
    age: 22,
    city: "Hyderabad"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}

// 8. for...of loop (Arrays)
console.log("\n8. for...of Loop");
const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}