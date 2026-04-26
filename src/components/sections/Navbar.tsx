import { useEffect, useState } from "react";
import { Menu, X, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research Gap", href: "#gap" },
  { label: "Components", href: "#components" },
  { label: "Technologies", href: "#tech" },
  { label: "Methodology", href: "#methodology" },
  { label: "Impact", href: "#impact" },
  { label: "Timeline", href: "#timeline" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-soft py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-10 h-10 rounded-xl bg-gradient-tomato flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
            <Sprout className="w-5 h-5 text-tomato-foreground" />
          </span>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-navy">Tomatoa</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Smart Greenhouse</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-navy/80 hover:text-tomato transition-colors rounded-lg hover:bg-tomato/5"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-tomato text-tomato-foreground text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
        >
          Get in Touch
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-navy hover:bg-muted"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-4 animate-fade-in">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-navy hover:bg-tomato/10 hover:text-tomato rounded-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-3 rounded-full bg-gradient-tomato text-tomato-foreground font-semibold"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
