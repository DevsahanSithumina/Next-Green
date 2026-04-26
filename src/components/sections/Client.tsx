import { Handshake } from "lucide-react";

export const Client = () => {
  return (
    <section className="section bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-leaf/20 blur-3xl" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-tomato/20 blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-tomato shadow-glow mb-6">
            <Handshake className="w-8 h-8 text-tomato-foreground" />
          </span>
          <div className="chip bg-white/10 text-white mb-4">Client Coordination</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built <span className="text-gradient-sunset">with farmers</span>, for farmers
          </h2>
          <p className="mt-5 text-lg text-white/80 leading-relaxed">
            The Tomatoa team coordinates with clients and farming-related stakeholders to understand real
            greenhouse problems and practical farmer requirements. Their feedback continuously improves
            the automation logic, dashboard usability, and AI prediction solution.
          </p>
        </div>
      </div>
    </section>
  );
};
