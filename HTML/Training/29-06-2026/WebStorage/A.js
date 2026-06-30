localStorage.setItem('username', 'JohnDoe')
console.log(localStorage.getItem('username'))



function saveData() {
    localStorage.setItem("username", "Prasanth");
}

function showData() {
    let name = localStorage.getItem("username");
    console.log(name);
    document.getElementById("result").innerHTML = name;
}