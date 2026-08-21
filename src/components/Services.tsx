import { SERVICES } from "../data";
import { Film, Palette, Layers, CheckCircle2, Code, Smartphone } from "lucide-react";

export default function Services() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Code":
        return <Code className="w-6 h-6 text-orange-400" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-orange-400" />;
      case "Film":
        return <Film className="w-6 h-6 text-orange-400" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-orange-400" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-orange-400" />;
      default:
        return <Film className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section
      id="services"
      className="scroll-mt-24 py-24 px-6 md:px-12 bg-stone-950 border-b border-stone-900"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-orange-500 font-mono text-[10px] uppercase tracking-widest font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" /> Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-white leading-tight">
            How I Bring Ideas to Life
          </h2>
          <p className="text-stone-400 font-sans text-sm leading-relaxed">
            From robust full-stack systems and intuitive mobile apps to high-pacing video edits and cinematic visual effects, I engineer cohesive creative solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              id={`service-card-${service.id}`}
              key={service.id}
              className="bg-stone-900 border border-stone-850 p-6 md:p-8 rounded-2xl space-y-6 flex flex-col justify-between hover:border-stone-800 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                {/* Service Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shadow-inner">
                  {getIcon(service.iconName)}
                </div>
                
                {/* Service Core Details */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-sans text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-stone-400 font-sans text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Service Feature Checklist */}
              <div className="pt-6 border-t border-stone-850 space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 font-sans text-xs text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500/80 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
