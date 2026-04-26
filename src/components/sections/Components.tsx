import { Lightbulb, Droplets, Wind, ShieldAlert } from "lucide-react";

const items = [
  {
    n: "01",
    icon: Lightbulb,
    title: "AI RGB Lighting Optimization",
    desc: "Collects real-time lighting and plant environment data to optimize RGB lighting for tomato plants — improving photosynthesis, plant health, and growth rate by tuning artificial lighting to plant needs.",
    tech: ["Machine Learning", "IoT Sensors", "ESP32", "RGB Module", "Real-Time Analysis"],
    gradient: "from-sunlight to-tomato",
    accent: "sunlight",
  },
  {
    n: "02",
    icon: Droplets,
    title: "Automated Watering System",
    desc: "Measures soil moisture and environmental conditions to automate watering. Reduces water wastage and ensures tomato plants receive the correct amount of water at the right time.",
    tech: ["Soil Moisture Sensor", "ESP32", "Water Pump", "Random Forest Regressor", "Real-Time Monitoring"],
    gradient: "from-sky to-leaf",
    accent: "sky",
  },
  {
    n: "03",
    icon: Wind,
    title: "Predictive Cooling & Ventilation",
    desc: "Predicts greenhouse temperature and humidity, then automatically controls cooling and ventilation to prevent heat stress and create a stable environment for tomato plants.",
    tech: ["Temperature Sensor", "Humidity Sensor", "ESP32", "LSTM Model", "Random Forest Regressor", "Fan Control"],
    gradient: "from-leaf to-sky",
    accent: "leaf",
  },
  {
    n: "04",
    icon: ShieldAlert,
    title: "Frost & Disease Forecasting",
    desc: "Predicts frost risk and tomato plant disease possibility using environmental data and ML classification — alerting farmers early so they can act before crop damage occurs.",
    tech: ["Random Forest Classifier", "Disease Prediction Model", "Frost Forecasting", "Sensor Data"],
    gradient: "from-tomato to-sunlight",
    accent: "tomato",
  },
];

export const Components = () => {
  return (
    <section id="components" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="chip bg-tomato/10 text-tomato mb-4">Four Smart Components</div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy">
            One greenhouse, <span className="text-gradient-tomato">four intelligent modules</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Each component is built around real sensor data, trained ML models, and ESP32-driven automation.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <article
              key={it.n}
              className="reveal group relative rounded-3xl p-7 bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${it.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${it.gradient} flex items-center justify-center shadow-soft`}>
                    <it.icon className="w-7 h-7 text-white" />
                  </span>
                  <span className="font-display text-5xl font-bold text-muted-foreground/20">{it.n}</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-navy">{it.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{it.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {it.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-navy">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
