import { IMovie } from "./IMovie";
export interface IDiscoverMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
