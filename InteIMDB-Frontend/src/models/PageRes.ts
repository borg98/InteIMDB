import { Movie } from "./Movie";

export interface PageRes {
  data: Movie[];
  totalPages: number;
}
