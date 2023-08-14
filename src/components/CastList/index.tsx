import React from "react";
import Image from "next/image";
import { IMovieCredits } from "@/models/IMovieCredits";
import { imagePath } from "@/utils/imagePath";

type CastListProps = {
  limit?: number;
  cast: IMovieCredits["cast"];
};

const CastList = ({ limit = 6, cast }: CastListProps) => {
  return (
    <div className="flex flex-col lg:w-2/3">
      <h3 className="text-sm text-white">Cast:</h3>
      <div className="sm:grid grid-cols-3 gap-2">
        {cast.slice(0, limit).map((cast) => (
          <div
            key={cast.id}
            className="flex items-center gap-2 px-2 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl"
          >
            <Image
              style={{
                clipPath: "circle(40%)",
                objectFit: "contain",
              }}
              alt={cast.name}
              src={imagePath(cast.profile_path, "w342")}
              width={40}
              height={40}
            />
            <div className="text-xs text-white">
              <span>{cast.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList;
