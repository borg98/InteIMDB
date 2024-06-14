import { useNavigate } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import "../styles/components/MovieCard.scss";
import { useState } from "react";

interface MovieCardProps {
  movie: IMovie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const imgUrl = movie.img_url + `?text=${movie.title.replace(/ /g, "+")}`;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div
        className="movie-card"
        onClick={() => {
          navigate(`/movies/${movie.id}`);
        }}
      >
        <div
          className="spinner"
          style={{ display: !isLoading ? "none" : "auto" }}
        ></div>
        <img
          src={imgUrl}
          alt={movie.title}
          className="movie-card__poster"
          onLoad={handleImageLoad}
          style={{ display: isLoading ? "none" : "block" }}
        />

        <div className="movie-card__title">{movie.title}</div>
        <div className="movie-card__year">{movie.year}</div>
        <div className="movie-card__genre">{movie.genre}</div>
        <div className="movie-card__rating">{movie.rating}/10 toast</div>
      </div>
    </>
  );
}
