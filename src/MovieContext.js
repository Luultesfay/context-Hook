import React, { useState, createContext } from "react";

export const MovieContext = createContext();
console.log(MovieContext);

export const MovieProvider = (props) => {
  console.log(props);
  const [movies, setMovies] = useState([
    { id: 1, name: "the Hook", price: "$20" },
    { id: 2, name: "Dracula", price: "$29" },
    { id: 3, name: "The mask of Zero", price: "$10" },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
