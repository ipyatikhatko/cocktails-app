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
    <main className="h-full lg:mx-auto  lg:max-w-screen-xl">
      {/* <header className="mx-4 lg:my-0">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-2xl leading-tight">
              {title}
            </span>
            <h4 className="mb-4 text-sm text-slate-700">
              &quot;{tagline}&quot;
            </h4>
          </div>
          <span className="flex">
            <Star className="text-yellow-400" />
            <span>{vote_average.toFixed(2)}</span>
          </span>
        </div>
      </header> */}
      <section className="sm:mx-4 lg:my-0 flex flex-col sm:flex-row sm:rounded-xl overflow-hidden mt-2 shadow-xl shadow-black/50">
        <div className="relative grid place-items-center p-4 sm:p-4 w-full sm:w-[20vw] h-full">
          <Image
            fill
            alt="poster"
            className="blur scale-110"
            src={imagePath(poster_path, "w780")}
            blurDataURL={imagePath(poster_path, "w342")}
            placeholder="blur"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="bg-gradient-to-b from-white via-transparent to-transparent w-full h-full top-0 left-0 absolute" />
          <div className="z-50 flex justify-between items-start">
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-2xl leading-tight">
                {title}
              </span>
              <h4 className="mb-4 text-sm text-slate-700">
                &quot;{tagline}&quot;
              </h4>
            </div>
            <span className="flex">
              <Star className="text-yellow-400" />
              <span>{vote_average.toFixed(2)}</span>
            </span>
          </div>
          <div className="z-50 w-fit rounded-xl overflow-hidden">
            <Image
              alt="poster"
              width={320}
              height={640}
              src={imagePath(poster_path, "w780")}
              className="w-[70vw] sm:w-[15vw]"
              blurDataURL={imagePath(poster_path, "w342")}
              placeholder="blur"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="relative h-fit sm:h-auto sm:flex-1">
          <Image
            alt="poster-backdrop"
            src={imagePath(backdrop_path, "w1280")}
            blurDataURL={imagePath(poster_path, "w342")}
            placeholder="blur"
            style={{
              filter: "saturate(0.5)",
              objectFit: "cover",
            }}
            fill
          />
          <div className="bg-gradient-to-r from-black/90 to-white/70 w-full h-full top-0 left-0 absolute" />
          <div className="relative p-2 sm:p-4 w-full h-full flex flex-col justify-center max-w-md xs:mx-auto sm:mx-0">
            <div className="text-white divide-y divide-white/20 text-xs flex flex-col gap-2 [&>div]:pt-2">
              <div className="flex gap-2 justify-between">
                <span className="font-light">Release date:</span>
                <span className="bg-black text-white px-2 py-1 rounded-full">
                  {new Date(release_date).toLocaleDateString("en-US")}
                </span>
              </div>
              <div className="flex gap-2 xs:gap-0 xs:justify-between xs:flex-wrap">
                <span className="font-light">Genre:</span>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="bg-black text-white px-2 py-1 rounded-full font-thin h-fit grid place-items-center"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="font-light">Country:</span>
                <div className="flex flex-wrap gap-2">
                  {production_countries.map((country) => (
                    <span
                      key={country.iso_3166_1}
                      className="bg-black text-white px-2 py-1 rounded-full font-thin grid place-items-center"
                    >
                      {country.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-light">Budget:</span>
                <span className="font-thin bg-black text-white px-2 py-1 rounded-full">
                  {budget.toLocaleString()}$
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-light">Revenue:</span>
                <span className="font-thin bg-black text-white px-2 py-1 rounded-full">
                  {revenue.toLocaleString()}$
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8 mx-4 lg:my-0">
        <div className="flex flex-wrap gap-4 justify-center items-center h-full">
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
      <section className="mx-4 lg:my-0">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl mb-4">Overview:</span>
          <p className="font-thin text-sm lg:text-2xl text-slate-700">
            {overview}
          </p>
        </div>
      </section>
      <hr className="my-4" />
      <MovieCast className="mb-8 mx-4 lg:my-0" cast={cast} />
    </main>
  );
}
