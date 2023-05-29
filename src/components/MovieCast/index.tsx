"use client";
import clsx from "clsx";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Button from "../common/Button";
import { IMovieCredits } from "@/models/IMovieCredits";
import { imagePath } from "@/utils/imagePath";
import noImage from "@/assets/no-image.jpeg";

type Props = {
  cast: IMovieCredits["cast"];
};

const MovieCast = ({ cast }: Props) => {
  const containerRef = useRef<HTMLElement>(null);
  const [allCast, setAllCast] = useState(false);
  const showToggle = useMemo(() => cast.length > 12, [cast]);

  useEffect(() => {
    if (allCast) {
      containerRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [allCast]);

  const toggleCast = () => setAllCast((prev) => !prev);
  return (
    <section
      ref={containerRef}
      className="p-4 lg:mx-auto lg:my-0 lg:max-w-screen-xl"
    >
      <h3 className="font-bold text-2xl mb-4">Cast</h3>
      <div
        className={clsx(
          "relative pb-16 rounded-xl",
          !allCast && showToggle && "h-[380px] overflow-hidden",
          allCast && "h-fit"
        )}
      >
        <div
          className={clsx(
            "z-50 pb-4 absolute bottom-0 left-0 right-0 w-full flex justify-center",
            !allCast && "bg-gradient-to-b from-transparent to-slate-200"
          )}
        >
          <Button onClick={toggleCast} className="shadow-lg shadow-slate-400">
            Show {allCast ? "less" : "more"}
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-4">
          {cast.map((person) => (
            <div
              className="flex flex-col items-center justify-center"
              key={person.id}
            >
              <div className="relative w-16 h-16">
                <Image
                  fill
                  style={{
                    objectFit: "cover",
                    clipPath: "circle(50%)",
                  }}
                  alt={person.name}
                  src={
                    (person.profile_path &&
                      imagePath(person.profile_path, "w154")) ||
                    noImage
                  }
                />
              </div>
              <h5 className="text-sm font-bold">{person.name}</h5>
              <h6 className="text-xs text-slate-500">{person.character}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieCast;
