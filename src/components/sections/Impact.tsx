import { Sprout, BarChart3, Eye, Leaf, Droplets, ShieldCheck, TrendingUp, Recycle, Brain } from "lucide-react";
import aerial from "@/assets/greenhouse-aerial.jpg";

const points = [
  { icon: Sprout, text: "Supports smart farming in Sri Lanka" },
  { icon: BarChart3, text: "Helps farmers make data-driven decisions" },
  { icon: Eye, text: "Reduces manual monitoring" },
  { icon: Leaf, text: "Improves tomato plant growth" },
  { icon: Droplets, text: "Reduces water & energy wastage" },
  { icon: ShieldCheck, text: "Prevents crop damage via early prediction" },
  { icon: TrendingUp, text: "Increases productivity & efficiency" },
  { icon: Recycle, text: "Supports sustainable agriculture" },
  { icon: Brain, text: "Encourages AI adoption in farming" },
];

export const Impact = () => {
  return (
    <section id="impact" className="section relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={aerial} alt="Aerial view of a tropical greenhouse complex" className="w-full h-full object-cover" loading="lazy" width={1280} height={896} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal text-white">
            <div className="chip bg-leaf/20 text-leaf mb-4">
              <TrendingUp className="w-3.5 h-3.5" /> Research Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Moving Sri Lanka toward <span className="text-gradient-sunset">next-gen agriculture</span>
            </h2>
            <p className="mt-5 text-lg text-white/80 leading-relaxed">
              Tomatoa introduces automation, AI prediction, and real-time monitoring to greenhouse farming.
              It can improve tomato plant growth, reduce manual work, save water, prevent diseases, reduce
              environmental risks, and increase crop yield.
            </p>
          </div>

          <div className="reveal grid sm:grid-cols-2 gap-3">
            {points.map((p, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-4 flex items-start gap-3 hover:bg-white/90 transition-colors"
              >
                <span className="w-10 h-10 rounded-lg bg-gradient-leaf flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-leaf-foreground" />
                </span>
                <p className="text-sm font-medium text-navy pt-2">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
