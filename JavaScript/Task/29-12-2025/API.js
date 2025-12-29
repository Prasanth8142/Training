
let data = [];



function clear(){
 clear()
}
function getUsers() {
    let b =document.getElementById("button")
    b.remove()
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((d) => {
            data = d;
            displayUsers(data);
        })
        .catch((e) => {
            console.log("Error:", e);
        });
}

function displayUsers(users) {
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = ""

    users.forEach(user => {
        let { name, username, email, address } = user
        let { lat, lng } = address.geo
         let tr=document.createElement("tr")
           let tdName=document.createElement("td")
             let tdUsername=document.createElement("td")
               let tdEmail=document.createElement("td")
                   let tdlat=document.createElement("td")
                     let tdlng=document.createElement("td")
                     tdName.textContent=name
                     tdUsername.textContent=username
                     tdEmail.textContent=email
                     tdlat.textContent=lat
                     tdlng.textContent=lng
                     tr.appendChild(tdName)
                     tr.appendChild(tdUsername)
                     tr.appendChild(tdEmail)
                     tr.appendChild(tdlat)
                     tr.appendChild(tdlng)
 tbody.appendChild(tr)
 })
}
