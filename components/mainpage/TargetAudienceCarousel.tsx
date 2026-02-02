import { useEffect, useState } from "react";

export default function TargetAudienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const audienceData = [
    {
      title: "Students & Teams",
      subtitle: "Engineering Students",
      desc: "Final-year projects, competitions, and applied learning for students who want more than theory.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1770&auto=format&fit=crop", // Lab/Student
    },
    {
      title: "Startups & Innovators",
      subtitle: "Early-Stage Ventures",
      desc: "Technical support for prototypes, proof-of-concepts, and early product development.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop", // Startup/Meeting
    },
    {
      title: "Institutions & Clubs",
      subtitle: "Educational Bodies",
      desc: "Workshops, training programs, and hands-on labs focused on practical engineering skills.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1770&auto=format&fit=crop", // Workshop/Lecture
    },
  ];

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % audienceData.length);
    }, 4000); // Rotate every 4 seconds
    return () => clearInterval(interval);
  }, [audienceData.length]);

  const getSlideStyles = (index) => {
    if (index === activeIndex) {
      // CENTER ITEM
      return "z-20 scale-100 opacity-100 translate-x-0 blur-0 grayscale-0 border-emerald-500";
    } else if (
      index ===
      (activeIndex - 1 + audienceData.length) % audienceData.length
    ) {
      // PREVIOUS ITEM (Left)
      return "z-10 scale-90 opacity-40 -translate-x-[20%] md:-translate-x-[60%] blur-[2px] grayscale border-transparent";
    } else {
      // NEXT ITEM (Right)
      return "z-10 scale-90 opacity-40 translate-x-[20%] md:translate-x-[60%] blur-[2px] grayscale border-transparent";
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[600px] flex flex-col items-center justify-center">
      {/* 3D Carousel Container */}
      <div className="relative w-full h-[400px] flex items-center justify-center perspective-1000">
        {audienceData.map((item, index) => (
          <div
            key={index}
            className={`
              absolute w-[80%] md:w-[60%] lg:w-[45%] h-full 
              transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
              bg-zinc-900 border border-zinc-700 shadow-2xl overflow-hidden
              ${getSlideStyles(index)}
            `}
          >
            {/* Image Layer */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover opacity-60"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

            {/* Card Content (Only visible clearly on active) */}
            <div
              className={`absolute bottom-0 left-0 p-8 w-full transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
            >
              <h4 className="text-emerald-400 text-xs font-mono tracking-widest uppercase mb-2">
                {item.subtitle}
              </h4>
              <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-4">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Text Description Below (Synced with Active) */}
      <div className="mt-12 text-center max-w-2xl px-6 h-24 relative z-30">
        <div className="transition-all duration-500 transform key={activeIndex}">
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            {audienceData[activeIndex].desc}
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {audienceData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 transition-all duration-300 ${idx === activeIndex ? "w-8 bg-emerald-500" : "w-2 bg-zinc-700 hover:bg-zinc-600"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
