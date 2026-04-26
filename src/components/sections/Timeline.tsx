import { CalendarClock } from "lucide-react";

const phases = [
  { p: "Phase 1", t: "Research problem identification & literature review" },
  { p: "Phase 2", t: "Requirement gathering & client coordination" },
  { p: "Phase 3", t: "IoT sensor setup & ESP32 integration" },
  { p: "Phase 4", t: "Dataset collection & preprocessing" },
  { p: "Phase 5", t: "Machine-learning model development" },
  { p: "Phase 6", t: "AI prediction & automation logic development" },
  { p: "Phase 7", t: "React dashboard development" },
  { p: "Phase 8", t: "System testing & accuracy validation" },
  { p: "Phase 9", t: "Final deployment & presentation preparation" },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="chip bg-sky/10 text-sky mb-4">
            <CalendarClock className="w-3.5 h-3.5" /> Project Timeline
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy">
            Nine phases, <span className="text-gradient-tomato">one full system</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {phases.map((ph, i) => (
            <div
              key={ph.p}
              className="reveal relative rounded-2xl p-6 bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-tomato" />
              <div className="text-xs uppercase tracking-widest text-tomato font-bold">{ph.p}</div>
              <p className="mt-3 text-lg font-semibold text-navy leading-snug">{ph.t}</p>
              <span className="mt-4 inline-block font-display text-4xl font-bold text-muted-foreground/15">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
