import Hero from "@/components/Hero";
import About from "@/components/About";
import Issues from "@/components/Issues";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Issues />
      <Experience />
      <Contact />
    </main>
  );
}
