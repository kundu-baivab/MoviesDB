import { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/slices/movies";

const Cards = ({ movie }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  const isFavorite = favorites[movie.id];

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsFavorited(!isFavorited);
    dispatch(toggleFavorite({ movieId: movie.id, timestamp: Date.now() }));
  };

  return (
    <>
      <div className="cards-wrapper">
        <Link to={movie.imdb_url} style={{ textDecoration: "none" }}>
          <div className="cards">
            <h3 className="cards__img">{movie ? movie.image : ""}</h3>
            <div className="cards__overlay">
              <div className="card__title">{movie ? movie.movie : ""}</div>
              <div className="card__runtime">
                <span className="card__rating">
                  {movie ? movie.rating : ""}
                </span>
                <FaStar />
              </div>
            </div>
            <button
              className={`favorite-button ${isFavorite ? "favorited" : ""}`}
              onClick={handleFavoriteClick}
            >
              <FaHeart/>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
