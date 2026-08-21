import { Award, Zap, Video, BookOpen, Code, Cpu } from "lucide-react";

const muthuImage = "/muthu.png";

export default function AboutAndReviews() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-24 px-6 md:px-12 bg-stone-950 border-b border-stone-900"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Upper Segment: Bio & Portrait Illustration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-[360px] mx-auto rounded-2xl bg-stone-900 border border-stone-800 p-4 shadow-2xl overflow-hidden group flex items-center justify-center">
              {/* Fallback avatar backplate if image is transparent or placeholder */}
              <div className="absolute inset-4 bg-stone-950 rounded-xl flex flex-col items-center justify-center border border-stone-850">
                <span className="font-sans font-extrabold text-6xl text-orange-400">MK</span>
                <span className="font-mono text-[9px] text-stone-500 mt-2">Muthu Kumar M</span>
              </div>

              <img
                src={muthuImage}
                alt="Muthu Kumar M"
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none z-10"
                referrerPolicy="no-referrer"
              />
              {/* Glossy filter */}
              <div className="absolute inset-0 bg-stone-950/20 pointer-events-none z-20" />
              
              {/* Floating Badges */}
              <div className="absolute bottom-6 left-6 right-6 bg-stone-950/90 backdrop-blur border border-stone-800 p-4 rounded-xl flex items-center gap-3 z-30">
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                  <Zap className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="block font-sans font-bold text-xs text-white uppercase tracking-wider">Muthu Kumar M</span>
                  <span className="block font-mono text-[9px] text-stone-400">ARIES STUDIOS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Bio Copy */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-orange-500 font-mono text-[10px] uppercase tracking-widest font-semibold">
                <BookOpen className="w-3.5 h-3.5" /> Creative Bio
              </div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white leading-tight">
                Behind the Timeline
              </h2>
            </div>

            <div className="space-y-4 text-stone-300 font-sans text-sm leading-relaxed">
              <p>
                Hello! I am Muthu Kumar M, a Computer Science Engineering student, Full-Stack Developer, and the creative editor behind Aries Studios. I thrive at the intersection of technology and visual media-combining software systems engineering with high-impact video editing and motion design.
              </p>
              <p>
                On the <strong className="text-orange-400 font-semibold">technical & programming side</strong>, my core stack spans Full-Stack Web and Mobile Development (React, React Native, JavaScript, TypeScript, Node.js, Express, FastAPI, Python, Java, SQL, and Machine Learning), AI Prompt Engineering, and Hardware/IoT system integrations. As the Technical & Design Head of NGP Infanji E-Cell and Team Lead at Infanji Technologies, I direct web platforms, technical infrastructure, and digital startup initiatives.
              </p>
              <p>
                On the <strong className="text-orange-400 font-semibold">editing & creative timeline</strong>, I design dynamic video sequences, cinematic motion graphics, color-graded edits, and fast-paced commercial promotional reels using Adobe Premiere Pro, After Effects, and Photoshop. My focus is on mastering cinematic timing, audio synchronization, and visual storytelling to build compelling visual experiences.
              </p>
            </div>

            {/* Core Technical & Creative Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-900">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-850 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-sans font-semibold text-white text-sm">Full-Stack Engineering</span>
                  <span className="block text-stone-400 text-xs">React, React Native, Node.js, Python, FastAPI, Java, SQL & Machine Learning.</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-850 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-sans font-semibold text-white text-sm">Technical Leadership</span>
                  <span className="block text-stone-400 text-xs">Technical & Design Head at NGP Infanji E-Cell & Infanji Tech.</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-850 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-sans font-semibold text-white text-sm">Motion & Video Editing</span>
                  <span className="block text-stone-400 text-xs">Adobe Premiere Pro, After Effects & Photoshop for Aries Studios.</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-850 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-sans font-semibold text-white text-sm">AI & Hardware Systems</span>
                  <span className="block text-stone-400 text-xs">Prompt engineering, IoT sensors, and Token optimization.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
