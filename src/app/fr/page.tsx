import Hero from "@/components/Hero";
import About from "@/components/About";
import Issues from "@/components/Issues";
import Experience from "@/components/Experience";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function FrHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-primary-50 to-green-50">
      <Navigation />
      <Hero />
      <About />
      <Issues />
      <Experience />
      <Donate />
      <Contact />
    </main>
  );
}
