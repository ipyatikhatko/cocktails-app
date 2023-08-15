import React from "react";
import Image from "next/image";
import { MovieWithCredits } from "@/models/IMovie";
import { Star } from "react-feather";
import { imagePath } from "@/utils/imagePath";

type Props = {
  movie: MovieWithCredits;
};

const MoviesCarouselItem = ({ movie }: Props) => {
  return (
    <div className="relative flex h-full w-full min-w-full min-h-full overflow-hidden">
      <div className="z-40 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full filter sm:brightness-50">
        <Image
          draggable={false}
          fill
          alt="movie"
          style={{
            objectFit: "cover",
          }}
          src={imagePath(movie.backdrop_path, "w1280")}
        />
      </div>
      <div className="p-4 sm:gap-4 flex flex-col mx-auto max-w-screen-xl h-fit">
        <h1 className="mb-4 z-50 text-sm sm:text-2xl font-bold text-white">
          {movie.title}
        </h1>
        <div className="flex flex-col xs:flex-row items-center xs:items-end">
          <div className="z-50 rounded-xl overflow-hidden sm:block">
            <Image
              draggable={false}
              width={320}
              height={640}
              className="w-[280px] sm:h-[400px] md:h-[470px] md:w-[320px]"
              alt="poster"
              style={{
                objectFit: "cover",
              }}
              src={imagePath(movie.poster_path, "w780")}
            />
          </div>
          <div className="hidden z-50 w-full h-full sm:w-2/3 xs:flex items-end justify-end p-4 bg-black/50">
            <p className="text-sm lg:text-xl font-thin text-white leading-loose line-clamp-4 md:line-clamp-13">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCarouselItem;
