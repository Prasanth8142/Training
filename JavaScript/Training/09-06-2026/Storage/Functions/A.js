function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    console.log(callback("Prasanth"));
    console.log("Higher order function");
}

processUser(greet);


function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);

console.log(double(5));
   

function multiply1(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply1(5);

console.log(double(10));