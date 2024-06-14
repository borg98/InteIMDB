import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovieById } from "../services/fetchMovies";
import { IMovie } from "../models/IMovie";
import "../styles/components/MovieDetails.scss";
import { AddToCartButton } from "../components/specific/AddToCartButton";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();
  const imgUrl = `${movie?.img_url}?text=${movie?.title}`;
  const navigate = useNavigate();

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
      <div className="movie-container">
        {movie ? (
          <>
            <span
              className="movie-container__button"
              onClick={() => {
                navigate("/");
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>Back
            </span>
            <div className="movie-container__details">
              <img
                className="movie-container__details__img test"
                src={imgUrl}
                alt={movie.title}
              />
              <div className="movie-container__details__info">
                <h3 className="movie-container__details__info__title">
                  {movie.title}
                </h3>
                <div className="movie-container__details__info__text-container">
                  <p className="movie-container__details__info__text-container__text">
                    Year:
                  </p>
                  <p className="movie-container__details__info__text-container__text--year">
                    {movie.year}
                  </p>
                </div>
                <div className="movie-container__details__info__text-container">
                  <p className="movie-container__details__info__text-container__text">
                    Genre:
                  </p>
                  <p className="movie-container__details__info__text-container__text--genre">
                    {movie.genre}
                  </p>
                </div>
                <div className="movie-container__details__info__text-container">
                  <p className="movie-container__details__info__text-container__text">
                    Rating:
                  </p>
                  <p className="movie-container__details__info__text-container__text--rating">
                    {movie.rating} / 10
                  </p>
                </div>
                <div className="movie-container__details__info__text-container">
                  <p className="movie-container__details__info__text-container__text">
                    Price:
                  </p>
                  <p className="movie-container__details__info__text-container__text--price">
                    {movie.price} Kr
                  </p>
                </div>
              </div>
            </div>
            <AddToCartButton movie={movie} />
          </>
        ) : (
          <div className="spinner"></div>
        )}
      </div>
    </>
  );
}
