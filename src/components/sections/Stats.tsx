import { Layers, Database, Brain, Wifi, Settings } from "lucide-react";

const stats = [
  { icon: Layers, value: "4", label: "Smart Components", color: "tomato" },
  { icon: Database, value: "1000+", label: "Data Records / Component", color: "sky" },
  { icon: Brain, value: "98%", label: "AI Prediction Accuracy", color: "leaf" },
  { icon: Wifi, value: "24/7", label: "Real-Time IoT Monitoring", color: "sunlight" },
  { icon: Settings, value: "Auto", label: "Greenhouse Control", color: "tomato" },
];

const colorMap: Record<string, string> = {
  tomato: "bg-gradient-tomato",
  sky: "bg-gradient-sky",
  leaf: "bg-gradient-leaf",
  sunlight: "bg-gradient-sunset",
};

export const Stats = () => {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="chip bg-leaf/10 text-leaf mb-4">Dataset & AI Accuracy</div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy">
            Trained on <span className="text-gradient-tomato">real greenhouse data</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Each major component uses more than 1,000 data records for training and testing. The AI prediction
            solution delivers intelligent recommendations and automation with around 98% working accuracy.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal rounded-2xl p-6 bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all text-center"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className={`mx-auto w-14 h-14 rounded-2xl ${colorMap[s.color]} flex items-center justify-center shadow-soft`}>
                <s.icon className="w-7 h-7 text-white" />
              </span>
              <div className="mt-4 text-4xl font-display font-bold text-gradient-tomato">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
