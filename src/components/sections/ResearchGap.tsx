import { Target, X, Check } from "lucide-react";

export const ResearchGap = () => {
  return (
    <section id="gap" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="chip bg-sky/10 text-sky mb-4">
            <Target className="w-3.5 h-3.5" /> Research Gap
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy">
            What's missing in <span className="text-gradient-tomato">today's greenhouse systems</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Most greenhouse systems in Sri Lanka offer only basic monitoring or manual control.
            Few combine IoT data, ML prediction, automated control, disease forecasting, frost prediction,
            RGB lighting optimization, watering and ventilation automation in a single, integrated platform.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="reveal rounded-3xl p-8 bg-card border border-border shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </span>
              <h3 className="text-2xl font-bold text-navy">Existing Systems</h3>
            </div>
            <ul className="space-y-3">
              {["Basic monitoring only", "Manual control & decisions", "No disease forecasting", "No frost prediction", "Static RGB lighting", "Fragmented tools"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl p-8 bg-gradient-leaf text-leaf-foreground shadow-card relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
            <div className="flex items-center gap-3 mb-6 relative">
              <span className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Check className="w-6 h-6" />
              </span>
              <h3 className="text-2xl font-bold">Tomatoa Approach</h3>
            </div>
            <ul className="space-y-3 relative">
              {["Real-time IoT telemetry", "AI-driven autonomous control", "Disease & frost forecasting", "Adaptive RGB optimization", "Automated watering & cooling", "Unified dashboard for farmers"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 reveal rounded-3xl p-8 md:p-10 bg-navy text-navy-foreground shadow-card relative overflow-hidden">
          <div className="absolute -left-10 -top-10 w-64 h-64 rounded-full bg-tomato/20 blur-3xl" />
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-leaf/20 blur-3xl" />
          <div className="relative">
            <div className="text-sm uppercase tracking-widest text-tomato font-semibold">Identified Gap</div>
            <p className="mt-3 text-2xl md:text-3xl font-display font-semibold leading-snug">
              "There is a lack of an integrated AI and IoT-based smart greenhouse system for tomato plants in
              Sri Lanka that can collect real-time data, predict environmental risks, automate greenhouse components,
              and provide intelligent decision support for farmers."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
