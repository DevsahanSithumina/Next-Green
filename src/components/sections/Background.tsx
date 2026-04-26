import { AlertTriangle, Droplet, Sun, Bug, Snowflake, Eye, Brain, Thermometer } from "lucide-react";
import farmer from "@/assets/sri-lanka-farmer.jpg";

const challenges = [
  { icon: Thermometer, text: "Unstable temperature & humidity" },
  { icon: Sun, text: "Excessive heat inside greenhouses" },
  { icon: Droplet, text: "Water wastage due to manual irrigation" },
  { icon: Sun, text: "Poor lighting conditions" },
  { icon: Bug, text: "Sudden disease outbreaks" },
  { icon: Snowflake, text: "Frost & weather-related plant stress" },
  { icon: Eye, text: "Lack of real-time monitoring" },
  { icon: Brain, text: "Limited AI decision support for SMEs" },
];

export const Background = () => {
  return (
    <section className="section bg-muted/40 relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 reveal">
            <div className="rounded-[2rem] overflow-hidden shadow-card border-4 border-white sticky top-28">
              <img
                src={farmer}
                alt="Sri Lankan farmer tending tomato plants in a greenhouse"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1280}
                height={896}
              />
            </div>
          </div>

          <div className="lg:col-span-3 reveal">
            <div className="chip bg-tomato/10 text-tomato mb-4">
              <AlertTriangle className="w-3.5 h-3.5" /> Research Background
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy">
              The challenges Sri Lankan tomato farmers face
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Traditional tomato farming relies heavily on manual observation and farmer experience.
              This often leads to delayed responses, crop loss, poor yield, and inefficient resource usage.
              Our research proposes an intelligent greenhouse automation system using IoT and AI to address
              these long-standing problems.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {challenges.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl p-4 bg-card border border-border hover:border-tomato/50 hover:shadow-soft transition-all"
                >
                  <span className="w-10 h-10 rounded-lg bg-gradient-tomato flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-tomato-foreground" />
                  </span>
                  <p className="text-sm text-navy font-medium pt-2">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
