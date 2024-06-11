import axios from "axios";
import { IMovie } from "../models/IMovie";
import { PageRes } from "../models/IPageRes";

export async function fetchAllMovies() {
  try {
    const response = await axios.get<IMovie[]>(
      "https://inte-imdb.vercel.app/movies"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieById(id: number) {
  try {
    const response = await axios.get<IMovie>(
      `https://inte-imdb.vercel.app/movies/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMoviesPage(page: number) {
  try {
    const response = await axios.get<PageRes>(
      `https://inte-imdb.vercel.app/movies/pagenr/${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
