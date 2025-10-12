import Hero from "@/components/Hero";
import About from "@/components/About";
import Community from "@/components/Community";
import Issues from "@/components/Issues";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function EnHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-primary-50 to-green-50">
      <Navigation />
      <Hero />         {/* Section 1: WHAT - Vision & Mission */}
      <About />        {/* Section 2: WHO - The People & The Movement */}
      <Community />    {/* Section 3: WHERE - The Community & The Action */}
      <Issues />       {/* Platform/Issues */}
      <Donate />
      <Contact />
    </main>
  );
}
