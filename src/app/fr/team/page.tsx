"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TeamPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  // Team members data
  const teamMembers = [
    {
      name: "Robert Fradette",
      role: "Chef du parti et candidat",
      bio: "Dévoué à bâtir des communautés plus fortes grâce à des solutions politiques innovantes et un leadership collaboratif.",
      image: "/images/member_pictures/robert.JPG",
      email: "-",
      linkedin: "#"
    },
    // Add more team members here as needed
    {
      name: "Arjun Lokhande",
      role: "Directeur de campagne",
      bio: "Passionné par l'organisation de base et l'engagement communautaire.",
      image: "/images/member_pictures/default-avatar.png",
      email: "-",
      linkedin: "#"
    },
    {
      name: "Venkatesh Chaudhary",
      role: "Spécialiste des médias numériques et stratège en communication",
      bio: "Apporter des stratégies numériques innovantes et une narration créative pour amplifier la voix de notre communauté. Passionné par l'utilisation de la technologie pour engager les citoyens et stimuler un dialogue significatif.",
      image: "/images/member_pictures/default-avatar.png",
      email: "-",
      linkedin: "#"
    },
    {
      name: "Sandrine Rhodius",
      role: "Coordinatrice de sensibilisation communautaire",
      bio: "Créer des ponts entre le mouvement et les résidents locaux.",
      image: "/images/member_pictures/default-avatar.png",
      email: "-",
      linkedin: "#"
    },
    {
      name: "Andrée Deveault",
      role: "Membre",
      bio: "-",
      image: "/images/member_pictures/default-avatar.png",
      email: "-",
      linkedin: "#"
    },
    {
      name: "Constance Dufour",
      role: "Membre",
      bio: "-",
      image: "/images/member_pictures/default-avatar.png",
      email: "-",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-primary-50 to-orange-50">
      {/* Hero Image Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/cityline-mtl-plateau.png"
          alt="Notre équipe"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-primary-300 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Retour à l&apos;accueil</span>
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Rencontrez notre <span className="text-primary-400">équipe</span>
              </h1>
              <p className="text-xl text-white/90">
                Des leaders communautaires dévoués, des bénévoles passionnés et des citoyens ordinaires travaillant ensemble pour un changement positif.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Les personnes derrière le mouvement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre équipe diversifiée rassemble une expertise en politiques publiques, organisation communautaire et activisme de base pour servir notre communauté.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Member Photo */}
                <div className="relative h-80 w-full bg-gradient-to-br from-primary-100 to-primary-50">
                  {member.image === "/images/member_pictures/default-avatar.png" ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-primary-200 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary-600">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {member.bio}
                  </p>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 transition-colors group"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 group-hover:bg-primary-600 transition-colors duration-200">
                        <Mail className="w-4 h-4 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <span className="font-medium">{member.email}</span>
                    </a>
                    {member.linkedin !== "#" && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 transition-colors group"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 group-hover:bg-primary-600 transition-colors duration-200">
                          <Linkedin className="w-4 h-4 group-hover:text-white transition-colors duration-200" />
                        </div>
                        <span className="font-medium">Profil LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vous voulez rejoindre notre équipe ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nous sommes toujours à la recherche de personnes passionnées qui veulent faire une différence dans notre communauté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/fr/community')}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                S&apos;impliquer
              </button>
              <button
                onClick={() => router.push('/fr#contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Contactez-nous
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

