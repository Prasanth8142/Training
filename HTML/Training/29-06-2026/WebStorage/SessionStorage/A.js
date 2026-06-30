function save() {
    sessionStorage.setItem("city", "Hyderabad");
}

function display() {
    let city = sessionStorage.getItem("city");
    document.getElementById("output").innerHTML = city;
}