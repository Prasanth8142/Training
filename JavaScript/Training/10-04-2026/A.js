// By ID
let el = document.getElementById("id");

// By Class
let items = document.getElementsByClassName("class");

// By Tag
let tags = document.getElementsByTagName("p");

// Query Selector (modern)
let one = document.querySelector(".class");
let all = document.querySelectorAll("p");
let e2 = document.getElementById("demo");

// Change text
el.textContent = "Hello World";

// Change HTML
el.innerHTML = "<b>Welcome</b>";
let el = document.getElementById("demo");

el.style.color = "red";
el.style.backgroundColor = "yellow";
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    alert("Button clicked!");
});