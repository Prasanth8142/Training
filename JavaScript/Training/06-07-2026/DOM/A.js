// i) DOM Properties
document.getElementById("title").innerHTML = "DOM Properties";
document.getElementById("title").style.color = "blue";

// ii) Selecting Elements
let title = document.getElementById("title");
let text = document.getElementsByClassName("text");
let para = document.getElementsByTagName("p");
let first = document.querySelector(".text");
let all = document.querySelectorAll(".text");

// iii) Traversing DOM
console.log(title.parentElement);
console.log(document.body.children);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

// iv) Adding / Removing / Replacing Elements
let newPara = document.createElement("p");
newPara.textContent = "New Paragraph Added";
document.getElementById("box").appendChild(newPara);

let replace = document.createElement("h3");
replace.textContent = "Replaced Element";
document.getElementById("box").replaceChild(replace, newPara);

replace.remove();

// v) Adding Events
document.getElementById("btn").addEventListener("click", function () {
    alert("Button Clicked!");
});