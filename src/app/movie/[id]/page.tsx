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
    production_companies,
    tagline,
    revenue,
  } = movieDetails.data;

  const { cast } = movieCredits.data;

  return (
    <main className="h-full mx-4 lg:mx-auto lg:my-0 lg:max-w-screen-xl">
      <section className="flex h-[60vh] rounded-xl overflow-hidden mt-8 shadow-xl shadow-black/80">
        <div className="relative w-[380px] h-full">
          <Image
            alt="poster"
            src={imagePath(poster_path, "w780")}
            blurDataURL={imagePath(poster_path, "w342")}
            placeholder="blur"
            style={{
              objectFit: "cover",
            }}
            fill
          />
        </div>
        <div className="relative flex-1">
          <div className="absolute z-50 p-4 top-0 left-0 w-full h-full flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-2xl ">{title}</span>
                <span className="flex">
                  <Star className="text-yellow-400" />
                  <span>{vote_average.toFixed(2)}</span>
                </span>
              </div>
              <hr />
              <h4 className="mb-4 text-xl text-slate-700">
                &quot;{tagline}&quot;
              </h4>
            </div>
            <div className="divide-y divide-white/50 text-white flex flex-col gap-2 [&>div]:pt-2">
              <div className="flex gap-2 justify-between">
                <span className="font-light">Release date:</span>
                <span className="bg-black text-white px-2 py-1">
                  {new Date(release_date).toLocaleDateString("en-US")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-light">Genre:</span>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-black text-white px-2 py-1 rounded-full font-thin h-fit text-sm grid place-items-center"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-light">Country:</span>
                <div className="flex flex-wrap gap-2">
                  {production_countries.map((country) => (
                    <span
                      key={country.iso_3166_1}
                      className="bg-black text-white px-2 py-1 rounded-full font-thin text-sm grid place-items-center"
                    >
                      {country.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-light">Budget:</span>
                <span className="font-thin ">{budget.toLocaleString()}$</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-light">Revenue:</span>
                <span className="font-thin ">{revenue.toLocaleString()}$</span>
              </div>
            </div>
          </div>
          <Image
            alt="poster-backdrop"
            src={imagePath(backdrop_path, "w1280")}
            blurDataURL={imagePath(poster_path, "w342")}
            placeholder="blur"
            className="hidden lg:block"
            style={{
              filter: "saturate(0.5)",
              objectFit: "cover",
            }}
            fill
          />
          <div className="bg-gradient-to-b from-white via-transparent to-black w-full h-full top-0 left-0 absolute" />
        </div>
      </section>
      <section className="pt-4">
        <div className="flex gap-4 justify-center items-center h-full">
          {production_companies
            .filter((v) => !!v.logo_path)
            .map((pc) => (
              <Image
                width={125}
                height={65}
                style={{
                  maxHeight: 65,
                  objectFit: "contain",
                }}
                key={pc.id}
                src={imagePath(pc.logo_path, "w185")}
                alt={pc.name}
              />
            ))}
        </div>
      </section>
      <hr className="lg:border-none my-4" />
      <section>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl mb-4">Overview:</span>
          <p className="font-thin text-sm lg:text-2xl text-slate-700">
            {overview}
          </p>
        </div>
      </section>
      <hr className="my-4" />
      <MovieCast className="mb-8" cast={cast} />
    </main>
  );
}
