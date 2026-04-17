let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));




    console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 2000);

console.log("End");




console.log(this);


let obj = {
    name: "Prasanth",
    show() {
        console.log(this.name);
    }
};

obj.show()



function Person(name) {
    this.name = name;
}

let p1 = new Person("Prasanth");
console.log(p1.name);