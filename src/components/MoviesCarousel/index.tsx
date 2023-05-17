"use client";
import React, { useEffect, useRef, useState } from "react";
import MoviesCarouselItem from "./MoviesCarouselItem";
import { DiscoverMovies } from "@/models/DiscoverMovies";
import clsx from "clsx";
import { Play, Pause } from "react-feather";

// Импорты...

type Props = {
  movies: DiscoverMovies["results"];
};

const MoviesCarousel = ({ movies }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [requestedByUser, setRequestedByUser] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const handleSelectItem = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    setSelectedSlide(index);
    setRequestedByUser(true);
  };

  const handleToggleAutoplay = () => {
    setAutoplayPaused(!autoplayPaused);
    setRequestedByUser(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollCarousel = () => {
      if (!autoplayPaused && !requestedByUser) {
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

    const timeout = setTimeout(scrollCarousel, requestedByUser ? 200 : 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    currentIndex,
    selectedSlide,
    requestedByUser,
    autoplayPaused,
    movies.length,
  ]);

  return (
    <div className="h-full relative overflow-hidden">
      <div ref={containerRef} className="flex h-full w-full overflow-hidden">
        {movies.map((movie) => (
          <MoviesCarouselItem key={movie.id} item={movie} />
        ))}
      </div>
      <div className="absolute z-50 bottom-4 left-0 flex w-full justify-center items-center">
        <div className="rounded-full flex gap-1 lg:gap-4 items-center h-8 w-fit">
          {movies.map((m, i) => (
            <div
              className="group grid place-items-center h-full cursor-pointer z-50"
              key={m.id}
              onClick={(e) => handleSelectItem(e, i)}
            >
              <div
                className={clsx(
                  "w-6 h-1 bg-slate-100 bg-opacity-30 rounded group-hover:bg-opacity-60",
                  "transition-all",
                  currentIndex === i && "bg-green-300 bg-opacity-80"
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute z-50 top-4 right-4">
        <button
          onClick={handleToggleAutoplay}
          className="appearance-none bg-transparent border-none cursor-pointer"
        >
          {autoplayPaused ? (
            <Pause className="stroke-orange-400" />
          ) : (
            <Play className="stroke-green-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MoviesCarousel;
