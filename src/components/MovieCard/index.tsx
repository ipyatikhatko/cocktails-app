"use client";

import React from "react";
import Image from "next/image";
import { IMovie } from "@/models/IMovie";
import { imagePath } from "@/utils/imagePath";

type MovieCardProps = {
  movie: IMovie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div key={movie.id} className="group flex flex-col gap-2">
      <Image
        className="transition-all rounded-lg filter brightness-100 group-hover:brightness-75 object-center object-cover"
        width={320}
        height={400}
        alt={movie.original_title}
        src={imagePath(movie.poster_path, "w780")}
      />
      <div className="flex flex-col">
        <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-black">
          {movie.title}
        </h3>
        <div className="flex gap-2 text-xs text-slate-600 font-thin">
          <span>{new Date(movie.release_date).getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
