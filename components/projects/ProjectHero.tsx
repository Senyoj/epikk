import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  subtitle?: string;
  heroImage: string;
}

const ProjectHero = ({ title, subtitle, heroImage }: Props) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <Image
        src={heroImage}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
        {subtitle && <p className="text-white mt-2 text-lg md:text-xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default ProjectHero;
