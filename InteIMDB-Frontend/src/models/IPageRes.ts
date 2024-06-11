import { IMovie } from "./IMovie";

export interface PageRes {
  data: IMovie[];
  totalPages: number;
}
