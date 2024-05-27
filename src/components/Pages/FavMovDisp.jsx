import { useSelector } from "react-redux";
import Cards from "../Card/Card";

const FavMovDisp = () => {
  const movies = useSelector((state) => state.movies.data);
  const favorites = useSelector((state) => state.movies.favorites);

  const favoriteMovies = movies.filter((movie) => favorites[movie.id])
    .sort((a, b) => favorites[b.id] - favorites[a.id]);

  return (
    <div className="movie__list">
      {favorites && (
        <>
          <h2 className="list__title">Favorite Movies</h2>
          <div className="list__cards">
            {favoriteMovies.map((movie) => (
              <Cards key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FavMovDisp;
