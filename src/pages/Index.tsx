import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Background } from "@/components/sections/Background";
import { ResearchGap } from "@/components/sections/ResearchGap";
import { Solution } from "@/components/sections/Solution";
import { Components } from "@/components/sections/Components";
import { Tech } from "@/components/sections/Tech";
import { Stats } from "@/components/sections/Stats";
import { Dashboard } from "@/components/sections/Dashboard";
import { Methodology } from "@/components/sections/Methodology";
import { Impact } from "@/components/sections/Impact";
import { Challenges } from "@/components/sections/Challenges";
import { Timeline } from "@/components/sections/Timeline";
import { Client } from "@/components/sections/Client";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Dashboard />
      <About />
      <Background />
      <ResearchGap />
      <Solution />
      <Components />
      <Tech />
      <Stats />
      <Methodology />
      <Impact />
      <Challenges />
      <Timeline />
      <Client />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
