import api from "@/api";
import { getMovieCredits } from "@/api/movie";
import { IDiscoverMovies } from "@/models/IDiscoverMovies";
import { MovieWithCredits } from "@/models/IMovie";

export default async function getCarouselMovies() {
  const res = await api.get<IDiscoverMovies>(
    "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const movies = [...res.data.results] as MovieWithCredits[];
  for (let movie of movies) {
    const index = movies.indexOf(movie);
    const movieCredits = await getMovieCredits(movie.id);
    movies[index] = { ...movie, credits: movieCredits.data };
  }

  return {
    ...res.data,
    results: movies,
  };
}