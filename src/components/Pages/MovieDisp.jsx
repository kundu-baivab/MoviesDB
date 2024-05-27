import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/slices/movies";
import Cards from "../Card/Card";

const MovieDisp = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  
  useEffect(() => {
    console.log("Before Dispatch");
    dispatch(fetchMovies());
    console.log("Fetched data");
  }, [dispatch]);

  // Convert movies object to an array of movie objects
  const moviesArray = movies ? Object.values(movies) : [];

  // Sort the array by rating in descending order
  const sortedMovies = moviesArray.sort((a, b) => b.rating - a.rating);

  return (
    <div className="movie__list">
      {movies && (
        <>
          <h2 className="list__title">Movie List</h2>
          <div className="list__cards">
            {sortedMovies.map((item) => (
              <Cards key={item.id} movie={item}/>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDisp;
