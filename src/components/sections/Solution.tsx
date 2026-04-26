import { Zap, Cpu, Droplets, Wind, Bug, BarChart3, Brain, Settings, CheckCircle2 } from "lucide-react";
import dashboard from "@/assets/ai-dashboard.jpg";

const features = [
  { icon: Zap, text: "AI-based RGB lighting optimization" },
  { icon: Droplets, text: "Automated watering system" },
  { icon: Wind, text: "Predictive cooling & ventilation" },
  { icon: Bug, text: "Frost & disease forecasting" },
  { icon: BarChart3, text: "Real-time monitoring dashboard" },
  { icon: Brain, text: "AI prediction recommendations" },
  { icon: Cpu, text: "Data-driven decision support" },
  { icon: Settings, text: "Automated greenhouse control" },
];

export const Solution = () => {
  return (
    <section className="section bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-white/10">
              <img
                src={dashboard}
                alt="Tomatoa AI dashboard with real-time charts and predictions"
                className="w-full h-auto"
                loading="lazy"
                width={1280}
                height={896}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-8 glass rounded-2xl p-4 shadow-card animate-pulse-glow">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-leaf" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-navy/70">AI Accuracy</div>
                  <div className="text-2xl font-display font-bold text-navy">~98%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <div className="chip bg-tomato/15 text-tomato mb-4">
              <Brain className="w-3.5 h-3.5" /> Proposed Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              An end-to-end <span className="text-gradient-sunset">smart greenhouse stack</span>
            </h2>
            <p className="mt-5 text-lg text-white/75 leading-relaxed">
              Tomatoa pairs ESP32 microcontrollers and IoT sensors with machine-learning models and automated
              actuators to optimize every aspect of tomato plant growth. The AI prediction solution delivers
              smart recommendations and autonomous actions with approximately <span className="text-tomato font-semibold">98% prediction accuracy</span>.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-3 rounded-xl p-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="w-9 h-9 rounded-lg bg-gradient-tomato flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-tomato-foreground" />
                  </span>
                  <span className="text-sm font-medium">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
