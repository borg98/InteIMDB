import { Movie } from "../models/Movie";
import "../styles/components/MovieCard.scss";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const imgUrl = movie.img_url + `?text=${movie.title.replace(/ /g, "+")}`;
  return (
    <>
      <div className="movie-card">
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
