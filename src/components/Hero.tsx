import { motion } from "motion/react";
import { Play, Sparkles, Film, Palette, Cpu, ChevronDown } from "lucide-react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // Simulating an active audio timeline visualizer
  const bars = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    delay: i * 0.08,
    height: Math.sin(i * 0.5) * 24 + 32, // Dynamic base height
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-stone-950 flex flex-col justify-center overflow-hidden pt-28 pb-16 px-6 md:px-12 border-b border-stone-900"
    >
      {/* Background Gradients and Aesthetic Details */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(249,115,22,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.04),transparent_50%)]" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Core Copy */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-stone-300">
              Full Stack Developer • Video Editor • Motion Designer
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight text-white leading-[1.1]"
            >
              Muthu Kumar M<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 text-2xl sm:text-3xl block mt-2 font-sans font-bold tracking-tight">
                Full-Stack Developer & Creative Editor
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-stone-300 text-base md:text-lg max-w-xl font-sans leading-relaxed"
            >
              A multi-disciplinary Computer Science Engineering student, full-stack systems engineer, and visual editor behind the Aries Studios page. I marry algorithmic precision and software design with high-pacing video campaigns, VFX, and cinematic motion graphics.
            </motion.p>
          </div>

          {/* Action Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              id="hero-view-work"
              onClick={() => onNavigate("showcase")}
              className="flex items-center gap-2 bg-white hover:bg-stone-200 text-black font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-lg shadow-white/5"
            >
              <Play className="w-4 h-4 fill-current text-black" />
              Explore Showcase
            </button>

            <button
              id="hero-contact"
              onClick={() => onNavigate("contact")}
              className="flex items-center gap-2 bg-gradient-to-r from-stone-900 to-stone-850 hover:from-stone-850 hover:to-stone-800 text-orange-400 border border-orange-500/20 hover:border-orange-500/40 font-sans text-sm font-semibold px-6 py-3.5 rounded-xl transition-all cursor-pointer group"
            >
              Get in touch
            </button>
          </motion.div>

          {/* Creative Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 flex flex-wrap gap-x-8 gap-y-4 border-t border-stone-900 max-w-xl"
          >
            <div className="min-w-[120px] flex-1">
              <span className="block font-sans text-xl sm:text-2xl font-bold text-white">Intermediate</span>
              <span className="block font-mono text-[10px] text-stone-400 uppercase tracking-wider mt-1">Skill Level</span>
            </div>
            <div className="min-w-[100px] flex-1">
              <span className="block font-sans text-xl sm:text-2xl font-bold text-white">100%</span>
              <span className="block font-mono text-[10px] text-stone-400 uppercase tracking-wider mt-1">Commitment</span>
            </div>
            <div className="min-w-[120px] flex-1">
              <span className="block font-sans text-xl sm:text-2xl font-bold text-white">Active</span>
              <span className="block font-mono text-[10px] text-stone-400 uppercase tracking-wider mt-1">Learning Journey</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Creative Asset Visualizer (The Video Editing Bay Simulator) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Visualizer Deck */}
          <div className="relative aspect-square w-full max-w-[420px] mx-auto rounded-2xl bg-stone-900/45 border border-stone-800/80 p-5 flex flex-col justify-between shadow-2xl backdrop-blur-xl group overflow-hidden">
            {/* Glossy top reflection */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

            {/* Editing Deck Header */}
            <div className="flex items-center justify-between border-b border-stone-800/60 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="font-mono text-[10px] text-stone-400 tracking-widest flex items-center gap-1.5 bg-stone-950/80 px-2.5 py-1 rounded border border-stone-850">
                <Cpu className="w-3 h-3 text-orange-400" /> TIMELINE.EXE
              </span>
            </div>

            {/* Video Preview Frame */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-stone-950 border border-stone-850 shadow-inner flex items-center justify-center group/preview">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600"
                alt="Editing bay simulation"
                className="w-full h-full object-cover opacity-60 group-hover/preview:scale-105 transition-transform duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay guides */}
              <div className="absolute top-2 left-2 font-mono text-[9px] text-red-400 font-semibold bg-stone-950/70 px-2 py-0.5 rounded tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" /> REC
              </div>
              <div className="absolute top-2 right-2 font-mono text-[9px] text-stone-300 bg-stone-950/70 px-2 py-0.5 rounded tracking-wider">
                00:04:12:18
              </div>

              {/* Central Play Badge */}
              <div className="absolute w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-orange-500/30">
                <Play className="w-5 h-5 text-white ml-0.5 fill-current" />
              </div>

              {/* Bottom tag info */}
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between font-mono text-[9px] text-stone-300">
                <span className="flex items-center gap-1">
                  <Film className="w-3 h-3 text-orange-400" /> KARUPPU_RECREATION.mp4
                </span>
                <span className="text-emerald-400">23.976 fps</span>
              </div>
            </div>

            {/* Timeline Waveform Simulator */}
            <div className="bg-stone-950/90 rounded-lg border border-stone-850 p-3 space-y-2">
              <div className="flex items-center justify-between text-stone-400 font-mono text-[8px] border-b border-stone-850 pb-1.5">
                <span>AUDIO STEM - REACTION Sfx</span>
                <span className="text-orange-400">ACTIVE MASTER</span>
              </div>
              {/* Interactive Audio Visualizer Wave */}
              <div className="h-10 flex items-end justify-between gap-[3px] px-1">
                {bars.map((bar) => (
                  <motion.div
                    key={bar.id}
                    className="flex-1 bg-stone-800 rounded-sm hover:bg-orange-500/80 transition-colors"
                    animate={{
                      height: [bar.height, bar.height * 0.4, bar.height * 1.2, bar.height],
                      backgroundColor: bar.id % 5 === 0 ? "#f97316" : "#44403c"
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: bar.delay,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Overlay tool chips */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-stone-800/40">
              <span className="font-mono text-[9px] text-stone-400 flex items-center gap-1">
                <Palette className="w-3 h-3 text-orange-400" /> RE-GRADED LUT_C192
              </span>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-1.5 rounded-sm bg-orange-400" />
                <span className="w-2.5 h-1.5 rounded-sm bg-amber-400" />
                <span className="w-2.5 h-1.5 rounded-sm bg-indigo-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down Chevron Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-500 hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate("showcase")}>
        <span className="font-mono text-[9px] uppercase tracking-widest">Scroll To Showcase</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
