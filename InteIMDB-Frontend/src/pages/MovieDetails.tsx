import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../services/fetchMovies";
import { IMovie } from "../models/IMovie";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    fetchMovieById(Number(id))
      .then((res) => {
        res && setMovie(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>MovieDetails for {id}</h1>
      <h3>{movie?.price}</h3>
    </>
  );
}
