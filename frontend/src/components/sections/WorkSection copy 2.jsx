import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const WorkSection = ({ showCTA = true }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("https://architecture-portfolio-project-backend.onrender.com/api/projects/all");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <main className="py-32 px-8 lg:px-16 bg-neutral-soft-grey">
      {/* Section Header */}
      <div className="flex flex-col gap-4 mb-12">
        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
          <span className="w-8 h-[2px] bg-primary" />
          Portfolio Index
        </div>
        <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-black leading-tight tracking-tight max-w-2xl">
          Curation of refined spaces.
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl font-medium">
          Explore our diverse portfolio ranging from intimate residential
          retreats to expansive commercial environments.
        </p>
      </div>
      {/* Filter Tabs */}
      <div className="mb-10 overflow-x-auto no-scrollbar">
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-10 min-w-max">
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-primary text-slate-900 dark:text-slate-100 pb-4"
            href="#"
          >
            <p className="text-sm font-bold tracking-wide">All Perspectives</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 pb-4 transition-all"
            href="#"
          >
            <p className="text-sm font-bold tracking-wide">Residential</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 pb-4 transition-all"
            href="#"
          >
            <p className="text-sm font-bold tracking-wide">Commercial</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 pb-4 transition-all"
            href="#"
          >
            <p className="text-sm font-bold tracking-wide">Sustainable</p>
          </a>
          <a
            className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 pb-4 transition-all"
            href="#"
          >
            <p className="text-sm font-bold tracking-wide">Hospitality</p>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${encodeURI(`https://architecture-portfolio-project-backend.onrender.com/${project.image}`)})`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">
                {project.category}
              </span>

              <h3 className="text-white text-xl font-bold mt-1">
                {project.title}
              </h3>

              <p className="text-slate-300 text-xs font-medium">
                {project.subcategory}
              </p>
            </div>
          </div>
        ))}

        {/* CTA Card */}
        {showCTA && (
          <div className="bg-primary/10 dark:bg-primary/5 rounded-xl flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-primary/30">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-4xl">
                architecture
              </span>
            </div>

            <h3 className="text-slate-900 dark:text-slate-100 text-2xl font-bold mb-3">
              Your Vision Next?
            </h3>

            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xs">
              We are currently accepting new commissions for the next creative
              quarter.
            </p>

            <Link to="/work">
              <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2">
                Load More Projects
                <span className="material-symbols-outlined text-sm">
                  trending_flat
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default WorkSection;
