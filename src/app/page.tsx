import Hero from "@/app/_home/_components/Hero";
import Stats from "./_home/_components/Stats";
import Services from "./_home/_components/Services";
import Partnership from "./_home/_components/Partnership";
import Benefits from "./_home/_components/Benefits";
import Features from "./_home/_components/Features";
import Contact from "@/components/common/Contact";

export default function Home() {
  console.log("Home");
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Partnership />
      <Benefits />
      <Features />
      <Contact />
    </div>
  );
}
