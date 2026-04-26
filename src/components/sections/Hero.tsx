import { ArrowRight, Sparkles, Users, Workflow } from "lucide-react";
import hero from "@/assets/hero-greenhouse.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Futuristic smart greenhouse with tomato plants under RGB lighting"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

      {/* Floating orbs */}
      <div className="absolute top-32 left-10 w-72 h-72 rounded-full bg-tomato/30 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-leaf/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-sky/20 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="container relative z-10 pt-24 pb-12">
        <div className="max-w-4xl">
          <div className="chip glass text-navy mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-tomato" />
            Final-Year Research · SLIIT, Malabe
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] animate-fade-in-up">
            NEXT-GEN <br />
            <span className="text-gradient-sunset">SMART GREENHOUSE</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl font-display font-medium text-white/90 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            An IoT and AI Approach for Tomato Plant Growth Optimization
          </p>

          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <span className="font-semibold text-white">Tomatoa</span> is an intelligent greenhouse automation system that uses
            IoT sensors, machine-learning models, and AI prediction solutions to optimize tomato farming conditions in real time.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a href="#about" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-tomato text-tomato-foreground font-semibold shadow-glow hover:scale-105 transition-transform">
              Explore Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#methodology" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-navy font-semibold hover:bg-white/90 transition-colors">
              <Workflow className="w-4 h-4" /> View Methodology
            </a>
            <a href="#team" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-navy font-semibold hover:bg-white/90 transition-colors">
              <Users className="w-4 h-4" /> Meet the Team
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { value: "4", label: "Smart Components" },
              { value: "1000+", label: "Data Records / Component" },
              { value: "98%", label: "AI Accuracy" },
              { value: "24/7", label: "Real-Time Monitoring" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient-tomato">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-navy/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
