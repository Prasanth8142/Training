// 1. Global Scope
let company = "OpenAI";

function showCompany() {
    console.log("Global:", company);
}

showCompany();
console.log("Global:", company);


// 2. Function Scope
function display() {
    let message = "Hello JavaScript";
    console.log("Function:", message);
}

display();



// 3. Block Scope
if (true) {
    let city = "Hyderabad";
    const state = "Telangana";

    console.log("Block:", city);
    console.log("Block:", state);
}

