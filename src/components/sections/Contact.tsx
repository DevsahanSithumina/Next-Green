import { Mail, MapPin, Send, Building2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out — the Tomatoa team will get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-tomato/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-leaf/20 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="reveal">
            <div className="chip bg-tomato/15 text-tomato mb-4">
              <Mail className="w-3.5 h-3.5" /> Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's talk <span className="text-gradient-sunset">smart agriculture</span>
            </h2>
            <p className="mt-5 text-lg text-white/80 leading-relaxed">
              Interested in smart agriculture, IoT, AI-based greenhouse automation, or tomato plant growth
              optimization? Contact the Tomatoa team for more information.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl p-4 bg-white/5 border border-white/10">
                <span className="w-11 h-11 rounded-xl bg-gradient-tomato flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-tomato-foreground" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-tomato font-semibold">Institution</div>
                  <div className="font-semibold mt-1">Sri Lanka Institute of Information Technology</div>
                  <div className="text-sm text-white/70">Malabe, Sri Lanka</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl p-4 bg-white/5 border border-white/10">
                <span className="w-11 h-11 rounded-xl bg-gradient-leaf flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-leaf-foreground" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-leaf font-semibold">Project</div>
                  <div className="font-semibold mt-1">Tomatoa — Next Gen Smart Greenhouse</div>
                  <div className="text-sm text-white/70">Final-Year Research Project</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl shadow-card"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-tomato focus:ring-2 focus:ring-tomato/30 transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-tomato focus:ring-2 focus:ring-tomato/30 transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-tomato focus:ring-2 focus:ring-tomato/30 transition resize-none"
                  placeholder="Tell us about your interest in Tomatoa..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-tomato text-tomato-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
