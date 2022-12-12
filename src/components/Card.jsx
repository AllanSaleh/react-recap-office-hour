import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.imagePath} alt="logo" />
      <h1>{props.nourtitle}</h1>
      <p>{props.parag}</p>
    </div>
  );
};

export default Card;
