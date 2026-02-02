"use client";
import React from "react";

interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

const HeroVideo = ({ src, poster, className = "" }:HeroVideoProps) => {
  return (
    <div className={`relative w-full h-full min-h-screen overflow-hidden bg-white ${className}`}>
      <video
        className="w-full h-full min-h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      {/* Optional overlay for text or gradient */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
    </div>
  );
};

export default HeroVideo;
