localStorage.setItem("key", "value");





localStorage.setItem("username", "Prasanth");

const user = localStorage.getItem("username");

console.log(user);

localStorage.removeItem("username");

localStorage.clear();


sessionStorage.setItem("theme", "dark");
const theme = sessionStorage.getItem("theme");

console.log(theme);

sessionStorage.removeItem("theme");

const user = {
    name: "Prasanth",
    age: 22
};

localStorage.setItem("user", JSON.stringify(user));



const input = document.getElementById("name");

input.addEventListener("input", () => {
    localStorage.setItem("name", input.value);
});

input.value = localStorage.getItem("name") || "";