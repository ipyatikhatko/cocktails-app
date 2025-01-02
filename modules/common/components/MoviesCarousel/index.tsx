"use client";
import React, { useEffect, useRef, useState } from "react";
import { IMovie } from "@/modules/common/types/movie";
import "./carousel.css";
import SlideGroup from "./SlideGroup";

interface MoviesCarouselProps {
  page: number;
  totalPages: number;
  movies: IMovie[];
  isLoading: boolean;
  onPageChange: (page: number) => void;
}

export default function MoviesCarousel({
  page,
  totalPages,
  movies,
  isLoading,
  onPageChange,
}: MoviesCarouselProps) {
  const [groups, setGroups] = useState<IMovie[][]>([]);
  const [currentGroup, setCurrentGroup] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const gradient = e.currentTarget.querySelector(
      ".carousel-gradient"
    ) as HTMLElement;
    if (gradient) {
      gradient.style.setProperty("--mouse-x", `${x}px`);
      gradient.style.setProperty("--mouse-y", `${y}px`);
      gradient.classList.add("spotlight-mode");
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const gradient = e.currentTarget.querySelector(
      ".carousel-gradient"
    ) as HTMLElement;
    if (gradient) {
      gradient.classList.remove("spotlight-mode");
    }
  };

  const handleGroupChange = (direction: "prev" | "next") => {
    if (!scrollContainerRef.current) return;

    const groupWidth = scrollContainerRef.current.children[0]?.clientWidth ?? 0;
    const gap = 16;
    const scrollAmount = groupWidth + gap;

    if (direction === "prev") {
      const newGroup = Math.max(currentGroup - 1, 0);
      setCurrentGroup(newGroup);
      scrollContainerRef.current.style.transform = `translateX(-${
        newGroup * scrollAmount
      }px)`;
    } else {
      const maxGroup = groups.length - 1;
      const newGroup = Math.min(currentGroup + 1, maxGroup);
      setCurrentGroup(newGroup);
      scrollContainerRef.current.style.transform = `translateX(-${
        newGroup * scrollAmount
      }px)`;

      if (newGroup === maxGroup && page < totalPages) {
        onPageChange(page + 1);
      }
    }
  };

  const createGroups = (movies: IMovie[]) => {
    const groups = [];
    for (let i = 0; i < movies.length; i += 4) {
      groups.push(movies.slice(i, i + 4));
    }
    return groups;
  };

  useEffect(() => {
    setGroups(createGroups(movies));
  }, [movies, page]);

  return (
    <>
      <div
        className="group flex flex-col gap-4 relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex flex-row gap-4 transition-transform duration-300 ease-in-out"
          >
            {groups.map((group, index) => (
              <div key={`group-${index}`} className="flex-shrink-0">
                <SlideGroup key={`group-${index}`} movies={group} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 z-10">
          <div className="default-gradient" />
        </div>
      </div>
      <div className="flex items-center justify-end p-4">
        {isLoading && <div>Loading...</div>}
        <button
          disabled={(currentGroup === 0 && page === 1) || isLoading}
          className="bg-white disabled:opacity-50 hover:text-white hover:bg-slate-500/70 disabled:hover:text-black disabled:hover:bg-white text-black size-8 grid place-items-center"
          onClick={() => {
            if (currentGroup === 0 && page > 1) {
              onPageChange(page - 1);
            } else {
              handleGroupChange("prev");
            }
          }}
        >
          {"<"}
        </button>
        <button
          disabled={
            (currentGroup === groups.length - 1 && page === totalPages) ||
            isLoading
          }
          className="bg-white disabled:opacity-50 hover:text-white hover:bg-slate-500/70 disabled:hover:text-black disabled:hover:bg-white text-black size-8 grid place-items-center"
          onClick={() => handleGroupChange("next")}
        >
          {">"}
        </button>
      </div>
    </>
  );
}
