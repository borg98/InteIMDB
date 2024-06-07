import axios from "axios";
import { Movie } from "../models/Movie";
import { PageRes } from "../models/PageRes";

export async function fetchAllMovies() {
  try {
    const response = await axios.get<Movie[]>("http://localhost:3000/movies");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieById(id: number) {
  try {
    const response = await axios.get<Movie>(
      `http://localhost:3000/movies/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMoviesPage(page: number) {
  try {
    const response = await axios.get<PageRes>(
      `http://localhost:3000/movies/pagenr/${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
