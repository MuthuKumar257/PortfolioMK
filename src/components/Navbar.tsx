import { useState, useEffect } from "react";
import { Film, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Showcase", id: "showcase" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-950/90 backdrop-blur-md border-b border-stone-850/50 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo"
          onClick={() => handleItemClick("hero")}
          className="flex items-center gap-3 text-white group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:rotate-3 shadow-lg shadow-orange-500/20">
            <Film className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <span className="block font-sans font-bold tracking-tight text-lg leading-none uppercase text-white group-hover:text-orange-400 transition-colors">
              MUTHU KUMAR M
            </span>
            <span className="block font-mono text-[9px] text-stone-400 tracking-wider mt-1">
              EDITING & MOTION • <span className="text-orange-400/90 font-sans font-semibold">Aries Studios</span>
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div id="desktop-nav" className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`font-sans text-sm font-medium tracking-wide transition-colors cursor-pointer relative py-1 ${
                activeSection === item.id
                  ? "text-orange-400"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 rounded-full" />
              )}
            </button>
          ))}

          <button
            id="nav-cta-contact"
            onClick={() => handleItemClick("contact")}
            className="font-sans text-xs font-bold uppercase tracking-wider bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all cursor-pointer"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-stone-300 hover:text-white p-2 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-dropdown"
          className="md:hidden absolute top-full left-0 w-full bg-stone-950 border-b border-stone-850 px-6 py-6 flex flex-col gap-5 shadow-2xl animate-fade-in"
        >
          {navItems.map((item) => (
            <button
              id={`mobile-nav-link-${item.id}`}
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`font-sans text-lg font-medium text-left flex items-center justify-between ${
                activeSection === item.id ? "text-orange-400" : "text-stone-300"
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}

          <button
            id="mobile-cta-contact"
            onClick={() => handleItemClick("contact")}
            className="w-full text-center font-sans text-sm font-bold uppercase tracking-wider bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-lg shadow-lg"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
}
