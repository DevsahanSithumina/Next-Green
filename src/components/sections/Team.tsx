import { GraduationCap, Award, FileText } from "lucide-react";

import sahabanduImg from "../../assets/Hiran.jpg";
import sithumnaImg from "../../assets/Sithumina.jpg";
import anthonyImg from "../../assets/rasindu.jpg";
import anuradhaImg from "../../assets/Anuradha.jpg";
import siriwardaneImg from "../../assets/siri.jpg";
import lokeshaImg from "../../assets/Lokesha.jpg";

/* ================= TEAM DATA ================= */
const team = [
  {
    name: "Prof. Anuradha Karunasena",
    email: "anuradha.k@sliit.lk",
    role: "Supervisor",
    contribution: "Guide the research team throughout the project lifecycle...",
    color: "tomato",
    image: anuradhaImg,
  },
  {
    name: "Ms. Lokesha Weerasinghe",
    email: "lokesha.w@sliit.lk",
    role: "Co-Supervisor",
    contribution: "Guide the research team throughout the project lifecycle...",
    color: "sky",
    image: lokeshaImg,
  },
  {
    name: "E.H.W. Sahabandu",
    reg: "IT22358516",
    role: "Embedded Systems & Smart Sensor Integration",
    contribution: "Embedded systems, IoT, ML decision-making...",
    color: "tomato",
    image: sahabanduImg,
    pdf: "https://evpemdtcklcfdzfrufai.supabase.co/storage/v1/object/public/pdfs/IT22358516%20(1).pdf",
  },
  {
    name: "Sithumna B.K.D.",
    reg: "IT22316936",
    role: "AI Detection & Preventative Control",
    contribution: "IoT, AI, sensor analytics...",
    color: "leaf",
    image: sithumnaImg,
    pdf: "https://evpemdtcklcfdzfrufai.supabase.co/storage/v1/object/public/pdfs/IT22316936%20%20(1).pdf",
  },
  {
    name: "C.R.H. Anthony",
    reg: "IT22313584",
    role: "Sensor Fusion & Embedded ML",
    contribution: "Sensor fusion, embedded ML...",
    color: "sky",
    image: anthonyImg,
    pdf: "https://evpemdtcklcfdzfrufai.supabase.co/storage/v1/object/public/pdfs/IT22313584%20(1).pdf",
  },
  {
    name: "Siriwardana L.W.N.R.",
    reg: "IT22572356",
    role: "Predictive Analytics & Real-Time Control",
    contribution: "Predictive analytics, IoT...",
    color: "sunlight",
    image: siriwardaneImg,
    pdf: "https://evpemdtcklcfdzfrufai.supabase.co/storage/v1/object/public/pdfs/IT22572356Siriwardana%20LWNR%20(1).pdf",
  },
];

/* ================= FINAL REPORTS ================= */
const finalReports = [
  {
    title: "Project Proposal Document",
    link: "https://evpemdtcklcfdzfrufai.supabase.co/storage/v1/object/public/pdfs/CamScanner%2022-07-2025%2006.59%20proposal.pdf",
  },
  {
    title: "C.R.H. Anthony - Final Report",
    link: "https://evpemdtcklcfdzfrufai.supabase.co/storage/v1/object/public/pdfs/IT22313584%20-%20final.pdf",
  },
  {
    title: "E.H.W. Sahabandu - Final Report",
    link: "https://evpemdtcklcfdzfrufai.supabase.co/storage/v1/object/public/pdfs/IT22358516-2%20(1)%20final.pdf",
  },
  {
    title: "Sithumna B.K.D. - Final Report",
    link: "https://evpemdtcklcfdzfrufai.supabase.co/storage/v1/object/public/pdfs/IT22316936%20%20(1)final.pdf",
  },
  {
    title: "Siriwardana L.W.N.R. - Final Report",
    link: "https://evpemdtcklcfdzfrufai.supabase.co/storage/v1/object/public/pdfs/IT22572356%20(1)%20final.pdf",
  },
];

const colorMap: Record<string, string> = {
  tomato: "bg-gradient-tomato",
  leaf: "bg-gradient-leaf",
  sky: "bg-gradient-sky",
  sunlight: "bg-gradient-sunset",
};

/* ================= COMPONENT ================= */
export const Team = () => {
  return (
    <section id="team" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div className="container relative">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="chip bg-tomato/10 text-tomato mb-4">
            <GraduationCap className="w-3.5 h-3.5" /> Meet the Team
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-navy">
            SLIIT Research Team
          </h2>
        </div>

        {/* TEAM GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <article
              key={m.reg || m.email}
              className="rounded-3xl bg-card border shadow-soft hover:-translate-y-2 transition"
            >
              <div className={`aspect-[4/5] ${colorMap[m.color]} overflow-hidden`}>
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold">{m.name}</h3>
                <div className="text-xs text-muted-foreground">
                  {m.reg || m.email}
                </div>

                <div className="text-xs text-tomato font-bold mt-2">
                  {m.role}
                </div>

                {m.pdf && (
                  <a
                    href={m.pdf}
                    target="_blank"
                    className="inline-flex items-center gap-2 mt-3 text-xs text-white bg-navy px-3 py-2 rounded-lg"
                  >
                    <FileText className="w-4 h-4" />
                    View Report
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* FINAL REPORTS */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <div className="chip bg-leaf/10 text-leaf mb-4">
              <FileText className="w-3.5 h-3.5" /> Final Reports
            </div>

            <h3 className="text-3xl font-bold">
              Project Documentation & Final Reports
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {finalReports.map((r, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl shadow-soft">
                <h4 className="font-semibold">{r.title}</h4>

                <a
                  href={r.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-white bg-leaf px-4 py-2 rounded-lg"
                >
                  <FileText className="w-4 h-4" />
                  Open PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};