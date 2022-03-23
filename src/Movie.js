import React from "react";
const Movie = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  );
};
export default Movie;
