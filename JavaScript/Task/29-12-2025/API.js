
let data = []


function cleargh(){
    let x=document.getElementById("tbody")
    x.innerHTML =""
}

function getUsers() {
    let b =document.getElementById("button")
    // b.remove()
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((d) => {
            data = d;
            displayUsers(data)
        })
        .catch((e) => {
            console.log("Error:", e)
        });
}

function displayUsers(users) {
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = ""

    users.forEach(us => {
        let values = [us.name,us.username,us.email,us.address.geo.lat,us.address.geo.lng]
           let tr=document.createElement("tr")
       values.forEach((a)=>{
              let td=document.createElement("td")
              td.textContent=a
              tr.appendChild(td)
       })
       tbody.appendChild(tr)
 })
}
