import React, { useEffect, useState } from "react";

function User() {
  //TODO fetch data from internet with fetch function

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); //initial value is true

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false)); // We made the loading text, here it becomes false and the text disappears
  });

  return (
    <div>
      <h2>Users</h2>

      {loading && <div> Loading... </div>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <b>Name: </b>
            {user.name}
            <br />
            <b>User Name: </b>
            {user.username}
            <br />
            <b>Email: </b>
            {user.email} <br />
            <br />
          </li>
          //? We printed the names and user names of the data we pulled from the internet.
        ))}
      </ul>
    </div>
  );
}

export default User;
