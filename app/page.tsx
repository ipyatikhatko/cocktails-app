"use client";

import client from "@/lib/api/client";
import { useEffect, useState } from "react";
import MoviesCarousel from "../modules/common/components/MoviesCarousel";
import { IMovie } from "@/modules/common/types/movie";

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrending = async (pageNum: number) => {
    setIsLoading(true);
    const { data, error } = await client.GET(
      "/3/trending/movie/{time_window}",
      {
        params: {
          path: { time_window: "week" },
          query: {
            page: pageNum,
          },
        },
      }
    );

    if (!error && data) {
      setMovies((prev) => [...prev, ...(data.results as IMovie[])]);
      setTotalPages(data.total_pages);
    }
    setIsLoading(false);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetchTrending(page);
  }, [page]);

  return (
    <div className="flex flex-col gap-4">
      {movies.length > 0 && (
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Trending Movies</h3>
          <MoviesCarousel
            isLoading={isLoading}
            movies={movies}
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
