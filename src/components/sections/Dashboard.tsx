import { Activity, Droplets, Thermometer, Wind, Sun, Leaf, ShieldAlert, Snowflake } from "lucide-react";

const tiles = [
  { icon: Thermometer, label: "Temperature", value: "28°C", tag: "Optimal", color: "tomato" },
  { icon: Droplets, label: "Humidity", value: "72%", tag: "Stable", color: "sky" },
  { icon: Leaf, label: "Soil Moisture", value: "64%", tag: "Healthy", color: "leaf" },
  { icon: Sun, label: "RGB Light Level", value: "Optimized", tag: "AI Tuned", color: "sunlight" },
  { icon: Wind, label: "Cooling Status", value: "Active", tag: "Auto", color: "sky" },
  { icon: Activity, label: "Watering Status", value: "Automated", tag: "Live", color: "leaf" },
  { icon: ShieldAlert, label: "Disease Risk", value: "Low", tag: "Safe", color: "leaf" },
  { icon: Snowflake, label: "Frost Risk", value: "Safe", tag: "Clear", color: "sky" },
];

const colorMap: Record<string, string> = {
  tomato: "from-tomato/20 to-tomato/5 text-tomato border-tomato/30",
  leaf: "from-leaf/20 to-leaf/5 text-leaf border-leaf/30",
  sky: "from-sky/20 to-sky/5 text-sky border-sky/30",
  sunlight: "from-sunlight/30 to-sunlight/5 text-navy border-sunlight/40",
};

export const Dashboard = () => {
  return (
    <section className="section bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-tomato/10 blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="chip bg-tomato/15 text-tomato mb-4">
            <Activity className="w-3.5 h-3.5" /> Live Dashboard Preview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Real-Time <span className="text-gradient-sunset">Greenhouse Telemetry</span>
          </h2>
          <p className="mt-4 text-white/70">
            Sample readings from the Tomatoa IoT mesh — sensors stream data every few seconds and AI models react instantly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {tiles.map((t, i) => (
            <div
              key={t.label}
              className={`group relative rounded-2xl p-5 bg-gradient-to-br ${colorMap[t.color]} border backdrop-blur-md hover:scale-105 transition-transform`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between">
                <t.icon className="w-7 h-7" />
                <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full bg-white/80 text-navy">
                  {t.tag}
                </span>
              </div>
              <div className="mt-6">
                <div className="text-xs uppercase tracking-wider text-white/70">{t.label}</div>
                <div className="text-2xl md:text-3xl font-display font-bold text-white mt-1">{t.value}</div>
              </div>
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-leaf animate-pulse-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
