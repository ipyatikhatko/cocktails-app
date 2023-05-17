import DiscoverMoviesFilter from "@/components/DiscoverMoviesFilter";
import PopularMoviesCarousel from "@/components/MoviesCarousel";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { DiscoverMovies } from "@/models/DiscoverMovies";
import api from "@/utils/api";
import { ArrowDown } from "react-feather";

async function getMostPopMovies() {
  const res = await api.get<DiscoverMovies>(
    "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

export default async function Home() {
  const popMovies = await getMostPopMovies();
  return (
    <main className="">
      <div className="flex flex-nowrap h-[70vh] w-screen">
        <PopularMoviesCarousel movies={popMovies.results.slice(0, 5)} />
      </div>
      <section className="relative container mx-auto px-4 my-4">
        <h1 className="text-xl text-slate-400">Discover movies</h1>
        <DiscoverMoviesFilter />
      </section>
    </main>
  );
}
