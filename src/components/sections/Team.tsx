import { GraduationCap, Award } from "lucide-react";

import sahabanduImg from "../../assets/Hiran.jpg";
import sithumnaImg from "../../assets/Sithumina.jpg";
import anthonyImg from "../../assets/rasindu.jpg";
import anuradhaImg from "../../assets/Anuradha.jpg";
import siriwardaneImg from "../../assets/siri.jpg";
import lokeshaImg from "../../assets/Lokesha.jpg";

const team = [
  {
    name: "Prof. Anuradha Karunasena",
    email: "anuradha.k@sliit.lk",
    role: "Supervisor",
    contribution:
      "Guide the research team throughout the project lifecycle. Review and approve the research topic, objectives, and scope. Provide academic guidance for IoT, AI, machine learning, and smart agriculture areas. Support the team in identifying the research gap and improving the proposed solution. Monitor project progress and ensure the work follows the approved timeline. Review research documents, presentations, and final project reports. Advise the team on methodology, dataset preparation, model selection, and result validation. Evaluate the technical implementation of the smart greenhouse system. Provide feedback to improve system accuracy, usability, and research quality. Ensure the project follows university research standards and ethical guidelines.",
    color: "tomato",
    image: anuradhaImg,
  },
  {
    name: "Ms. Lokesha Weerasinghe",
    email: "lokesha.w@sliit.lk",
    role: "Co-Supervisor",
    contribution:
      "Guide the research team throughout the project lifecycle. Review and approve the research topic, objectives, and scope. Provide academic guidance for IoT, AI, machine learning, and smart agriculture areas. Support the team in identifying the research gap and improving the proposed solution. Monitor project progress and ensure the work follows the approved timeline. Review research documents, presentations, and final project reports. Advise the team on methodology, dataset preparation, model selection, and result validation. Evaluate the technical implementation of the smart greenhouse system. Provide feedback to improve system accuracy, usability, and research quality. Ensure the project follows university research standards and ethical guidelines.",
    color: "sky",
    image: lokeshaImg,
  },
  {
    name: "E.H.W. Sahabandu",
    reg: "IT22358516",
    role: "Embedded Systems & Smart Sensor Integration",
    contribution:
      "Embedded systems, IoT for smart agriculture, ML decision-making, environmental data model training, intelligent decision-support logic, smart sensor integration, and sustainable automation.",
    color: "tomato",
    image: sahabanduImg,
  },
  {
    name: "Sithumna B.K.D.",
    reg: "IT22316936",
    role: "AI Detection & Preventative Control",
    contribution:
      "IoT, data science, AI, sensor data analytics, AI-driven detection systems, preventative control systems, proactive automation methods, environmental data streams, and intelligent pattern recognition.",
    color: "leaf",
    image: sithumnaImg,
  },
  {
    name: "C.R.H. Anthony",
    reg: "IT22313584",
    role: "Sensor Fusion & Embedded ML",
    contribution:
      "Sensor data fusion, embedded programming, ML for real-time control, AI, embedded systems, IoT applications, real-time data handling, hardware programming, and AI model implementation on microcontrollers.",
    color: "sky",
    image: anthonyImg,
  },
  {
    name: "Siriwardana L.W.N.R.",
    reg: "IT22572356",
    role: "Predictive Analytics & Real-Time Control",
    contribution:
      "AI, IoT, embedded systems, real-time control, predictive analytics, time-series forecasting, embedded hardware control, environmental prediction models, and real-time actuation techniques.",
    color: "sunlight",
    image: siriwardaneImg,
  },
];

const colorMap: Record<string, string> = {
  tomato: "bg-gradient-tomato",
  leaf: "bg-gradient-leaf",
  sky: "bg-gradient-sky",
  sunlight: "bg-gradient-sunset",
};

export const Team = () => {
  return (
    <section id="team" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="chip bg-tomato/10 text-tomato mb-4">
            <GraduationCap className="w-3.5 h-3.5" /> Meet the Team
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-navy">
            The{" "}
            <span className="text-gradient-tomato">
              SLIIT research students
            </span>{" "}
            behind Tomatoa
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <article
              key={m.reg || m.email}
              className="reveal group rounded-3xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-2 transition-all overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`relative aspect-[4/5] ${
                  colorMap[m.color]
                } overflow-hidden`}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <h3 className="text-xl font-display font-bold">
                    {m.name}
                  </h3>

                  <div className="text-xs font-mono opacity-90">
                    {m.reg || m.email}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-tomato font-bold">
                  {m.role}
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {m.contribution}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Supervisors */}
        <div id="supervisors" className="mt-20 reveal">
          <div className="text-center mb-10">
            <div className="chip bg-sky/10 text-sky mb-4">
              <Award className="w-3.5 h-3.5" /> Supervisors
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-navy">
              Guided by{" "}
              <span className="text-gradient-tomato">
                expert academic supervision
              </span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.slice(0, 2).map((s) => (
              <div
                key={s.email}
                className="rounded-3xl bg-card border border-border shadow-soft p-6 flex items-center gap-5 hover:shadow-card transition-shadow"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-20 h-20 rounded-2xl object-cover shrink-0"
                />

                <div>
                  <div className="text-xs uppercase tracking-wider text-sky font-bold">
                    {s.role}
                  </div>

                  <div className="text-lg font-display font-bold text-navy mt-1">
                    {s.name}
                  </div>

                  <div className="text-xs text-muted-foreground mt-1">
                    SLIIT, Malabe
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};