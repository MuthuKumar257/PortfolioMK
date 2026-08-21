import { useState } from "react";
import { Briefcase, GraduationCap, Award, Code, Download, Printer, BookOpen, ExternalLink, Milestone, CheckCircle2 } from "lucide-react";

export default function InteractiveResume() {
  const [activeTab, setActiveTab] = useState<"experience" | "projects" | "skills" | "certifications">("experience");

  const resumeData = {
    personal: {
      name: "Muthu Kumar M",
      title: "Full Stack Developer & Creative Editor",
      email: "muthukumar82508@gmail.com",
      phone: "8248548461",
      location: "Tamil Nadu, India",
      linkedin: "https://www.linkedin.com/in/7mk",
      summary: "Motivated Computer Science Engineering student and Full-Stack Developer with expertise in full-stack engineering (React, React Native, Node.js, Python, FastAPI, Java, SQL, Machine Learning), AI prompt engineering, and video editing/motion design (Adobe Premiere Pro, After Effects, Photoshop). Proven leadership as Technical & Design Head at NGP Infanji E-Cell and Team Lead at Infanji Technologies.",
    },
    experience: [
      {
        role: "Team Lead",
        company: "Infanji Technologies",
        location: "Coimbatore",
        period: "February 2026 - June 2026",
        highlights: [
          "Led a high-performing team in the development and execution of software and technology projects.",
          "Managed project planning, sprint task allocation, and cross-functional team coordination to ensure timely delivery.",
          "Facilitated collaborative problem-solving sessions and clear communication channels across multiple developer teams.",
          "Contributed actively to strategic technical planning, engineering process improvements, and operational decision-making."
        ]
      },
      {
        role: "Technical & Design Head",
        company: "NGP Infanji E-Cell",
        location: "Coimbatore",
        period: "2025 - Present",
        highlights: [
          "Spearheaded technical development, digital experience engineering, and web systems for the campus Entrepreneurship Cell.",
          "Led the creative design team in crafting brand identity assets, promotional media, and digital marketing campaigns for flagship startup summits.",
          "Directed technical infrastructure and digital logistics for major events including IdeaFury and Illuminate incubation workshops."
        ]
      },
      {
        role: "Full Stack Developer Intern",
        company: "Pinesphere",
        location: "Coimbatore",
        period: "August 2025 - October 2025",
        highlights: [
          "Worked on production web application development utilizing Python backend architectures.",
          "Assisted in robust frontend-to-backend integrations and RESTful API engineering.",
          "Managed relational database operations, SQL queries, and complex debugging tasks.",
          "Gained extensive practical exposure to agile software development workflows and git-based deployment processes."
        ]
      }
    ],
    projects: [
      {
        title: "TokTrim — Token Optimizer for AI",
        type: "API & Systems Middleware",
        description: "Engineered TokenTrim, an AI middleware and browser extension suite designed to slash LLM API costs and response latency by compressing prompt payloads by 15% to 50%. Built around lightweight local NLP, it strips conversational fluff and duplicate content while preserving critical structures like code blocks, URLs, and data blocks. Features three pluggable integration methods: a dynamic playgound dashboard, Node.js/Express & Python/FastAPI backend wrappers, and a Chrome Extension (Manifest V3) that injects on-the-fly optimization directly into chat portals.",
        tech: ["HTML5", "Vanilla CSS3", "Vanilla JS", "FastAPI", "Express.js", "Chrome Extension (MV3)"]
      },
      {
        title: "Alumnyx",
        type: "React Native Mobile Application",
        description: "A secure React Native-based alumni networking platform facilitating mentorship, group communication, and career opportunity tracking through role-based access controls.",
        tech: ["React Native", "JavaScript", "Node.js", "PostgreSQL"]
      },
      {
        title: "Light Boundary System",
        type: "IoT & Embedded System",
        description: "Designed and built a hardware-integrated cricket boundary detection system featuring advanced touch-sensors that instantly trigger reactive LED indicator strips when the cricket ball makes contact.",
        tech: ["IoT Sensors", "Embedded Systems", "Arduino/C++", "Hardware Design"]
      }
    ],
    skills: {
      technical: [
        { name: "MERN Stack Development", level: 90 },
        { name: "React Native & React.js", level: 85 },
        { name: "Python", level: 90 },
        { name: "Machine Learning", level: 40 },
        { name: "Java & SQL", level: 75 },
        { name: "Prompt Engineering", level: 70 },
        { name: "Adobe Premiere Pro", level: 90 },
        { name: "Adobe After Effects", level: 85 },
        { name: "Adobe Photoshop", level: 95 }
      ],
      soft: ["Leadership", "Communication", "Problem Solving", "Team Management", "Team Coordination"]
    },
    education: [
      {
        degree: "BE (Computer Science Engineering)",
        school: "Dr N G P iTech",
        period: "2024 - 2028 (Expected)",
        details: "Focusing on problem solving, database systems, full stack developer, and software developer(learning)."
      },
      {
        degree: "HSC (12th Grade)",
        school: "Karthick Vidya Mandir Matric School",
        period: "Graduated 2024",
        details: "Specialized in Computer Science, Mathematics, Physics, and Chemistry."
      }
    ],
    certifications: [
      {
        title: "Full Stack with Python and Django",
        issuer: "Pinesphere Solutions",
        date: "2025"
      },
      {
        title: "Internet of Things",
        issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
        date: "2025"
      }
    ],
    achievements: [
      {
        title: "E-Summit Finalist",
        desc: "Qualified for and attended the highly competitive finals of the national E-Summit, engaging with elite startup founders, venture capitalists, and industry experts."
      },
      {
        title: "3rd Prize - IPL Auction Competition",
        desc: "Won 3rd Prize in the strategic IPL Auction Simulation Competition hosted by KGISL, demonstrating excellent analytical planning and budget allocation."
      },
      {
        title: "Paper Presentations & Technical Quizzes",
        desc: "Actively participated in state-level technical symposiums, research paper presentations, and algorithmic puzzle contests."
      }
    ],
    activities: [
      {
        title: "IdeaFury Organizer",
        desc: "Key organizer for IdeaFury, a premier startup pitching summit designed for aspiring student entrepreneurs to voice innovative venture concepts."
      },
      {
        title: "Illuminate Coordinator",
        desc: "Coordinated Illuminate, a focused startup incubation workshop encouraging entrepreneurial mindset and early stage prototyping among peers."
      },
      {
        title: "NGP Infanji E-Cell Technical & Design Head",
        desc: "Technical and Design Head of the NGP Infanji Entrepreneurship Cell, leading software development, digital identity design, brand marketing, and technical event infrastructure."
      }
    ]
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="scroll-mt-24 py-24 px-6 md:px-12 bg-stone-900/30 border-b border-stone-900 print:bg-white print:text-black print:py-0 print:border-none">
      <div className="max-w-5xl mx-auto space-y-12 print:space-y-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-850 pb-8 print:border-stone-200 print:pb-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-orange-500 font-mono text-[10px] uppercase tracking-widest font-semibold print:hidden">
              <GraduationCap className="w-3.5 h-3.5" /> Interactive CV
            </div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white leading-tight print:text-black print:text-3xl">
              Professional Resume
            </h2>
            <p className="text-stone-400 font-sans text-sm max-w-2xl print:text-stone-600">
              Tracing the intersection of software engineering discipline and premium visual design. Currently pursuing CSE Dr N G P iTech and building next-generation digital experiences.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 print:hidden">
            <a
              href="mailto:muthukumar82508@gmail.com"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-semibold px-4 py-2.5 rounded-lg shadow-lg shadow-orange-500/15 transition-all cursor-pointer"
            >
              Hire Developer
            </a>
          </div>
        </div>

        {/* PRINT-ONLY RESUME HEADER */}
        <div className="hidden print:block text-left space-y-4 text-black pb-4 border-b border-stone-200">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-stone-900">{resumeData.personal.name}</h1>
              <p className="text-orange-600 font-semibold text-sm tracking-wide mt-1 uppercase">{resumeData.personal.title}</p>
            </div>
            <div className="text-right text-xs text-stone-600 space-y-0.5">
              <p>📍 {resumeData.personal.location}</p>
              <p>📞 {resumeData.personal.phone}</p>
              <p>✉️ {resumeData.personal.email}</p>
              <p>🔗 linkedin.com/in/7mk</p>
            </div>
          </div>
          <p className="text-xs text-stone-700 leading-relaxed italic bg-stone-50 p-3 rounded-lg border border-stone-100">
            {resumeData.personal.summary}
          </p>
        </div>

        {/* INTERACTIVE COMPONENT VIEW (Hidden during print) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:hidden">
          {/* Navigation Sidebar */}
          <div className="md:col-span-3 flex md:flex-col overflow-x-auto md:overflow-visible gap-2 border-b md:border-b-0 md:border-r border-stone-850 pb-4 md:pb-0 md:pr-4">
            {[
              { id: "experience", label: "Experience", icon: Briefcase },
              { id: "projects", label: "Projects", icon: Code },
              { id: "skills", label: "Skills", icon: Milestone },
              { id: "certifications", label: "Achievements", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all text-left whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/10"
                      : "text-stone-400 hover:text-stone-200 hover:bg-stone-900"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Window */}
          <div className="md:col-span-9 text-left">
            {activeTab === "experience" && (
              <div className="space-y-8 animate-fade-in">
                {/* Education Subsection embedded */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-stone-850 pb-2">
                    <GraduationCap className="w-5 h-5 text-orange-400" /> Education
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx} className="bg-stone-900 border border-stone-850 p-4 rounded-xl space-y-1">
                        <span className="font-mono text-[9px] text-orange-400 font-bold uppercase">{edu.period}</span>
                        <h4 className="font-sans font-bold text-white text-sm leading-tight">{edu.degree}</h4>
                        <p className="text-xs text-stone-400 font-sans">{edu.school}</p>
                        <p className="text-[11px] text-stone-500 pt-1 leading-relaxed">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience Subsection */}
                <div className="space-y-6 pt-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-stone-850 pb-2">
                    <Briefcase className="w-5 h-5 text-orange-400" /> Professional Experience
                  </h3>
                  <div className="space-y-6">
                    {resumeData.experience.map((exp, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-stone-800 space-y-2">
                        <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-1.5 border-2 border-stone-950" />
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className="font-sans font-bold text-base text-white">{exp.role}</h4>
                          <span className="font-mono text-[10px] text-stone-400 bg-stone-900 border border-stone-850 px-2 py-0.5 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-orange-400/90 font-semibold uppercase tracking-wider">{exp.company} • {exp.location}</p>
                        <ul className="list-disc list-outside ml-4 space-y-1 text-stone-400 text-xs font-sans leading-relaxed pt-1.5">
                          {exp.highlights.map((item, id) => (
                            <li key={id} className="pl-0.5">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-8 animate-fade-in">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-stone-850 pb-2">
                  <Code className="w-5 h-5 text-orange-400" /> Key Software Work
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {resumeData.projects.map((proj, idx) => (
                    <div key={idx} className="bg-stone-900 border border-stone-850 p-6 rounded-2xl flex flex-col justify-between hover:border-stone-700 transition-colors">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[9px] bg-orange-500/10 border border-orange-500/20 text-orange-400 font-bold uppercase px-2.5 py-1 rounded-md">
                            {proj.type}
                          </span>
                        </div>
                        <h4 className="font-sans font-bold text-lg text-white leading-tight">{proj.title}</h4>
                        <p className="text-xs text-stone-400 font-sans leading-relaxed">{proj.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-stone-850/60">
                        {proj.tech.map((t, tid) => (
                          <span key={tid} className="font-mono text-[8px] bg-stone-950 text-stone-300 border border-stone-850 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-stone-850 pb-2">
                  <Milestone className="w-5 h-5 text-orange-400" /> Technical Competence
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {resumeData.skills.technical.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between font-sans text-xs">
                        <span className="text-stone-200 font-bold">{skill.name}</span>
                        <span className="font-mono text-orange-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-stone-900 rounded-full overflow-hidden border border-stone-850">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <h4 className="font-sans font-bold text-white text-sm mb-3">Core & Leadership Strengths</h4>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.soft.map((skill, idx) => (
                      <span key={idx} className="font-sans text-xs bg-stone-900 text-stone-300 border border-stone-850 px-3 py-1.5 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "certifications" && (
              <div className="space-y-8 animate-fade-in">
                {/* Certifications and achievements */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-stone-850 pb-2">
                    <Award className="w-5 h-5 text-orange-400" /> Industry Certifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {resumeData.certifications.map((cert, idx) => (
                      <div key={idx} className="bg-stone-900 border border-stone-850 p-4 rounded-xl flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-sm text-white leading-tight">{cert.title}</h4>
                          <p className="text-xs text-stone-400 font-sans mt-0.5">{cert.issuer}</p>
                          <span className="inline-block font-mono text-[9px] text-stone-500 uppercase mt-1">{cert.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-stone-850 pb-2">
                    <Milestone className="w-5 h-5 text-orange-400" /> Career Milestones & Honors
                  </h3>
                  <div className="space-y-4">
                    {resumeData.achievements.map((ach, idx) => (
                      <div key={idx} className="bg-stone-900 border border-stone-850 p-4 rounded-xl">
                        <h4 className="font-sans font-bold text-sm text-white">{ach.title}</h4>
                        <p className="text-xs text-stone-400 font-sans mt-1.5 leading-relaxed">{ach.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-stone-850 pb-2">
                    <BookOpen className="w-5 h-5 text-orange-400" /> Campus & Ecosystem Activities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {resumeData.activities.map((act, idx) => (
                      <div key={idx} className="bg-stone-900/60 border border-stone-850/60 p-4 rounded-xl flex flex-col justify-between">
                        <div>
                          <h4 className="font-sans font-bold text-xs text-white leading-snug">{act.title}</h4>
                          <p className="text-[11px] text-stone-400 font-sans mt-2 leading-relaxed">{act.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* PRINT-ONLY RESUME BODY */}
        <div className="hidden print:grid grid-cols-12 gap-6 text-black text-xs text-left">
          {/* Print Column Left */}
          <div className="col-span-8 space-y-6">
            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600 border-b border-stone-300 pb-1 flex items-center gap-1.5">
                💼 Professional Experience
              </h3>
              <div className="space-y-4">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between font-bold text-stone-800">
                      <span>{exp.role} — {exp.company}</span>
                      <span className="font-normal text-stone-600">{exp.period}</span>
                    </div>
                    <p className="text-[10px] text-stone-500 italic uppercase font-semibold">{exp.location}</p>
                    <ul className="list-disc list-inside space-y-0.5 text-stone-700 text-[11px] pl-2">
                      {exp.highlights.map((h, id) => (
                        <li key={id}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600 border-b border-stone-300 pb-1 flex items-center gap-1.5">
                💻 Academic Projects
              </h3>
              <div className="space-y-3">
                {resumeData.projects.map((proj, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex justify-between font-bold text-stone-800">
                      <span>{proj.title} ({proj.type})</span>
                    </div>
                    <p className="text-stone-700 text-[11px]">{proj.description}</p>
                    <p className="text-[10px] text-stone-500 font-mono">Tools: {proj.tech.join(", ")}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600 border-b border-stone-300 pb-1 flex items-center gap-1.5">
                🏆 Achievements & Activities
              </h3>
              <ul className="list-disc list-inside space-y-1 text-stone-700 text-[11px]">
                {resumeData.achievements.map((ach, idx) => (
                  <li key={idx}>
                    <strong className="text-stone-800">{ach.title}:</strong> {ach.desc}
                  </li>
                ))}
                {resumeData.activities.map((act, idx) => (
                  <li key={idx}>
                    <strong className="text-stone-800">{act.title}:</strong> {act.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Print Column Right */}
          <div className="col-span-4 space-y-6 border-l border-stone-200 pl-4">
            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600 border-b border-stone-300 pb-1">
                🎓 Education
              </h3>
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="space-y-0.5 text-[11px]">
                  <p className="font-bold text-stone-800">{edu.degree}</p>
                  <p className="text-stone-600">{edu.school}</p>
                  <p className="text-[10px] text-stone-500 italic">{edu.period}</p>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600 border-b border-stone-300 pb-1">
                ⚙️ Technical Skills
              </h3>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                {resumeData.skills.technical.map((sk, idx) => (
                  <span key={idx} className="bg-stone-100 text-stone-800 px-2 py-0.5 rounded border border-stone-200">
                    {sk.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600 border-b border-stone-300 pb-1">
                📜 Certifications
              </h3>
              {resumeData.certifications.map((cert, idx) => (
                <div key={idx} className="text-[11px] space-y-0.5">
                  <p className="font-bold text-stone-800 leading-tight">{cert.title}</p>
                  <p className="text-stone-600 text-[10px]">{cert.issuer} ({cert.date})</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
