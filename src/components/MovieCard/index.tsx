"use client";

import React from "react";
import Image from "next/image";
import { IMovie } from "@/models/IMovie";
import { imagePath } from "@/utils/imagePath";
import clsx from "clsx";

type MovieCardProps = {
  movie: IMovie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div key={movie.id} className="group flex flex-col gap-2">
      <div
        className={clsx(
          "group relative grid place-items-center cursor-pointer overflow-hidden rounded-xl",
          "min-h-[255px] sm:min-h-[300px] lg:min-h-[400px] xl:min-h-[455px]",
          "transition-all group-hover:shadow-xl"
        )}
      >
        <Image
          className="transition-all filter brightness-100 group-hover:brightness-75 group-hover:scale-105 object-center object-cover"
          fill
          alt={movie.original_title}
          src={imagePath(movie.poster_path, "w780")}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-black">{movie.title}</h3>
        <div className="flex gap-2 text-xs text-slate-600 font-thin">
          <span>{new Date(movie.release_date).getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
