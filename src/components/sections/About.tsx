import { Cpu, Leaf, MapPin, Sparkles } from "lucide-react";
import tomatoes from "@/assets/tomatoes-vine.jpg";

export const About = () => {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="chip bg-leaf/10 text-leaf mb-4">
              <Leaf className="w-3.5 h-3.5" /> About Tomatoa
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              Smart greenhouse for <span className="text-gradient-tomato">next-gen tomato farming</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Tomatoa is a smart greenhouse solution developed to help farmers automate greenhouse management
              using real-time IoT sensor data and AI-based prediction models. It supports tomato plant growth
              by monitoring temperature, humidity, soil moisture, RGB lighting, cooling, ventilation, frost risk,
              and disease forecasting — all in one integrated platform.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Designed to support next-generation agriculture in Sri Lanka, Tomatoa helps farmers increase
              productivity, reduce crop damage, and make better decisions powered by AI.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Cpu, title: "IoT-First", desc: "ESP32 mesh streams live greenhouse data." },
                { icon: Sparkles, title: "AI-Powered", desc: "ML models predict, decide, and automate." },
                { icon: Leaf, title: "Plant-Centric", desc: "Optimized for tomato growth conditions." },
                { icon: MapPin, title: "Made for Sri Lanka", desc: "Tuned for tropical greenhouse climate." },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl p-4 bg-card border border-border shadow-soft hover:shadow-card transition-shadow">
                  <f.icon className="w-6 h-6 text-tomato" />
                  <div className="mt-3 font-semibold text-navy">{f.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-6 bg-gradient-tomato rounded-[2rem] opacity-20 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-card border-4 border-white">
              <img
                src={tomatoes}
                alt="Healthy red tomatoes growing on the vine in a smart greenhouse"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1280}
                height={896}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-card animate-float">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Yield Boost</div>
              <div className="text-2xl font-display font-bold text-gradient-tomato">+38%</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Water Saved</div>
              <div className="text-2xl font-display font-bold text-sky">42%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
