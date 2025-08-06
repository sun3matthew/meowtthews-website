import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { getProjects } from "../lib/posts";

export const metadata: Metadata = {
  title: "Projects",
  description: "Technical art and graphics programming projects",
};

export default function Projects() {
  const projects = getProjects().sort((a, b) => {
    // Sort by year, most recent first
    // If year is a range like "2023 - 2025", use the second year
    // If year is single like "2021", use that year
    const getEndYear = (yearString: string) => {
      if (!yearString) return 0;
      const years = yearString.split(' - ');
      return parseInt(years[years.length - 1]);
    };
    
    const yearA = getEndYear(a.metadata.year || '0');
    const yearB = getEndYear(b.metadata.year || '0');
    return yearB - yearA;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-light text-slate-700 mb-4 tracking-wide">Projects</h1>
        <div className="w-32 h-0.5 bg-gradient-to-r from-rose-300 to-blue-300 mx-auto"></div>
      </div>

      <div className="space-y-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block bg-white/70 backdrop-blur-sm shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all duration-300 no-underline decoration-0"
            style={{ textDecoration: 'none' }}
          >
            <div className="flex flex-col md:flex-row">
              {project.metadata.image && (
                <div className="relative w-full md:w-80 h-32 md:h-40 overflow-hidden">
                  <Image
                    src={project.metadata.image}
                    alt={project.metadata.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
              )}
              <div className="flex-1 p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-medium text-slate-700 group-hover:text-rose-600 transition-colors">
                    {project.metadata.title}
                  </h3>
                  <span className="text-sm text-slate-500 font-medium ml-4">
                    {project.metadata.year}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {project.metadata.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
