console.log("----- Callback -----");

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function completed() {
    console.log("Callback Function Executed");
}

greet("Prasanth", completed);


// ii) Promises
console.log("----- Promise -----");

let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }
});

promise
.then(result => console.log(result))
.catch(error => console.log(error));


// iii) Async & Await
console.log("----- Async & Await -----");

function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}

async function displayData() {
    let result = await getData();
    console.log(result);
}

displayData();