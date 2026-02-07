import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  Microchip,
  Radar,
  CircuitBoard,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

type ScrollDirection = "left" | "right";

export default function ServicesSummaryCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const services: Service[] = [
    {
      title: "Robotics System Design",
      desc: "Custom kinematic solutions and autonomous control systems built for complex environments.",
      icon: Cpu,
    },
    {
      title: "Embedded & Firmware",
      desc: "Low-level optimization and RTOS development for mission-critical hardware performance.",
      icon: Microchip,
    },
    {
      title: "Sensor & Monitoring",
      desc: "Industrial-grade telemetry and real-time data acquisition for predictive maintenance.",
      icon: Radar,
    },
    {
      title: "PCB & Prototyping",
      desc: "High-speed multi-layer board design and rapid hardware acceleration from concept to production.",
      icon: CircuitBoard,
    },
    {
      title: "Mentorship & Training",
      desc: "Bridging the gap between engineering theory and industrial-scale implementation.",
      icon: GraduationCap,
    },
  ];

  const scroll = (direction: ScrollDirection): void => {
    const container = scrollRef.current;
    if (!container) return;

    const offset =
      direction === "left"
        ? -container.clientWidth / 2
        : container.clientWidth / 2;

    container.scrollTo({
      left: container.scrollLeft + offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start w-full">
      {/* Left Header Area */}
      <div className="lg:w-1/3 flex flex-col justify-between self-stretch">
        <div>
          <h2 className="text-white text-lg font-light mb-2">Why</h2>
          <h3 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
            epikk <br /> Engineering?
          </h3>
          <p className="text-zinc-400 text-lg max-w-sm leading-relaxed">
            We {"don't"} just provide services; we provide an ecosystem that
            evolves with your technical requirements and business model.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mt-12 lg:mt-0">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="lg:w-2/3 w-full">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        >
          {services.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="min-w-[300px] md:min-w-[380px] bg-zinc-900/50 rounded-[2.5rem] overflow-hidden flex flex-col snap-start border border-white/5 group hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden p-12">
                <Icon className="w-12 h-12" />
              </div>

              <div className="p-8 pt-2 text-left">
                <h4 className="text-white text-2xl font-bold uppercase tracking-tighter mb-4 group-hover:text-emerald-400 transition-colors">
                  {title}
                </h4>
                <p className="text-zinc-500 leading-relaxed font-medium">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
