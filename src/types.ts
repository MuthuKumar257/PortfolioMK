export interface Project {
  id: string;
  title: string;
  category: "video" | "design";
  subcategory: string;
  imageUrl: string;
  videoUrl?: string; // Embedded video placeholder or actual MP4
  description: string;
  client: string;
  deliverables: string[];
  toolsUsed: string[];
  stats?: {
    label: string;
    value: string;
  };
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface CreativeBriefResponse {
  title: string;
  overview: string;
  creativeConcept: string;
  editingStyle: {
    pacing: string;
    cutsAndTransitions: string;
    colorGrading: string;
    soundDesign: string;
  };
  designAesthetics: {
    typography: string;
    colorPalette: string[];
    visualTheme: string;
  };
  suggestedStoryboard: Array<{
    scene: string;
    visuals: string;
    audioAndSound: string;
  }>;
  deliveryDetails: {
    estimatedHours: number;
    difficultyLevel: string;
    suggestedDeliverables: string[];
  };
}
