import React from "react";
import Image from "next/image";
import { DiscoverMovie } from "@/models/DiscoverMovies";
import { Star } from "react-feather";

type Props = {
  item: DiscoverMovie;
};

const MoviesCarouselItem = ({ item }: Props) => {
  return (
    <div className="relative flex h-full w-full min-w-full">
      {/* image as background element */}
      <div className="absolute w-full h-full filter brightness-50 sm:scale-110 sm:blur-xl">
        <Image
          draggable={false}
          fill
          alt="movie"
          style={{
            objectFit: "cover",
          }}
          src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}
        />
      </div>
      <div className="p-4 sm:gap-4 flex flex-col sm:flex-row w-full h-full">
        <div className="relative w-1/3 h-full hidden sm:block">
          <Image
            draggable={false}
            alt="poster"
            fill
            style={{
              objectFit: "contain",
              // objectPosition: "center",
            }}
            src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}
          />
        </div>
        <div className="z-50 w-full sm:w-2/3 h-full flex flex-col justify-between sm:justify-start gap-3 pb-8">
          <div>
            <h1 className="text-xl text-white w-[80%]">
              {item.title}{" "}
              <span className="text-slate-300 text-sm">
                ({new Date(item.release_date).getFullYear()})
              </span>
            </h1>
            <div className="flex items-center gap-1">
              <Star height={15} className="stroke-yellow-400" />
              <span className="text-yellow-400">{item.vote_average}</span>
              <span className="text-white text-sm">({item.vote_count})</span>
            </div>
          </div>
          <div className="p-2 sm:p-0 bg-black bg-opacity-50 sm:bg-transparent">
            <p className="text-sm font-thin text-slate-300">{item.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCarouselItem;
