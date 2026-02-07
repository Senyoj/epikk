/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import TargetAudienceCarousel from "@/components/mainpage/TargetAudienceCarousel";
import { ArrowUpRight } from "lucide-react";
import ServicesSummaryCarousel from "@/components/mainpage/ServicesSummaryCarousel";
import ProjectTimeline from "@/components/mainpage/ProjectTimeline";
import ProjectIdeasSection from "@/components/mainpage/ProjectIdeasSection";
import WhyEpikkSection from "@/components/mainpage/WhyEpikkSection";
import ContactSection from "@/components/mainpage/ContactSection";

const HomePage = () => {
    const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("dark");

  const services = [
    {
      id: "01",
      title: "Applied Engineering",
      subtitle: "HARDWARE / SOFTWARE",
      desc: "We design and build functional engineering systems, turning concepts into tested hardware and software that work in real environments.",
      colSpan: "md:col-span-2",
    },
    {
      id: "02",
      title: "Robotics & Embedded",
      subtitle: "AUTOMATION / CONTROL",
      desc: "We develop robotic platforms, embedded controllers, and intelligent systems for inspection, automation, and data-driven decision-making.",
      colSpan: "md:col-span-1",
    },
    {
      id: "03",
      title: "Technical Mentorship",
      subtitle: "EDUCATION / EXECUTION",
      desc: "We guide students and teams through structured, hands-on development, from system design to final implementation and documentation.",
      colSpan: "md:col-span-1",
    },
    {
      id: "04",
      title: "System Integration",
      subtitle: "FIRMWARE / MECH / DASHBOARDS",
      desc: "We integrate electronics, firmware, mechanical systems, and dashboards into complete, deployable solutions.",
      colSpan: "md:col-span-2",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We define the technical landscape, identifying constraints and engineering requirements for the hardware-software stack.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    },
    {
      step: "02",
      title: "Rapid Prototyping",
      desc: "Iterative development of firmware and mechanical components to validate core functionality in real-world scenarios.",
      image:
        "https://images.unsplash.com/photo-1581092348505-189f383e58b1?auto=format&fit=crop&q=80&w=800",
    },
    {
      step: "03",
      title: "System Execution",
      desc: "Final assembly and integration of all subsystems into a robust, deployable solution with full technical documentation.",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute("data-theme");
          if (theme) setCurrentTheme(theme);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const sections = document.querySelectorAll("section[data-theme]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-1000 ease-in-out ${
        currentTheme === "dark"
          ? "bg-[#121212] text-white"
          : "bg-white text-black"
      }`}
    >
      <Navbar theme={currentTheme} />

      {/* SECTION 1: HERO (DARK) */}
      <section
        data-theme="dark"
        className="pt-24 px-4 md:px-6 lg:px-8 pb-8 min-h-screen flex items-center"
      >
        <div className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl shadow-black/50 bg-zinc-900">
          <Image
            fill
            src="/banner.png"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/80 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                epikk
              </span>
              <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
                We Bring Your Ideas To Life
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto mb-12 font-medium">
                Experience architecture that bridges the gap between digital
                precision and human emotion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="w-full sm:w-auto px-8 py-5 bg-white text-black font-black rounded-full hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-lg">
                  Explore Projects
                </button>
                <button
                  className="w-full sm:w-auto px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black rounded-full hover:bg-white/20 transition-all"
                  onClick={() => scrollToSection("process")}
                >
                  Our Method
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CAPABILITIES (LIGHT) */}
      <section
        id="services"
        data-theme="light"
        className="px-6 py-32 md:px-16 lg:px-24 min-h-screen flex flex-col justify-center relative transition-all duration-1000"
      >
        <div className="mb-20 max-w-4xl relative z-10">
          <div className="flex items-center gap-2 mb-6 text-emerald-600">
            <span className="w-2 h-2 bg-current" />
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase font-mono">
              WHAT WE DO
            </h2>
          </div>
          <h3 className="text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase mb-6">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
              Reality.
            </span>
          </h3>
          <p className="text-zinc-500 max-w-2xl text-lg font-medium">
            We provide full-stack engineering services from industrial hardware
            design to complex software ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10 border-t border-l border-zinc-200">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                ${service.colSpan}
                group relative p-8 md:p-14
                border-r border-b transition-all duration-500
                bg-white hover:bg-zinc-50
              `}
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl font-black opacity-10 text-black">
                    {service.id}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-100 group-hover:border-emerald-500 transition-colors">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 text-emerald-600" />
                  </div>
                </div>
                <div className="text-left">
                  <h5 className="text-[10px] font-bold tracking-widest uppercase mb-3 text-emerald-600 font-mono">
                    {service.subtitle}
                  </h5>
                  <h4 className="text-3xl font-black mb-6 uppercase tracking-tighter">
                    {service.title}
                  </h4>
                  <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TARGET AUDIENCE (DARK) */}
      <section
        id="audience"
        data-theme="dark"
        className="px-6 py-32 md:px-16 lg:px-24 min-h-screen transition-all duration-1000 bg-zinc-950 flex flex-col items-center justify-center text-center"
      >
        <div className="mb-20 max-w-4xl relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 text-emerald-600">
            <span className="w-2 h-2 bg-current" />
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase font-mono">
              WHO IT’S FOR
            </h2>
          </div>
          <h3 className="text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase mb-6">
            Our Target <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
              Audience.
            </span>
          </h3>
        </div>
        <div className="w-full relative z-10 flex justify-center">
          <TargetAudienceCarousel />
        </div>
      </section>

      {/* SECTION 4: THE PROCESS (LIGHT) */}
      <section
        id="process"
        data-theme="light"
        className="px-6 py-32 md:px-16 lg:px-24 min-h-screen transition-all duration-1000 bg-white flex flex-col justify-center"
      >
        <div className="mb-20 max-w-4xl relative z-10">
          <div className="flex items-center gap-2 mb-6 text-emerald-600">
            <span className="w-2 h-2 bg-current" />
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase font-mono">
              The Process
            </h2>
          </div>
          <h3 className="text-5xl md:text-8xl font-black leading-none tracking-tighter uppercase mb-6">
            How We <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
              Execute.
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {workflowSteps.map((item, idx) => (
            <div key={idx} className="flex flex-col group text-left">
              <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-zinc-100">
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-black text-white flex items-center justify-center font-black text-sm">
                  {item.step}
                </div>
              </div>
              <div className="border-t border-zinc-100 pt-6">
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SUMMARY */}
      <section
        data-theme="dark"
        className="px-6 py-32 md:px-16 lg:px-24 min-h-screen transition-all duration-1000 bg-zinc-950 flex flex-col justify-center overflow-hidden"
      >
        <ServicesSummaryCarousel />
      </section>

      {/* TIMELINE */}
      <section
        id="timeline"
        data-theme="dark"
        className="px-6 py-32 md:px-16 lg:px-24 min-h-screen transition-all duration-1000 bg-zinc-950 flex flex-col justify-center overflow-hidden"
      >
        <ProjectTimeline />
      </section>

      {/* CATALOG */}
      <section id="catalog">
        <ProjectIdeasSection />
      </section>

      {/* PHILOSOPHY */}
      <section id="why">
        <WhyEpikkSection />
      </section>

      <ContactSection />

      <footer
        data-theme="dark"
        className="bg-zinc-950 px-6 py-12 border-t border-zinc-900 text-center"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black tracking-tighter text-white">
            EPIKK.
          </div>
          <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em]">
            © 2026 epikk designs
          </p>
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .bg-size-40 { background-size: 40px 40px; }
      `}</style>
    </div>
  );
};

export default HomePage;
