import { Code2, Cpu, Brain, Database } from "lucide-react";
import iotImg from "@/assets/iot-sensors.jpg";

const stacks = [
  {
    icon: Code2,
    title: "Frontend",
    color: "tomato",
    items: ["React", "Responsive UI", "Dashboard Interface", "Real-Time Data Visualization"],
  },
  {
    icon: Cpu,
    title: "IoT Hardware",
    color: "sky",
    items: ["ESP32 Microcontroller", "Temperature Sensor", "Humidity Sensor", "Soil Moisture Sensor", "RGB Lighting Module", "Cooling Fan / Ventilation", "Water Pump System"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    color: "leaf",
    items: ["LSTM", "Random Forest Regressor", "Random Forest Classifier", "Trained ML Models", "AI Prediction Solution", "1000+ Records / Component"],
  },
  {
    icon: Database,
    title: "Data",
    color: "sunlight",
    items: ["Real-Time Sensor Data", "Tomato Plant Environment Data", "Temperature & Humidity", "Soil Moisture", "Lighting Patterns", "Disease-Related Patterns"],
  },
];

const colorMap: Record<string, string> = {
  tomato: "bg-gradient-tomato",
  sky: "bg-gradient-sky",
  leaf: "bg-gradient-leaf",
  sunlight: "bg-gradient-sunset",
};

export const Tech = () => {
  return (
    <section id="tech" className="section bg-muted/40 relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-10 items-start mb-14">
          <div className="lg:col-span-2 reveal">
            <div className="chip bg-sky/10 text-sky mb-4">Tools & Technologies</div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              The <span className="text-gradient-tomato">technology stack</span> behind Tomatoa
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From low-level ESP32 firmware to high-level AI prediction, every layer of the system was hand-built and tested.
            </p>
          </div>
          <div className="reveal rounded-3xl overflow-hidden shadow-card border-4 border-white">
            <img
              src={iotImg}
              alt="ESP32 microcontroller wired to environmental IoT sensors"
              className="w-full h-auto"
              loading="lazy"
              width={1280}
              height={896}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stacks.map((s, i) => (
            <div
              key={s.title}
              className="reveal rounded-2xl p-6 bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className={`w-12 h-12 rounded-xl ${colorMap[s.color]} flex items-center justify-center shadow-soft`}>
                <s.icon className="w-6 h-6 text-white" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">{s.title}</h3>
              <ul className="mt-3 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tomato mt-2 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
