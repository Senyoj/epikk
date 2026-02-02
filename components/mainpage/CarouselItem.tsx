"use client";
import React, { useState } from "react";
import Image from "next/image";

interface CarouselItemProps {
  imageUrl: string;
  title: string;
  desc: string;
  buttonText: string;
}

const CarouselItem = ({ imageUrl, title, buttonText, desc }: CarouselItemProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="
        relative w-full h-[500px]
        overflow-hidden cursor-pointer group
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* IMAGE */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="
          object-cover transition-all duration-200 ease-out"
      />

      <div
        className={`
          absolute bottom-0 left-0 w-full
          h-full bg-linear-to-t from-black/70 via-black/40 to-transparent
          transition-all duration-200 ease-out
          ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      />

      <div className="absolute bottom-10 left-10 text-white z-20">

        <h2 className="text-3xl font-semibold mb-4 drop-shadow-lg group-hover:-translate-y-5 duration-150">{title}</h2>
        <p className=" hidden group-hover:block group-hover:-translate-y-5 duration-150">{desc}</p>
        <button
          className=" cursor-pointer 
    relative overflow-hidden
    px-6 py-2 border border-white text-white
     text-base
    transition-colors duration-300
  "
        >
          <span className="relative z-10 group-hover:text-black">
            {buttonText}
          </span>

          {/* white fill animation */}
          <span
            className="
      absolute inset-0 bg-white
      -translate-x-full
      group-hover:translate-x-0
      transition-transform duration-200 ease-out
    "
          ></span>
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;
