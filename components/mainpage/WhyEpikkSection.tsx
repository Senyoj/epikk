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

/* ---------------- COMPONENT ---------------- */

export default function WhyEpikkSection(): JSX.Element {
  const [activeTab, setActiveTab] = useState<PillarId>("execution");

  const activeData = pillars.find((p) => p.id === activeTab) ?? pillars[0];

  return (
    <section
      data-theme="dark"
      className="px-6 py-32 md:px-16 lg:px-24 min-h-screen bg-zinc-950 flex flex-col justify-center"
    >
      <div className="flex flex-col lg:flex-row gap-20 max-w-7xl mx-auto w-full">
        {/* LEFT */}
        <div className="lg:w-1/3 space-y-10">
          <div>
            <h2 className="text-emerald-500 font-mono text-xs tracking-[0.4em] uppercase mb-4">
              Why ePikk
            </h2>
            <p className="text-zinc-400 text-lg max-w-sm">
              We build real systems, not demonstrations. Execution beats theory.
            </p>
          </div>

          <div className="space-y-2">
            {pillars.map((pillar) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${
                  activeTab === pillar.id
                    ? "bg-zinc-800 border-zinc-700 text-white"
                    : "border-transparent text-zinc-500 hover:bg-zinc-900"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    activeTab === pillar.id
                      ? " text-white"
                      : "bg-zinc-900 text-zinc-400"
                  }`}
                >
                  {pillar.icon}
                </div>

                <div>
                  <span className="text-[10px] font-mono opacity-50 block">
                    {pillar.tag}
                  </span>
                  <span className="text-sm font-black uppercase">
                    {pillar.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-2/3">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
            <div className="space-y-12 relative z-10">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 block mb-4">
                  01 // The Challenge
                </span>
                <p className="text-3xl font-black uppercase tracking-tighter text-white">
                  {activeData.challenge}
                </p>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-500 block mb-4">
                  02 // The Solution
                </span>
                <p className="text-2xl text-zinc-300">{activeData.solution}</p>
              </div>

              <div className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700">
                <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 block mb-4">
                  03 // The Impact
                </span>
                <p className="text-xl text-zinc-400">{activeData.result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
