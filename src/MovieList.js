import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
const MovieList = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((mov) => (
        <Movie name={mov.name} price={mov.price} key={mov.id} />
      ))}
    </div>
  );
};
export default MovieList;
