import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const inputChangeHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={name} onChange={inputChangeHandler} />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
