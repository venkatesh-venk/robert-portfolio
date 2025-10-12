import Hero from "@/components/Hero";
import About from "@/components/About";
import Community from "@/components/Community";
import Issues from "@/components/Issues";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function FrHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-primary-50 to-green-50">
      <Navigation />
      <Hero />         {/* Section 1: QUOI - Vision & Mission */}
      <About />        {/* Section 2: QUI - Les Personnes & Le Mouvement */}
      <Community />    {/* Section 3: OÙ - La Communauté & L'Action */}
      <Issues />       {/* Plateforme/Enjeux */}
      <Donate />
      <Contact />
    </main>
  );
}
