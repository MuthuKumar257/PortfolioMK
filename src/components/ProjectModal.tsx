import { useEffect, useRef, useState } from "react";
import { X, Play, Pause, Volume2, VolumeX, Calendar, Tag, Shield, Award } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Escape key listener to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log(err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      id={`modal-${project.id}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md overflow-y-auto"
    >
      {/* Click outside to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Modal Container */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-5xl shadow-2xl relative z-10 overflow-hidden animate-fade-in flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[85vh]">
        
        {/* Left Hand: Media Canvas */}
        <div className="lg:w-3/5 bg-black relative flex items-center justify-center min-h-[250px] sm:min-h-[350px] lg:h-auto border-r border-stone-850">
          {project.category === "video" && project.videoUrl ? (
            project.videoUrl.includes("drive.google.com") ? (
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center bg-black">
                <iframe
                  src={project.videoUrl.replace(/\/view.*/, "/preview")}
                  className="w-full h-full absolute inset-0 border-0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={project.title}
                />
              </div>
            ) : project.videoUrl.includes("instagram.com") || project.videoUrl.includes("instagr.am") ? (
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center bg-black">
                <iframe
                  src={(() => {
                    const baseUrl = project.videoUrl.split("?")[0];
                    const cleanUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
                    return `${cleanUrl}embed/`;
                  })()}
                  className="w-full h-full absolute inset-0 border-0"
                  allowtransparency="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title={project.title}
                />
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center group">
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover aspect-video"
                />
                {/* Media Controls Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="font-mono text-[10px] text-stone-300">
                    {project.subcategory} • Real-time Loop Preview
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover max-h-[450px] lg:max-h-none hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-950/10 pointer-events-none" />
            </div>
          )}
        </div>

        {/* Right Hand: Project details sheet */}
        <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[45vh] lg:max-h-none">
          <div className="space-y-6">
            {/* Header / Subtitle */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-orange-400 font-semibold bg-orange-500/10 px-2 py-0.5 rounded">
                  {project.subcategory}
                </span>
                <span className="font-mono text-[10px] text-stone-400">
                  {project.date}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold font-sans text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            {/* Performance Stats Banner */}
            {project.stats && (
              <div className="bg-gradient-to-r from-stone-950 to-stone-900 border border-stone-800 p-4 rounded-xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <span className="block font-sans text-lg font-bold text-white tracking-tight">
                    {project.stats.value}
                  </span>
                  <span className="block font-mono text-[9px] uppercase text-stone-400 tracking-wider">
                    {project.stats.label}
                  </span>
                </div>
              </div>
            )}

            {/* Project Copy */}
            <div className="space-y-1.5 text-stone-300 font-sans text-sm leading-relaxed">
              <p>{project.description}</p>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-2">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-stone-400">
                Core Deliverables
              </span>
              <ul className="grid grid-cols-1 gap-2">
                {project.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 font-sans text-xs text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Tools */}
            <div className="space-y-2">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-stone-400">
                Production Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.toolsUsed.map((tool, index) => (
                  <span
                    key={index}
                    className="font-mono text-[9px] bg-stone-950 text-stone-300 px-2 py-1 rounded border border-stone-850"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Details */}
          <div className="pt-6 mt-6 border-t border-stone-850 flex items-center justify-between text-stone-400 text-xs">
            <div>
              <span className="block text-[9px] font-mono uppercase text-stone-500">Client</span>
              <span className="font-sans font-medium text-stone-300">{project.client}</span>
            </div>
            <button
              onClick={onClose}
              className="font-sans text-xs font-semibold text-white hover:text-orange-400 transition-colors bg-stone-950 hover:bg-stone-850 px-4 py-2 rounded-lg border border-stone-800 cursor-pointer"
            >
              Close Showcase
            </button>
          </div>
        </div>

        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-stone-400 hover:text-white flex items-center justify-center transition-colors border border-stone-850 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
