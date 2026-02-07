"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

type ProjectStep = {
  label: string;
  title: string;
  content: string;
  image: string;
};

export default function ProjectTimeline() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const projectSteps: ProjectStep[] = [
    {
      label: "Concept & Problem",
      title: "The Industrial Challenge",
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab6b91f8a7?q=80&w=1600&auto=format&fit=crop",
      content:
        "Modern power plants operate in hazardous environments where gas leaks and abnormal heat zones pose serious safety risks. Manual inspection exposes personnel to danger and limits real-time analysis.",
    },
    {
      label: "System Architecture",
      title: "Core Nervous System",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      content:
        "A Raspberry Pi 5 served as the central processor, coordinating thermal imaging, gas sensing, mobility, and data visualization. An ESP32 handled low-level motor control and sensor communication.",
    },
    {
      label: "Sensing & Intelligence",
      title: "Autonomous Perception",
      image:
        "https://images.unsplash.com/photo-1581092334707-51c0f3e2f2b3?q=80&w=1600&auto=format&fit=crop",
      content:
        "Thermal anomalies detected via MLX90640 camera, MQ-series gas sensors, and ultrasonic navigation using intelligent obstacle avoidance algorithms.",
    },
    {
      label: "Mobility & Power",
      title: "Traction & Endurance",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop",
      content:
        "Custom 4WD system with high-torque geared motors, driven by efficient motor drivers and powered by a high-capacity lithium battery system.",
    },
    {
      label: "Monitoring & Interface",
      title: "Real-time Telemetry",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      content:
        "A web-based dashboard visualizes thermal data, gas levels, and live telemetry, with seamless switching between autonomous and manual control.",
    },
    {
      label: "Outcome & Expansion",
      title: "Results & Scaling",
      image:
        "https://images.unsplash.com/photo-1581093458791-9d15482778a1?q=80&w=1600&auto=format&fit=crop",
      content:
        "The system reduced human exposure to hazardous zones. Future iterations include computer vision, advanced path planning, and custom PCB integration.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectSteps.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [projectSteps.length]);

  const nextStep = () =>
    setActiveIndex((prev) => (prev + 1) % projectSteps.length);

  const prevStep = () =>
    setActiveIndex(
      (prev) => (prev - 1 + projectSteps.length) % projectSteps.length,
    );

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start w-full">
      {/* Sidebar */}
      <div className="lg:w-1/3 w-full border-l border-white/10 pl-8">
        <span className="text-emerald-500 font-mono text-sm uppercase tracking-widest block mb-4">
          Case Study
        </span>

        <h3 className="text-white text-4xl font-black uppercase tracking-tighter leading-none mb-12">
          Autonomous <br /> Inspection Robot
        </h3>

        <div className="space-y-4">
          {projectSteps.map((step, idx) => (
            <button
              key={step.label}
              onClick={() => setActiveIndex(idx)}
              className={`flex items-center gap-4 w-full text-left transition-all duration-300 ${
                activeIndex === idx
                  ? "translate-x-4"
                  : "opacity-40 hover:opacity-100"
              }`}
            >
              <div
                className={`w-1 h-10 ${
                  activeIndex === idx ? "bg-emerald-500" : "bg-white/10"
                }`}
              />
              <div>
                <span className="text-[10px] font-mono text-emerald-500 block">
                  STEP 0{idx + 1}
                </span>
                <span
                  className={`text-sm font-bold uppercase tracking-widest ${
                    activeIndex === idx ? "text-white" : "text-zinc-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:w-2/3 w-full relative">
        <div className="bg-zinc-900/50 border border-white/5 rounded-[3rem] p-10 md:p-16 min-h-[480px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h4 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                {projectSteps[activeIndex].title}
              </h4>

              <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed font-light">
                {projectSteps[activeIndex].content}
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full h-[280px] md:h-[360px] rounded-2xl overflow-hidden">
              <Image
                key={activeIndex}
                src={projectSteps[activeIndex].image}
                alt={projectSteps[activeIndex].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
            <div className="flex gap-2">
              {projectSteps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === activeIndex ? "w-8 bg-emerald-500" : "w-2 bg-white/10"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevStep}
                className="p-3 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextStep}
                className="p-3 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
