const user = {
  name: "Prasanth",
  age: 22
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));


const updatedUser = {
  id: 1,
  name: "Prasanth Kumar",
  age: 23
};

fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(updatedUser)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));



const updatedField = {
  name: "Updated Name"
};

fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(updatedField)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));


fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE"
})
.then(response => {
  if (response.ok) {
    console.log("User deleted");
  }
})
.catch(error => console.log(error));