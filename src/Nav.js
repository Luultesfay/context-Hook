import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);
  console.log(movies);
  return (
    <div className="nav-movie">
      <h1>Luul Man</h1>
      <h3>list of movies :{movies.length}</h3>
    </div>
  );
};

export default Nav;
