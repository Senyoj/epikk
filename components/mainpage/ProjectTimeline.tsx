"use client";

import Image from "next/image";



export default function ProjectTimeline() {
  const projectSteps = [
    {
      label: "Concept & Problem",
      title: "THERMAL INSPECTION // CHALLENGE",
      content:
        "Modern power plants operate in hazardous environments where gas leaks and abnormal heat zones pose serious safety risks. Manual inspection exposes personnel to danger and limits real-time analysis.",
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab6b91f8a7?q=80&w=1600&auto=format&fit=crop",
    },
    {
      label: "System Architecture",
      title: "DISTRIBUTED // ARCHITECTURE",
      content:
        "A Raspberry Pi 5 coordinating thermal imaging, gas sensing, and mobility. An ESP32 handled low-level motor control and mission-critical sensor communication protocols.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    },
    {
      label: "Sensing & Intelligence",
      title: "ML PERCEPTION // INTELLIGENCE",
      content:
        "Thermal anomalies detected via MLX90640 camera, air quality sensors, and ultrasonic navigation using a Vector Field Histogram algorithm for intelligent obstacle avoidance.",
      image:
        "https://images.unsplash.com/photo-1581092334707-51c0f3e2f2b3?q=80&w=1600&auto=format&fit=crop",
    },
    {
      label: "Outcome & Expansion",
      title: "SCALABLE // REALITY",
      content:
        "Delivered fully functional autonomous monitoring, reducing human risk. Future plans include custom PCB integration for improved robustness and industrial scalability.",
      image:
        "https://images.unsplash.com/photo-1581093458791-9d15482778a1?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Central Timeline Bar */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 md:w-3 bg-emerald-600 -translate-x-1/2 z-0 shadow-[0_0_20px_rgba(16,185,129,0.3)]" />

      <div className="relative z-10 flex flex-col items-center">
        {projectSteps.map((step, idx) => {
          const displayIdx = (idx + 1).toString().padStart(2, "0");
          return (
            <div
              key={idx}
              className="relative w-full min-h-screen flex flex-col md:flex-row items-center py-20 group"
            >
              {/* Left Content / Illustration Area */}
              <div
                className={`w-full md:w-1/2 px-6 md:px-20 ${idx % 2 === 0 ? "md:text-right" : "md:order-last md:text-left"} text-center`}
              >
                <div className="inline-block mb-4">
                  <span className="text-emerald-500 font-mono text-sm font-bold tracking-[0.3em] uppercase">
                    PHASE {displayIdx}
                  </span>
                </div>
                <h4 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8 group-hover:text-emerald-400 transition-colors duration-500">
                  {step.title}
                </h4>
                <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
                  {step.content}
                </p>
              </div>

              {/* Center Identifier - Changed to Index */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="text-[12rem] md:text-[24rem] font-black text-white leading-none tracking-tighter opacity-[0.03] select-none group-hover:opacity-[0.08] transition-opacity duration-1000">
                  {displayIdx}
                </div>
              </div>

              {/* Right Side Illustration Area */}
              <div
                className={`w-full md:w-1/2 flex justify-center p-8 ${idx % 2 === 0 ? "md:order-last" : ""}`}
              >
                <div className="relative w-full aspect-square md:aspect-video overflow-hidden border border-white/10 rounded-sm">
                  <Image
                    fill
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
