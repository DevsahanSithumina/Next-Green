import { Sprout, Github, Mail, Linkedin } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Research Background", href: "#gap" },
  { label: "Components", href: "#components" },
  { label: "Methodology", href: "#methodology" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const focus = ["IoT", "AI", "Machine Learning", "Smart Agriculture", "Tomato Optimization", "Greenhouse Automation"];

export const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="container relative py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-gradient-tomato flex items-center justify-center shadow-glow">
                <Sprout className="w-6 h-6 text-tomato-foreground" />
              </span>
              <div>
                <div className="font-display font-bold text-xl">Tomatoa</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Next Gen Smart Greenhouse</div>
              </div>
            </a>
            <p className="mt-5 text-white/70 max-w-md leading-relaxed">
              An IoT and AI-based smart greenhouse automation system for tomato plant cultivation.
              Developed by SLIIT research students to support next-generation agriculture in Sri Lanka.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {focus.map((f) => (
                <span key={f} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {[Github, Mail, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-tomato hover:border-tomato transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/70 hover:text-tomato transition-colors text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Institution</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Sri Lanka Institute of <br /> Information Technology
            </p>
            <p className="text-sm text-white/60 mt-2">Malabe, Sri Lanka</p>
            <p className="text-xs text-white/50 mt-4">Supervised by Prof. Anuradha Karunasena & Ms. Lokesha Weerasingha </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Tomatoa Research Team. All rights reserved.</p>
          <p> SLIIT Final-Year Project</p>
        </div>
      </div>
    </footer>
  );
};
