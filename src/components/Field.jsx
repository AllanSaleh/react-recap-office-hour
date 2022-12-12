import React, { useState } from "react";

const Field = () => {
  const [sentence, setSentence] = useState("State is good");

  const handleClick = () => {
    setSentence("State is best");
  };

  return (
    <div>
      <p>{sentence}</p>
      <button onClick={handleClick}>Make it best</button>
    </div>
  );
};

export default Field;
