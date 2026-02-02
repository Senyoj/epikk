"use client";
import HeroVideo from "@/components/mainpage/HeroVideo";
import TargetAudienceCarousel from "@/components/mainpage/TargetAudienceCarousel";
import WorkflowRing from "@/components/mainpage/Workflow";
import Navbar from "@/components/navbar/Navbar";
import {
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const [isDarkSection, setIsDarkSection] = useState(false);
  const sectionRef = useRef(null);

  // --- CONTENT DATA ---
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDarkSection(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zinc-50 relative font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navbar Sidebar */}
      <aside
        className="
          z-50 bg-white border-r border-zinc-200 w-full md:w-24
          flex md:flex-col fixed md:sticky md:top-0 left-0
          h-16 md:h-screen
        "
      >
        <Navbar />
      </aside>

      {/* Main Scrollable Area */}
      <main
        className={`
          flex-1 flex flex-col overflow-y-auto overflow-x-hidden
          pt-16 md:pt-0
          transition-colors duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
          ${isDarkSection ? "bg-zinc-950" : "bg-zinc-50"}
        `}
      >
        {/* 1. HERO SECTION */}
        <section className="relative w-full h-[70vh] md:h-screen border-b border-zinc-200">
          <HeroVideo
            src="/hero-video.mp4"
            poster="/hero-poster.png"
            className="absolute inset-0 object-cover w-full h-full bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-size-[100px_100px] pointer-events-none" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-zinc-900/40 backdrop-blur-[2px] p-4">
            <div className="border border-white/30 p-8 md:p-12 backdrop-blur-md relative">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-500" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-500" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-500" />

              <h1 className="text-5xl md:text-8xl font-bold text-center tracking-tighter mb-2 font-mono">
                ePikk
              </h1>
              <div className="h-px w-full bg-emerald-500/50 mb-4" />
              <p className="text-sm md:text-lg font-medium text-center tracking-[0.3em] uppercase text-emerald-400">
                We bring your ideas to life
              </p>
            </div>
          </div>
        </section>

        {/* 2. WHAT WE DO (BENTO GRID) */}
        <section
          ref={sectionRef}
          className={`
            px-6 py-24 md:px-16 lg:px-24 min-h-screen flex flex-col justify-center relative
            transition-all duration-700 ease-in-out
            ${isDarkSection ? "text-white" : "text-zinc-900"}
          `}
        >
          {isDarkSection && (
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[40px_40px]" />
          )}

          <div className="mb-16 max-w-4xl relative z-10">
            <div
              className={`flex items-center gap-2 mb-4 ${isDarkSection ? "text-emerald-400" : "text-emerald-600"}`}
            >
              <span className="w-2 h-2 bg-current" />
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase font-mono">
                Capabilities // Index
              </h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold leading-none tracking-tight uppercase">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-emerald-300">
                Reality
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-10 border-t border-l border-zinc-200 dark:border-zinc-800">
            {services.map((service, index) => (
              <div
                key={index}
                className={`
                  ${service.colSpan}
                  group relative p-8 md:p-12
                  border-r border-b transition-all duration-500
                  ${
                    isDarkSection
                      ? "border-zinc-800 hover:bg-zinc-900/50"
                      : "border-zinc-200 bg-white hover:bg-zinc-50"
                  }
                `}
              >
                <div className="absolute top-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start mb-8">
                    <span
                      className={`text-4xl font-mono font-bold opacity-20 ${isDarkSection ? "text-white" : "text-black"}`}
                    >
                      {service.id}
                    </span>
                    <ArrowUpRight
                      className={`w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${isDarkSection ? "text-emerald-400" : "text-emerald-600"}`}
                    />
                  </div>

                  <div>
                    <h5
                      className={`text-xs font-bold tracking-widest uppercase mb-2 opacity-60 font-mono ${isDarkSection ? "text-zinc-400" : "text-zinc-500"}`}
                    >
                      {service.subtitle}
                    </h5>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight">
                      {service.title}
                    </h4>
                    <p
                      className={`text-base md:text-lg leading-relaxed font-light ${isDarkSection ? "text-zinc-400" : "text-zinc-600"}`}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative w-full py-24 bg-zinc-950 text-white overflow-hidden border-t border-zinc-800">
          {/* Background Grid for Tech Feel */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />

          <div className="relative z-10 flex flex-col items-center mb-12">
            <h2 className="text-xs font-mono font-bold text-emerald-500 tracking-[0.3em] uppercase mb-4">
              Target Audience
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Who {"It's"} For
            </h3>
          </div>

          <TargetAudienceCarousel />
        </section>

        {/* 4. FEATURED PROJECTS */}
        <section
          className={`
            md:mx-16 lg:mx-24 px-6 py-24
            transition-opacity duration-700
            ${isDarkSection ? "opacity-50 blur-[2px]" : "opacity-100 blur-0"}
          `}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-200 pb-6">
            <h2
              className={`text-4xl font-bold uppercase tracking-tight ${!isDarkSection ? "text-zinc-900" : "text-white"}`}
            >
              Featured Projects
            </h2>
            <button
              className={`hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-emerald-600 transition-colors ${!isDarkSection ? "text-zinc-900" : "text-white"}`}
            >
              View Archive <ChevronRight size={16} />
            </button>
          </div>

         <section
          className={`
            relative w-full min-h-screen py-24 bg-zinc-900 text-white overflow-hidden
           px-6 
            transition-opacity duration-700
            ${isDarkSection ? "opacity-50 blur-[2px]" : "opacity-100 blur-0"}
          `}
        >
            {/* Background Grid - Darker Variant */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950" />

            <div className="relative z-10 flex flex-col items-center mb-16">
              <h2 className="text-xs font-mono font-bold text-emerald-500 tracking-[0.3em] uppercase mb-4">
                Workflow
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-center">
                How It Works
              </h3>
            </div>

            <div className="relative z-10 scale-75 md:scale-100">
              <WorkflowRing />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default HomePage;