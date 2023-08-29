"use client";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import MoviesCarouselItem from "./MoviesCarouselItem";
import { MovieWithCredits } from "@/models/IMovie";
import { ArrowLeft, ArrowRight } from "react-feather";
import SwipeableViews, { OnSwitchingCallback } from "react-swipeable-views";
import MoviesCarouselSkeleton from "./MoviesCarouselSkeleton";

type Props = {
  movies: MovieWithCredits[];
  containerClassName?: string;
  autoplayInterval?: number;
};

const MoviesCarousel = ({
  movies,
  containerClassName,
  autoplayInterval = 8000,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
  const autoPlayIntervalRef = useRef<NodeJS.Timer | undefined>(undefined);

  const allImagesLoaded = imagesLoadedCount === movies.length;

  const handleImageLoaded = () => setImagesLoadedCount((prev) => prev + 1);
  const handleChangeIndexManually = (index: number) => {
    clearTimeout(autoPlayIntervalRef.current);
    setCurrentIndex(index);
    autoPlayIntervalRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, autoplayInterval);
  };

  const handleSwitching: OnSwitchingCallback = (index, type) => {
    if (type != "end") return;
    if (index === movies.length - 1) {
      handleChangeIndexManually(0);
    }
  };

  useEffect(() => {
    if (!allImagesLoaded) return;
    autoPlayIntervalRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, autoplayInterval);

    return () => clearTimeout(autoPlayIntervalRef.current);
  }, [autoplayInterval, movies.length, allImagesLoaded]);

  const handlePrevClick = () => {
    handleChangeIndexManually(
      currentIndex === 0 ? movies.length - 1 : currentIndex - 1
    );
  };

  const handleNextClick = () => {
    handleChangeIndexManually((currentIndex + 1) % movies.length);
  };

  return (
    <div className={clsx("flex flex-col relative overflow-hidden")}>
      {!allImagesLoaded && <MoviesCarouselSkeleton />}
      <SwipeableViews
        index={currentIndex}
        onChangeIndex={handleChangeIndexManually}
        onSwitching={handleSwitching}
        enableMouseEvents
        className={clsx(
          "transition-transform duration-300",
          allImagesLoaded ? "opacity-100" : "opacity-0",
          containerClassName
        )}
      >
        {movies.map((movie) => (
          <MoviesCarouselItem
            key={movie.id}
            movie={movie}
            onImageLoad={handleImageLoaded}
          />
        ))}
      </SwipeableViews>
      <div
        className={clsx(
          "flex w-full justify-center items-center mt-2",
          !allImagesLoaded ? "hidden" : "block"
        )}
      >
        <ArrowLeft className="cursor-pointer" onClick={handlePrevClick} />
        <ArrowRight className="cursor-pointer ml-4" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default MoviesCarousel;
