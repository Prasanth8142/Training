// i) Event Bubbling (default)
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent - Bubbling");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child - Bubbling");
});

document.getElementById("btn").addEventListener("click", () => {
    console.log("Button - Bubbling");
});

// ii) Event Capturing
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent - Capturing");
}, true);

document.getElementById("child").addEventListener("click", () => {
    console.log("Child - Capturing");
}, true);

// iii) Event Delegation
document.getElementById("list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        alert("You clicked: " + event.target.textContent);
    }
});