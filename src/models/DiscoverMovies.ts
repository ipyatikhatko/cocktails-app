import { Movie } from "./Movie";
export interface DiscoverMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
