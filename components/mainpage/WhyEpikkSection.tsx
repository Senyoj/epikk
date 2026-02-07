"use client";

import { Database, HardDrive, Settings, Terminal } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

/* ---------------- TYPES ---------------- */

type PillarId = "execution" | "systems" | "constraints" | "standards";

type Pillar = {
  id: PillarId;
  label: string;
  icon: ReactNode;
  tag: string;
  challenge: string;
  solution: string;
  result: string;
};

/* ---------------- DATA ---------------- */

const pillars: Pillar[] = [
  {
    id: "execution",
    label: "Execution Focus",
    icon: <Terminal className="w-4 h-4" />,
    tag: "CORE_PILLAR_01",
    challenge:
      "Theoretical models often fail in field conditions due to unforeseen environmental noise.",
    solution:
      "Direct hardware-in-the-loop testing from day zero ensures binary compatibility with real loads.",
    result:
      "Deployable systems that eliminate the 'last-mile' integration surprises common in dev environments.",
  },
  {
    id: "systems",
    label: "Real Systems",
    icon: <Settings className="w-4 h-4" />,
    tag: "CORE_PILLAR_02",
    challenge:
      "Demo-only prototypes that ignore thermal limits, power spikes, and mechanical fatigue.",
    solution:
      "Industrial-grade builds using stress-tested components and production-ready assembly techniques.",
    result:
      "Assets delivered with full schematics, BOMs, and documentation for long-term operational uptime.",
  },
  {
    id: "constraints",
    label: "Engineering Constraints",
    icon: <Database className="w-4 h-4" />,
    tag: "CORE_PILLAR_03",
    challenge:
      "Idealized assumptions leading to fragile firmware and unrecoverable system states.",
    solution:
      "Development driven by boundary conditions: power limits, signal interference, and thermal caps.",
    result:
      "Robust software architecture that self-recovers and maintains stability under extreme load.",
  },
  {
    id: "standards",
    label: "Technical Standards",
    icon: <HardDrive className="w-4 h-4" />,
    tag: "CORE_PILLAR_04",
    challenge:
      "Marketing buzzwords masking shallow technical depth and poor version control.",
    solution:
      "Rigorous adherence to engineering standards, clean code principles, and physical reliability.",
    result:
      "Maintenance-ready systems that your internal teams can actually understand and scale.",
  },
];

export default function WhyEpikkSection() {
  const [activeTab, setActiveTab] = useState<PillarId>("execution");

  const activeData = pillars.find((p) => p.id === activeTab) ?? pillars[0];

  return (
    <section
      id="why"
      data-theme="dark"
      className="px-6 py-20 sm:py-32 md:px-16 lg:px-24 min-h-screen bg-zinc-950 transition-all duration-1000 flex flex-col justify-center text-left overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start max-w-7xl mx-auto w-full">
        {/* Left Toggle List */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-emerald-500 font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Why ePikk Engineering?
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-sm mx-auto lg:mx-0 font-medium leading-relaxed">
              We build real systems, not demonstrations. We focus on execution,
              not theory.
            </p>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-2">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 text-left group ${
                  activeTab === pillar.id
                    ? "bg-zinc-800 border-zinc-700 text-white shadow-xl shadow-black/40"
                    : "bg-transparent border-transparent text-zinc-500 hover:bg-zinc-900"
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-colors ${activeTab === pillar.id ? "bg-emerald-500 text-black" : "bg-zinc-900 text-zinc-400 group-hover:text-emerald-500"}`}
                >
                  {pillar.icon}
                </div>
                <div className="flex-1">
                  <span className="text-[9px] font-mono font-bold opacity-50 block mb-1">
                    {pillar.tag}
                  </span>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-tighter">
                    {pillar.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Info Card */}
        <div className="w-full lg:w-2/3">
          <div className="bg-zinc-900 border border-zinc-800 rounded-4xl sm:rounded-[3rem] p-6 sm:p-10 md:p-16 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 opacity-[0.03] -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8 sm:mb-10">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[9px] sm:text-[10px] font-mono font-black border border-emerald-500/20 rounded-full uppercase whitespace-nowrap">
                  Technical Profile
                </span>
                <div className="h-px flex-1 bg-zinc-800" />
              </div>

              <div className="space-y-8 sm:space-y-12">
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase block mb-3 sm:mb-4">
                    01 // The Challenge
                  </span>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight uppercase">
                    {activeData.challenge}
                  </p>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
                  <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-emerald-500 uppercase block mb-3 sm:mb-4">
                    02 // The Solution
                  </span>
                  <p className="text-base sm:text-lg md:text-2xl font-medium text-zinc-300 tracking-tight leading-relaxed">
                    {activeData.solution}
                  </p>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000 bg-zinc-800/50 p-6 sm:p-8 rounded-3xl sm:rounded-4xl border border-zinc-700/50">
                  <span className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase block mb-3 sm:mb-4">
                    03 // The Impact
                  </span>
                  <p className="text-sm sm:text-base md:text-xl font-medium text-zinc-400">
                    {activeData.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
