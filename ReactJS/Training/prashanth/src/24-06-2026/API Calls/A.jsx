import React, { useEffect, useState } from "react";

function A() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2>Users List</h2>

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default A