import axios from "axios";
import { IMovie } from "../models/IMovie";
import { PageRes } from "../models/IPageRes";

export async function fetchAllMovies() {
  try {
    const response = await axios.get<IMovie[]>("http://localhost:3000/movies");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieById(id: number) {
  try {
    const response = await axios.get<IMovie>(
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
