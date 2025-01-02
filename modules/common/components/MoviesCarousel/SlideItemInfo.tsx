import React from "react";
interface SlideItemInfoProps {
  title: string;
  description: string;
  image: string;
}

export default function SlideItemInfo({
  title,
  description,
}: SlideItemInfoProps) {
  return (
    <div className="slide-item-info-content relative w-full h-full p-4">
      <div className="flex flex-col gap-2 z-20">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-white line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
