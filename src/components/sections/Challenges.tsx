import { Mountain } from "lucide-react";

const challenges = [
  "Collecting accurate real-time sensor data",
  "Training ML models with suitable datasets",
  "Handling temperature & humidity variations",
  "Integrating ESP32 with multiple sensors",
  "Creating automated control logic",
  "Designing disease & frost forecasting models",
  "Testing automation in real environmental conditions",
  "Coordinating with clients & farmers",
  "Maintaining prediction accuracy",
  "Building a user-friendly farmer dashboard",
];

export const Challenges = () => {
  return (
    <section className="section bg-muted/40 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="chip bg-tomato/10 text-tomato mb-4">
            <Mountain className="w-3.5 h-3.5" /> Challenges We Faced
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy">
            The hard problems we <span className="text-gradient-tomato">solved along the way</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((c, i) => (
            <div
              key={i}
              className="reveal group rounded-2xl p-5 bg-card border border-border shadow-soft hover:shadow-card hover:border-tomato/40 hover:-translate-y-1 transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-tomato flex items-center justify-center font-display font-bold text-tomato-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-navy font-medium">{c}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
