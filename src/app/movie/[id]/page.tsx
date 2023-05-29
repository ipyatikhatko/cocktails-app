import { getMovieCredits, getMovieDetails } from "@/api/movie";
import Image from "next/image";
import { imagePath } from "@/utils/imagePath";
import { Star } from "react-feather";
import MovieCast from "@/components/MovieCast";

export default async function Page(props: { params: { id: string } }) {
  const movieDetails = await getMovieDetails(props.params.id);
  const movieCredits = await getMovieCredits(props.params.id);

  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    production_countries,
    vote_average,
    overview,
    genres,
    budget,
    revenue,
  } = movieDetails.data;

  const { cast } = movieCredits.data;

  return (
    <main className="h-full">
      <section className="relative h-[70vh] lg:h-[60vh] overflow-hidden">
        <Image
          alt="poster-backdrop"
          src={imagePath(backdrop_path, "w1280")}
          blurDataURL={imagePath(poster_path, "w342")}
          placeholder="blur"
          style={{
            filter: "blur(2px)",
            scale: 1.1,
            objectFit: "cover",
          }}
          fill
        />
        <div className="w-full h-full flex justify-center items-center sm:justify-start lg:mx-auto lg:my-0 lg:max-w-screen-xl">
          <div className="rounded-xl ml-4 overflow-hidden relative w-[300px] h-[450px] lg:w-[380px] lg:h-[570px]">
            <Image
              alt="poster"
              src={imagePath(poster_path, "w1280")}
              blurDataURL={imagePath(poster_path, "w342")}
              placeholder="blur"
              style={{
                objectFit: "cover",
              }}
              fill
            />
          </div>
        </div>
      </section>
      <section className="p-4 lg:mx-auto lg:my-0 lg:max-w-screen-xl">
        <h3 className="font-bold text-2xl mb-4">{title}</h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Star className="text-yellow-400" />
            <span>{vote_average.toFixed(2)}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Release date:</span>
            <span>{new Date(release_date).toLocaleDateString("en-US")}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Genre:</span>
            <div className="flex flex-wrap gap-1">
              {genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-gray-200 px-2 py-1 rounded font-thin text-sm grid place-items-center"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Country:</span>
            <div className="flex flex-wrap gap-1">
              {production_countries.map((country) => (
                <span
                  key={country.iso_3166_1}
                  className="bg-gray-200 px-2 py-1 rounded font-thin text-sm grid place-items-center"
                >
                  {country.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Budget:</span>
            <span className="font-thin text-sm">
              {budget.toLocaleString()}$
            </span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Revenue:</span>
            <span className="font-thin text-sm">
              {revenue.toLocaleString()}$
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Overview:</span>
            <p className="font-thin text-sm lg:w-2/3">{overview}</p>
          </div>
        </div>
      </section>
      <hr />
      <MovieCast cast={cast} />
    </main>
  );
}
