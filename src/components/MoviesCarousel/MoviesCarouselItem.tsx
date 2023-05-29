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
      <div className="p-4 sm:gap-4 flex flex-col sm:flex-row w-full h-full">
        <div className="h-full relative sm:block sm:w-1/3">
          <Image
            draggable={false}
            alt="poster"
            fill
            style={{
              objectFit: "contain",
            }}
            src={imagePath(movie.poster_path, "w780")}
          />
        </div>
        <div className="h-fit z-50 w-full sm:w-2/3 sm:h-full justify-between sm:justify-start flex flex-col gap-3 pb-8">
          <div>
            <h1 className="text-lg text-center sm:text-start sm:text-xl text-white sm:w-[80%]">
              {movie.title}
            </h1>
            <div className="flex items-center justify-center sm:justify-start gap-1">
              <Star height={15} className="stroke-yellow-400" />
              <span className="text-yellow-400">{movie.vote_average}</span>
              <span className="text-white text-sm">({movie.vote_count})</span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col h-full justify-between">
            <div className="flex flex-col w-full lg:w-2/3">
              <h3 className="text-sm text-white">Overview:</h3>
              <div className="p-2 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl">
                <p className="text-xs lg:text-sm font-thin text-slate-300 line-clamp-13">
                  {movie.overview}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:w-2/3">
              <h3 className="text-sm text-white">Cast:</h3>
              <div className="sm:grid grid-cols-3 gap-2">
                {movie.credits.cast.slice(0, 6).map((cast) => (
                  <div
                    key={cast.id}
                    className="flex items-center gap-2 px-2 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl"
                  >
                    <Image
                      style={{
                        clipPath: "circle(40%)",
                        objectFit: "contain",
                        filter: "grayscale()",
                      }}
                      alt={cast.name}
                      src={imagePath(cast.profile_path, "w342")}
                      width={40}
                      height={40}
                    />
                    <div className="text-xs text-white">
                      <span>{cast.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCarouselItem;
