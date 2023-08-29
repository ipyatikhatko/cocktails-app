import React from "react";

const MoviesCarouselSkeleton = () => {
  return (
    <div className="xs:rounded-xl absolute top-0 left-0 flex h-full w-full overflow-hidden animate-pulse bg-gray-200">
      <div className="absolute top-0 left-0 w-full h-full filter sm:brightness-50"></div>
      <div className="p-4 sm:gap-4 flex flex-col w-full h-fit">
        <h1 className="mb-4 text-center z-50 text-sm sm:text-2xl font-bold text-transparent sm:w-fit bg-gray-300 rounded-sm">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <div className="flex flex-col xs:flex-row items-center xs:items-end">
          <div className="z-50 rounded-xl overflow-hidden h-full block w-[280px] sm:h-[400px] md:h-[470px] md:w-[320px] bg-gray-300"></div>
          <div className="hidden z-50 w-full sm:w-2/3 xs:flex flex-wrap gap-2 items-end p-4">
            <div className="bg-gray-300 w-28 h-5" />
            <div className="bg-gray-300 w-20 h-5" />
            <div className="bg-gray-300 w-32 h-5" />
            <div className="bg-gray-300 w-8 h-5" />
            <div className="bg-gray-300 w-16 h-5" />
            <div className="bg-gray-300 w-24 h-5" />
            <div className="bg-gray-300 w-10 h-5" />
            <div className="bg-gray-300 w-16 h-5" />
            <div className="bg-gray-300 w-32 h-5" />
            <div className="bg-gray-300 w-28 h-5" />
            <div className="bg-gray-300 w-8 h-5" />
            <div className="bg-gray-300 w-10 h-5" />
            <div className="bg-gray-300 w-28 h-5" />
            <div className="bg-gray-300 w-20 h-5" />
            <div className="bg-gray-300 w-32 h-5" />
            <div className="bg-gray-300 w-8 h-5" />
            <div className="bg-gray-300 w-16 h-5" />
            <div className="bg-gray-300 w-24 h-5" />
            <div className="bg-gray-300 w-10 h-5" />
            <div className="bg-gray-300 w-16 h-5" />
            <div className="bg-gray-300 w-32 h-5" />
            <div className="bg-gray-300 w-28 h-5" />
            <div className="bg-gray-300 w-8 h-5" />
            <div className="bg-gray-300 w-10 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCarouselSkeleton;
