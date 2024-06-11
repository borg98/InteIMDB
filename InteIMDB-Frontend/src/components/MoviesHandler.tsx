import { IMovie } from "../models/IMovie";
import { MovieCard } from "./MovieCard";

interface MoviesHandlerProps {
  apiError: string;
  movies: IMovie[];
}

export function MoviesHandler({ apiError, movies }: MoviesHandlerProps) {
  return (
    <>
      <div>
        {apiError ? (
          <h3>
            Could not get movies
            <br />
            Error: {apiError}
          </h3>
        ) : (
          <div className="card-container">
            {movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
