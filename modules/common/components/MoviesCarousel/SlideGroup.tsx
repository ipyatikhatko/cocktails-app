import React from "react";
import { IMovie } from "@/modules/common/types/movie";
import SlideItem from "./SlideItem";

interface SlideGroupProps {
  movies: IMovie[];
}

export default function SlideGroup(props: SlideGroupProps) {
  const { movies } = props;
  return (
    <div className="slide-group grid grid-flow-col w-screen">
      {movies.map((movie) => (
        <SlideItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
