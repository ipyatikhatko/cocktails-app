import React from "react";
import Image from "next/image";
import { IMovie } from "@/modules/common/types/movie";
import SlideItemInfo from "./SlideItemInfo";

interface SlideItemProps {
  movie: IMovie;
}

export default function SlideItem(props: SlideItemProps) {
  const { movie } = props;
  return (
    <div className="slide-item relative flex flex-col">
      <div className="relative aspect-[2/3] flex-1 overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="slide-item-info absolute w-full h-full top-0 left-0 z-50 opacity-0 backdrop-blur-sm bg-black/60">
        <SlideItemInfo
          title={movie.title}
          description={movie.overview}
          image={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        />
      </div>
    </div>
  );
}
