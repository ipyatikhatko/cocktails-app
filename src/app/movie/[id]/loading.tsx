import React from "react";

const MoviePageSkeleton = () => {
  return (
    <main className="h-full lg:mx-auto lg:max-w-screen-xl">
      <header className="mx-4 my-4 xs:mt-0">
        <div className="flex xs:flex-col justify-between items-start gap-2">
          <div className="flex flex-col">
            <span className="font-bold text-lg sm:text-2xl leading-tight animate-pulse bg-gray-200 h-8 w-48 mb-2"></span>
            <h4 className="text-sm text-slate-700 animate-pulse bg-gray-200 h-4 w-36"></h4>
          </div>
          <span className="flex">
            <span className="animate-pulse bg-gray-200 h-6 w-8"></span>
            <span className="animate-pulse bg-gray-200 h-6 w-10"></span>
          </span>
        </div>
      </header>
      <section className="sm:mx-4 lg:my-0 sm:rounded-xl overflow-hidden mt-2 h-[36vh] bg-gray-200 animate-pulse"></section>
      <section className="pt-8 mx-4 lg:my-0">
        <div className="flex flex-wrap gap-4 justify-center items-center h-full">
          <span className="bg-gray-200 animate-pulse h-16 w-32"></span>
          <span className="bg-gray-200 animate-pulse h-16 w-32"></span>
          <span className="bg-gray-200 animate-pulse h-16 w-32"></span>
        </div>
      </section>
      <hr className="lg:border-none my-4" />
      <section className="mx-4 lg:my-0">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl mb-4 animate-pulse bg-gray-200 h-6 w-32"></span>
          <div className="grid grid-cols-8 gap-2">
            <div className="animate-pulse bg-gray-200 h-4 col-span-1" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-2" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-3" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-1" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-2" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-3" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-1" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-2" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-3" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-1" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-2" />
            <div className="animate-pulse bg-gray-200 h-4 col-span-3" />
          </div>
        </div>
      </section>
      <hr className="my-4" />
      <section className="mx-4 lg:my-0 flex flex-col gap-2 animate-pulse pb-8">
        <span className="font-bold text-xl mb-4 animate-pulse bg-gray-200 h-6 w-32"></span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-200" />
            <div className="bg-gray-200 w-20 h-4 mt-2" />
            <div className="bg-gray-200 w-32 h-3 mt-1" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-200" />
            <div className="bg-gray-200 w-20 h-4 mt-2" />
            <div className="bg-gray-200 w-32 h-3 mt-1" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-200" />
            <div className="bg-gray-200 w-20 h-4 mt-2" />
            <div className="bg-gray-200 w-32 h-3 mt-1" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-200" />
            <div className="bg-gray-200 w-20 h-4 mt-2" />
            <div className="bg-gray-200 w-32 h-3 mt-1" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MoviePageSkeleton;
