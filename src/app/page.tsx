import DiscoverMoviesFilter from "@/components/DiscoverMoviesFilter";
import MovieCard from "@/components/MovieCard";
import PopularMoviesCarousel from "@/components/MoviesCarousel";
import { DiscoverMovies } from "@/models/DiscoverMovies";
import api from "@/api";
import { getMovieCredits } from "@/api/movie";
import { MovieWithCredits } from "@/models/Movie";
import Link from "next/link";

async function getMostPopMovies() {
  const res = await api.get<DiscoverMovies>(
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

export default async function Home() {
  const popMovies = await getMostPopMovies();
  return (
    <main className="">
      <div className="flex flex-nowrap h-[70vh] w-screen">
        <PopularMoviesCarousel movies={popMovies.results.slice(0, 6)} />
      </div>
      <section className="relative container mx-auto px-4 my-4">
        <div className="flex items-center justify-start absolute top-0 left-0 z-50">
          <h1 className="w-fit text-xl text-blue-400">Discover movies</h1>
        </div>
        <div className="flex items-center justify-end mb-4 sticky top-[10vh] pr-1 left-0 z-40">
          <DiscoverMoviesFilter />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-x-2 lg:grid-cols-4 lg:gap-x-4 gap-x-1 gap-y-5">
          {popMovies.results.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
