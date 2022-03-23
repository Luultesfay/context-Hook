import { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  console.log(movies);
  const MovieNameHandler = (e) => {
    setName(e.target.value);
  };
  const MoviePriceHandler = (e) => {
    setPrice(e.target.value);
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          value={name}
          name="name"
          onChange={MovieNameHandler}
        />
        <input
          type="text"
          value={price}
          name="price"
          onChange={MoviePriceHandler}
        />
        <button>ADD MOVIE</button>
      </form>
    </div>
  );
};
export default AddMovie;
