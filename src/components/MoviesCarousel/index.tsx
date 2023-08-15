"use client";
import React, { useEffect, useRef, useState } from "react";
import MoviesCarouselItem from "./MoviesCarouselItem";
import { MovieWithCredits } from "@/models/IMovie";
import clsx from "clsx";
import { Play, Pause } from "react-feather";

type Props = {
  movies: MovieWithCredits[];
  containerClassName?: string;
};

const MoviesCarousel = ({ movies, containerClassName }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [requestedByUser, setRequestedByUser] = useState(false);

  const handleSelectItem = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    setSelectedSlide(index);
    setRequestedByUser(true);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollCarousel = () => {
      if (!requestedByUser) {
        let nextIndex = (currentIndex + 1) % movies.length;
        let nextPosition = nextIndex * container.offsetWidth;

        setCurrentIndex(nextIndex);
        container.scrollTo({
          left: nextPosition,
          behavior: "smooth",
        });
      } else if (requestedByUser) {
        let nextPosition = selectedSlide * container.offsetWidth;

        setCurrentIndex(selectedSlide);
        container.scrollTo({
          left: nextPosition,
          behavior: "smooth",
        });
      }
      setRequestedByUser(false);
    };

    const timeout = setTimeout(scrollCarousel, requestedByUser ? 200 : 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, selectedSlide, requestedByUser, movies.length]);

  return (
    <div className="flex flex-col relative overflow-hidden">
      <div
        ref={containerRef}
        className={clsx(
          "flex h-full w-full overflow-hidden",
          containerClassName
        )}
      >
        {movies.map((movie) => (
          <MoviesCarouselItem key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex w-full justify-center items-center">
        <div className="rounded-full flex gap-4 lg:gap-2 items-center h-8 w-fit">
          {movies.map((m, i) => (
            <div
              className="group grid place-items-center h-full cursor-pointer z-50"
              key={m.id}
              onClick={(e) => handleSelectItem(e, i)}
            >
              <div
                className={clsx(
                  "w-8 h-2 lg:h-1 bg-slate-200 rounded group-hover:bg-opacity-60",
                  "transition-all",
                  currentIndex === i && "bg-slate-400"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesCarousel;
