import { useState, useEffect } from "react";
import { MoviesHandler } from "../components/MoviesHandler";
import { PagingNav } from "../components/PagingNav";
import { IMovie } from "../models/IMovie";
import { fetchMoviesPage } from "../services/fetchMovies";
import "../styles/main.scss";

export function Movies() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [apiError, setApiError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesPage(page)
      .then((res) => {
        if (res) {
          setMovies(res.data);
          setTotalPages(res.totalPages);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setApiError(error.message);
      });
  }, [page]);

  return (
    <>
      <div className="card">
        <h1>Movies</h1>
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <MoviesHandler movies={movies} apiError={apiError} />
            <PagingNav
              currentPage={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          </>
        )}
      </div>
    </>
  );
}
