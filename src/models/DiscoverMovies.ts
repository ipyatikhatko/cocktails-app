export interface DiscoverMovies {
  page: number;
  results: DiscoverMovie[];
  total_pages: number;
  total_results: number;
}

export interface DiscoverMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = "en",
  Fr = "fr",
}
