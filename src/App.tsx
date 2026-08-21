import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShowcaseGrid from "./components/ShowcaseGrid";
import Services from "./components/Services";
import AboutAndReviews from "./components/AboutAndReviews";
import InteractiveResume from "./components/InteractiveResume";
import ContactForm from "./components/ContactForm";
import ProjectModal from "./components/ProjectModal";
import { Project } from "./types";
import { PORTFOLIO_PROJECTS } from "./data";
import { Film, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll Spy logic: Detect which section is currently on screen
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160; // Offset for navbar

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 600);

      const sections = ["hero", "showcase", "services", "about", "resume", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 font-sans text-stone-200 selection:bg-orange-500/30 selection:text-orange-300">
      {/* Header Sticky Navbar */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
      />

      {/* Main Sections Stack */}
      <main>
        {/* Hero Area */}
        <Hero onNavigate={handleNavigate} />

        {/* Project Showcase Grid */}
        <ShowcaseGrid projects={PORTFOLIO_PROJECTS} onSelectProject={setSelectedProject} />

        {/* Core Post-Production Services */}
        <Services />

        {/* Creator Bio and Testimonial Cards */}
        <AboutAndReviews />

        {/* Interactive Professional Resume */}
        <InteractiveResume />

        {/* Direct Contact Form & Meet Link */}
        <ContactForm />
      </main>

      {/* Footer Branding & Social Rails */}
      <footer className="bg-stone-950 border-t border-stone-900 py-12 px-6 md:px-12 text-center space-y-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-sans font-bold text-sm tracking-tight text-white leading-none">
                MUTHU KUMAR M
              </span>
              <span className="block font-mono text-[9px] text-stone-500 tracking-wider font-semibold uppercase">
                DEVELOPER • EDITOR • DESIGNER
              </span>
            </div>
          </div>

          <div className="font-sans text-xs text-stone-500">
            <span>© {new Date().getFullYear()} Muthu Kumar M. All Rights Reserved.</span>
          </div>

          {/* Simulated Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/7mk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-stone-900 hover:bg-stone-850 text-stone-400 hover:text-white transition-colors border border-stone-850"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/themuthukumar.exe_/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-stone-900 hover:bg-stone-850 text-stone-400 hover:text-white transition-colors border border-stone-850"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* Immersive Project Lightbox Dialog */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all cursor-pointer animate-fade-in"
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
