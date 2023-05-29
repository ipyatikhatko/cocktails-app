import DiscoverMoviesNav from "@/components/DiscoverMoviesNav";
import MovieCard from "@/components/MovieCard";
import PopularMoviesCarousel from "@/components/MoviesCarousel";
import { IDiscoverMovies } from "@/models/IDiscoverMovies";
import Link from "next/link";
import getCarouselMovies from "@/api/pages/home/getCarouselMovies";
import { Suspense } from "react";
import { getMovieGenres } from "@/api/movie";

export default async function Home() {
  const carouselMovies = await getCarouselMovies();
  const movieGenres = await getMovieGenres("en");
  return (
    <main>
      <div className="flex flex-nowrap h-[70vh] w-screen">
        <PopularMoviesCarousel movies={carouselMovies.results.slice(0, 6)} />
      </div>
      <section className="mx-auto max-w-screen-xl px-4 my-4">
        <h1 className="w-fit text-xl text-blue-400">Discover movies</h1>
        <div className="flex items-center mb-4">
          <Suspense fallback={<div className="animate-pulse h-full rounded" />}>
            <DiscoverMoviesNav genres={movieGenres.data.genres} />
          </Suspense>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-x-2 lg:grid-cols-4 lg:gap-x-4 gap-x-1 gap-y-5">
          {carouselMovies.results.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
