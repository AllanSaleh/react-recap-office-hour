import React, { useEffect, useState } from "react";

const UserList = () => {
  const [sentence, setSentence] = useState("State is good");

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) =>
      result.json().then((json) => console.log(json))
    );
  };

  //   useEffect(fetchUsers, []);

  useEffect(fetchUsers, [sentence]);

  const handleClick = () => {
    sentence === "State is good"
      ? setSentence("State is best")
      : setSentence("State is good");
  };
  return (
    <div>
      <h1>UserList</h1>
      <p>{sentence}</p>
      <button onClick={handleClick}>Make it best</button>
    </div>
  );
};

export default UserList;
