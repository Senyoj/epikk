import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

import { aiProjects } from "@/data/ai";
import { Project } from "@/types/project";
import { civilProjects } from "@/data/civil";
import { computerProjects } from "@/data/computer";
import { electricalProjects } from "@/data/electrical";
import { mechProjects } from "@/data/mech";
import { roboticsProjects } from "@/data/robotics";

type Category = {
  id: string;
  name: string;
  count: number;
  color: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    id: "ai",
    name: "Artificial Intelligence",
    color: "from-blue-500 to-indigo-600",
    projects: aiProjects,
    count: 0,
  },
  {
    id: "civil",
    name: "Civil Engineering",
    color: "from-emerald-500 to-teal-600",
    projects: civilProjects,
    count: 0,
  },
  {
    id: "computer",
    name: "Computer Engineering",
    color: "from-purple-500 to-pink-600",
    projects: computerProjects,
    count: 0,
  },
  {
    id: "electrical",
    name: "Electrical & Electronics",
    color: "from-amber-500 to-orange-600",
    projects: electricalProjects,
    count: 0,
  },
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    color: "from-rose-500 to-red-600",
    projects: mechProjects,
    count: 0,
  },
  {
    id: "robotics",
    name: "Robotics & Automation",
    color: "from-cyan-500 to-sky-600",
    projects: roboticsProjects,
    count: 0,
  },
];

export default function ProjectIdeasSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  return (
    <>
      {/* GRID SECTION */}
      <section
        id="catalog"
        data-theme="light"
        className="px-6 py-32 md:px-16 lg:px-24 min-h-screen bg-white transition-all duration-1000 flex flex-col justify-center relative overflow-hidden text-left"
      >
        <div className="mb-20 max-w-4xl relative z-10">
          <h2 className="text-xs font-mono font-bold tracking-[0.4em] uppercase mb-6 text-zinc-500">
            Project Catalog
          </h2>
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Final Year <br />
            <span className="text-zinc-400">Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="group relative bg-zinc-50 border border-zinc-100 p-8 h-72 text-left flex flex-col justify-between hover:border-black hover:bg-white transition-all duration-500 overflow-hidden"
            >
              {/* Higher contrast gradient background bubble */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-[0.08] translate-x-8 -translate-y-8 rounded-full group-hover:scale-150 transition-transform duration-700 ${cat.color}`}
              />

              <div>
                <span className="text-[10px] font-mono font-black tracking-widest text-zinc-500 group-hover:text-black transition-colors">
                  {cat.projects.length} IDEAS AVAILABLE
                </span>
                <h4 className="text-2xl font-black uppercase tracking-tighter mt-3 group-hover:translate-x-2 transition-transform">
                  {cat.name}
                </h4>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <div className="p-2.5 border border-zinc-200 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* FULL SCREEN MODAL */}
      {selectedCategory && (
        <div className="fixed inset-0 z-[100] bg-white animate-in fade-in zoom-in duration-300 flex flex-col overflow-y-auto">
          <div className="sticky top-0 bg-white/95 backdrop-blur-xl border-b border-zinc-100 z-10 px-8 py-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-br ${selectedCategory.color}`}
              />
              <h2 className="text-xl font-black uppercase tracking-tighter text-black">
                {selectedCategory.name}
              </h2>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="p-3 hover:bg-zinc-100 rounded-full transition-colors"
            >
              <X className="w-8 h-8 text-black" />
            </button>
          </div>

          <div className="max-w-6xl mx-auto w-full px-8 py-20 text-left">
            <div className="space-y-20">
              {selectedCategory.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col md:flex-row gap-8 border-b border-zinc-100 pb-16 last:border-0"
                >
                  {/* High contrast index number */}
                  <div className="md:w-20 text-5xl font-black text-zinc-200 group-hover:text-black transition-colors">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <h5 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 text-black">
                      {project.name}
                    </h5>

                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-emerald-600 block mb-3 uppercase">
                          Technical Overview
                        </span>
                        <p className="text-zinc-800 text-lg leading-relaxed font-medium">
                          {project.overview}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-emerald-600 block mb-3 uppercase">
                          Innovation Strategy
                        </span>
                        <p className="text-zinc-800 text-lg leading-relaxed font-medium">
                          {project.innovation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
