import { useEffect, useState } from "react";
import "./App.css";
import { MoviesHandler } from "./components/MoviesHandler";
import { Movie } from "./models/Movie";
import { fetchMoviesPage } from "./services/fetchMovies";
import { PagingNav } from "./components/PagingNav";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [apiError, setApiError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    fetchMoviesPage(page)
      .then((res) => {
        setTimeout(() => {
          if (res) {
            setMovies(res.data);
            setTotalPages(res.totalPages);
          }
          setIsLoading(false);
        }, 1000);
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

export default App;
