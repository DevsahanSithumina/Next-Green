import { Workflow } from "lucide-react";

const steps = [
  "Identify tomato plant growth challenges in Sri Lanka.",
  "Collect greenhouse environmental data using IoT sensors.",
  "Store and preprocess sensor data.",
  "Train machine-learning models using collected datasets.",
  "Use LSTM for time-series prediction.",
  "Use Random Forest Regressor for environmental prediction & automation decisions.",
  "Use Random Forest Classifier for disease and frost forecasting.",
  "Connect AI predictions with ESP32-based control systems.",
  "Automate watering, cooling, ventilation, and RGB lighting.",
  "Display real-time data and AI recommendations through a React dashboard.",
  "Validate system accuracy and test in real greenhouse conditions.",
  "Coordinate with farmers/clients and improve based on feedback.",
];

export const Methodology = () => {
  return (
    <section id="methodology" className="section bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="chip bg-tomato/15 text-tomato mb-4">
            <Workflow className="w-3.5 h-3.5" /> Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            From sensor data to <span className="text-gradient-sunset">autonomous decisions</span>
          </h2>
        </div>

        <div className="mt-14 relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tomato via-leaf to-sky md:-translate-x-1/2" />
          <ol className="space-y-6">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={i}
                  className={`reveal relative md:grid md:grid-cols-2 md:gap-8 ${isLeft ? "" : "md:[&>*:first-child]:col-start-2"}`}
                >
                  <div className={`pl-16 md:pl-0 ${isLeft ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition-colors">
                      <div className="text-xs uppercase tracking-widest text-tomato font-semibold">Step {i + 1}</div>
                      <p className="mt-2 text-white/90">{step}</p>
                    </div>
                  </div>
                  <span className="absolute left-6 md:left-1/2 top-5 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-tomato shadow-glow border-4 border-navy" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
