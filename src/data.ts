import { Project, Service } from "./types";

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "personal-intro-rj-balaji",
    title: "Karuppu RJ Balaji Title Card Recreation (Personal Intro)",
    category: "video",
    subcategory: "Personal Intro & Title Design",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
    videoUrl: "https://www.instagram.com/reel/DaXj610vbwc/?igsh=OG9vdXNrNG9pcXRu",
    description: "My personal introduction animated and styled as a cinematic title card recreation of RJ Balaji's sequence from the movie 'Karuppu'. Developed using stylized typography, dynamic lighting, and film textures to create a high-impact cinematic intro.",
    client: "Personal Project",
    deliverables: ["Custom Personal Intro", "RJ Balaji Title Recreation", "After Effects Motion Assets"],
    toolsUsed: ["Premiere Pro", "After Effects"],
    stats: {
      label: "Project Style",
      value: "Intro Reel",
    },
    date: "July 2026",
  },
  {
    id: "karrupu-recreation",
    title: "Karrupu Movie Suriya Title Card Recreation",
    category: "video",
    subcategory: "VFX & Title Design",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200",
    videoUrl: "https://drive.google.com/file/d/1CKD2sB1D7PyexhHXKcBO_0PE9Lok7jwE/view?usp=drive_link",
    description: "A highly detailed recreation of the Suriya movie 'Karrupu' title card sequence. Crafted with rich analog textures, precise kinetic typography, and synchronized visual timing. Modeled using procedural particles, distressed film masks, and modern cinematic lighting.",
    client: "Creative Practice / Tribute",
    deliverables: ["Full Motion Title Card", "After Effects Raw Comps", "Asset & Texture Package"],
    toolsUsed: ["After Effects", "Premiere Pro", "Photoshop"],
    stats: {
      label: "Project Type",
      value: "Recreation",
    },
    date: "July 2026",
  },
  {
    id: "instagram-client-promo",
    title: "Instagram Client Promotional Reel",
    category: "video",
    subcategory: "Client Brand Promo",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    videoUrl: "https://www.instagram.com/reel/DZtzKFLI_NG/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
    description: "A highly engaging commercial brand video edited and designed for an Instagram audience. Features modern fast-paced editing, precise synchronization, keyframed camera zooms, and customized motion templates to drive product click-through and consumer engagement.",
    client: "Social Media Brand Client",
    deliverables: ["60s High-Impact Cut", "15s Campaign Story Cuts", "Custom Visual Overlays"],
    toolsUsed: ["Premiere Pro", "After Effects"],
    stats: {
      label: "Campaign Style",
      value: "Brand Video",
    },
    date: "July 2026",
  },
  {
    id: "ngp-infanji-ecell-branding",
    title: "NGP Infanji E-Cell Branding",
    category: "video",
    subcategory: "E-Cell Branding & Motion Video",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
    videoUrl: "https://www.instagram.com/reel/DbdXiYrtXAt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    description: "A promotional and brand video created for NGP Infanji E-Cell, featuring creative motion design, seamless transitions, and high-impact visual storytelling engineered for entrepreneurial event promotion and brand visibility.",
    client: "NGP Infanji E-Cell",
    deliverables: ["E-Cell Branding Video", "Motion Design & Transitions", "Sound Design & Typography"],
    toolsUsed: ["Premiere Pro", "After Effects", "Photoshop"],
    stats: {
      label: "Campaign",
      value: "E-Cell Branding",
    },
    date: "August 2026",
  },
];

export const SERVICES: Service[] = [
  {
    id: "fullstack-dev",
    title: "Full Stack Web Development",
    description: "End-to-end modern web applications built using MERN/PERN stacks. Clean architectural standards, secure server components, and beautiful, responsive UI layers.",
    iconName: "Code",
    features: [
      "Custom React / Next.js web application designs",
      "Robust Node.js & Express API services",
      "Database modeling (MongoDB, SQL/PostgreSQL)",
      "Secure user auth and cloud service integrations",
    ],
  },
  {
    id: "app-development",
    title: "Mobile App Development",
    description: "Fluid, native-feeling mobile applications built on React Native. Designed with performance optimization, clean state trees, and intuitive gesture controls.",
    iconName: "Smartphone",
    features: [
      "Cross-platform iOS & Android solutions",
      "Clean local state & offline-first data engines",
      "Third-party REST API & SDK integrations",
      "Performance optimization & hardware sensor usage",
    ],
  },
  {
    id: "video-editing",
    title: "High-Impact Video Editing",
    description: "Pristine pacing, smart match-cuts, customized motion elements, and storytelling that commands absolute user attention in the first 3 seconds.",
    iconName: "Film",
    features: [
      "Commercials, Social Promos & Reels",
      "Dynamic speed ramps & transitions",
      "Bespoke transitions & stylized visual cuts",
      "Multi-cam syncing & multi-platform deliverables",
    ],
  },
  {
    id: "video-fx",
    title: "Motion Graphics & Video FX",
    description: "Seamless visual effects, dynamic motion graphics, and cinematic video enhancements that elevate the storytelling without distracting the viewer.",
    iconName: "Layers",
    features: [
      "Cinematic title design & lower thirds",
      "Visual effects, green screen & cleanups",
      "Smooth motion graphics & text integrations",
      "Custom modern transitions & stylized overlays",
    ],
  },
];

