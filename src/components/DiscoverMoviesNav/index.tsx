"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";

type DiscoverMoviesFilterProps = {
  genres: { id: string | number; name: string }[];
  activeGenreId?: string | number;
};

const DiscoverMoviesNav = ({
  genres,
  activeGenreId,
}: DiscoverMoviesFilterProps) => {
  return (
    <nav className="w-full py-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-2">
        {genres.map((genre) => (
          <Link key={genre.id} href={`/genre/${genre.id}`}>
            <span
              className={clsx(
                "py-1 rounded-full hover:bg-gray-200",
                activeGenreId == genre.id && "bg-blue-300 text-blue-400"
              )}
            >
              {genre.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DiscoverMoviesNav;
