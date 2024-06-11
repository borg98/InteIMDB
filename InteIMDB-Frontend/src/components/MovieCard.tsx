import { useNavigate } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import "../styles/components/MovieCard.scss";

interface MovieCardProps {
  movie: IMovie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const imgUrl = movie.img_url + `?text=${movie.title.replace(/ /g, "+")}`;
  const navigate = useNavigate();
  return (
    <>
      <div
        className="movie-card"
        onClick={() => {
          navigate(`/movies/${movie.id}`);
        }}
      >
        <img src={imgUrl} alt={movie.title} className="movie-card__poster" />
        <div className="movie-card__title">
          {movie.title} ({movie.year})
        </div>
        <div className="movie-card__genre">{movie.genre}</div>
        <div className="movie-card__rating">{movie.rating}/10 toast</div>
      </div>
    </>
  );
}
