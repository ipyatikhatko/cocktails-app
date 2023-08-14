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
    <div className="relative flex h-full w-full min-w-full overflow-hidden">
      <div className="z-40 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black" />
      <div className="absolute top-0 left-0 w-full h-full filter sm:brightness-50 blur-sm sm:blur-none scale-110">
        <Image
          draggable={false}
          fill
          alt="movie"
          style={{
            objectPosition: "center",
            objectFit: "cover",
          }}
          src={imagePath(movie.backdrop_path, "w1280")}
        />
      </div>
      <div className="p-4 sm:gap-4 flex flex-col sm:flex-row mx-auto max-w-screen-xl h-fit">
        <div className="z-50 rounded-xl overflow-hidden h-[500px] w-[280px] sm:h-[400px] md:h-[470px] md:w-[320px] relative sm:block">
          <Image
            draggable={false}
            alt="poster"
            fill
            style={{
              objectFit: "cover",
            }}
            src={imagePath(movie.poster_path, "w780")}
          />
        </div>
        <div className="z-50 w-full sm:w-2/3 justify-between flex flex-col gap-3 pb-8">
          <div>
            <h1 className="text-lg text-center sm:text-start sm:text-3xl font-bold text-white sm:w-[80%]">
              {movie.title}
            </h1>
            <div className="flex items-center justify-center sm:justify-start gap-1">
              <Star height={15} className="stroke-yellow-400" />
              <span className="text-yellow-400">{movie.vote_average}</span>
              <span className="text-white text-sm">({movie.vote_count})</span>
            </div>
          </div>
          <div>
            <p className="text-left lg:text-xl font-thin text-white leading-loose line-clamp-13">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCarouselItem;
