import { Project } from "../types";
import { Play, Film, Sparkles } from "lucide-react";

interface ShowcaseGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function ShowcaseGrid({ projects, onSelectProject }: ShowcaseGridProps) {
  return (
    <section
      id="showcase"
      className="scroll-mt-24 py-24 px-6 md:px-12 bg-stone-950 border-b border-stone-900"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-orange-500 font-mono text-[10px] uppercase tracking-widest font-semibold">
              <Film className="w-3.5 h-3.5" /> Curated Showcase
            </div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white leading-tight">
              Selected Works
            </h2>
            <p className="text-stone-400 font-sans text-sm leading-relaxed">
              A collection of high-pacing video campaigns, dynamic commercial cuts, music videos, and creative short films that demonstrate structured pacing and meticulous post-production workflows.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              id={`project-card-${project.id}`}
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-stone-900 rounded-2xl overflow-hidden border border-stone-850 hover:border-stone-800 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer relative"
            >
              {/* Card Image Area */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual overlays & dark filter */}
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/45 transition-colors duration-300" />
                
                {/* Floating Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest bg-stone-950/80 backdrop-blur-md text-stone-300 border border-stone-800 px-2.5 py-1 rounded-md">
                    {project.subcategory}
                  </span>
                </div>

                {/* Performance stats banner if present */}
                {project.stats && (
                  <div className="absolute bottom-3 left-3 bg-orange-500/90 backdrop-blur-sm text-white border border-orange-400/20 px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current text-white animate-pulse" />
                    <span className="font-sans text-[10px] font-bold tracking-tight">{project.stats.value} {project.stats.label}</span>
                  </div>
                )}

                {/* Hover Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/40 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-current text-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Details */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-stone-500">
                    Client • {project.client}
                  </span>
                  <h3 className="text-lg font-bold font-sans text-white group-hover:text-orange-400 transition-colors tracking-tight line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-stone-400 font-sans text-xs leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tool Badges */}
                <div className="flex flex-wrap gap-1 border-t border-stone-850 pt-4 mt-2">
                  {project.toolsUsed.slice(0, 3).map((tool, index) => (
                    <span
                      key={index}
                      className="font-mono text-[8px] bg-stone-950 text-stone-300 px-2 py-0.5 rounded border border-stone-850"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.toolsUsed.length > 3 && (
                    <span className="font-mono text-[8px] text-stone-500 px-1 py-0.5">
                      +{project.toolsUsed.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
