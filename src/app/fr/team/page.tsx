"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from '@/contexts/LocaleContext';

export default function TeamPage() {
  const router = useRouter();
  const t = useTranslations('About');
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleBack = () => {
    router.back();
  };

  // Team members data
  const teamMembers = [
    {
      name: t('team.robert.name'),
      role: t('team.robert.role'),
      shortBio: t('team.robert.shortBio'),
      fullBio: t('team.robert.fullBio'),
      image: "/images/member_pictures/1_robert.png",
      email: "-",
      initial: "R"
    },
    {
      name: t('team.arjun.name'),
      role: t('team.arjun.role'),
      shortBio: t('team.arjun.shortBio'),
      fullBio: t('team.arjun.fullBio'),
      image: "/images/member_pictures/2_arjun.jpeg",
      email: "-",
      initial: "A"
    },
    {
      name: t('team.venkatesh.name'),
      role: t('team.venkatesh.role'),
      shortBio: t('team.venkatesh.shortBio'),
      fullBio: t('team.venkatesh.fullBio'),
      image: null,
      email: "-",
      initial: "V"
    },
    {
      name: t('team.sandrine.name'),
      role: t('team.sandrine.role'),
      shortBio: t('team.sandrine.shortBio'),
      fullBio: t('team.sandrine.fullBio'),
      image: "/images/member_pictures/4_Sandrine Rhodius.png",
      email: "-",
      initial: "S"
    },
    {
      name: t('team.andree.name'),
      role: t('team.andree.role'),
      shortBio: t('team.andree.shortBio'),
      fullBio: t('team.andree.fullBio'),
      image: "/images/member_pictures/5_Andrée Deveault.jpg",
      email: "-",
      initial: "A"
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

      {/* Leader Bio Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qui sommes-nous
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rencontrez les personnes derrière Citoyens en Action - des leaders communautaires dévoués, des bénévoles passionnés et des citoyens ordinaires travaillant ensemble pour un changement positif.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative rounded-2xl overflow-hidden w-96 h-96 shadow-2xl">
                <Image
                  src="/images/member_pictures/1_robert.png"
                  alt="Photo professionnelle de Robert Fradette"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-2">
                Chef du parti
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Robert Fradette
              </h3>
              <p className="text-xl text-primary-600 font-semibold">
                Candidat au conseil municipal
              </p>
              <p className="text-gray-700 text-lg">
                Fondateur de Citoyens en Action, un mouvement né dans Milton-Parc en phase de devenir un nouveau parti politique municipal officiellement reconnu, il en est le premier candidat indépendant de ce mouvement aux élections municipales 2025 dans le Plateau Mont-Royal.
              </p>
              <p className="text-gray-700 text-lg">
                Professionnel en Travail Social et en Écologie, Robert est un employé du CIUSSS Centre-Ouest de-l&apos;île-de-Montréal pour le service Info-Social 811 depuis 10 ans. Il est aussi propriétaire d&apos;une entreprise de gestion du territoire et de la faune qui a collaborée avec le Biodôme, la ville de Montréal, Longueuil et St-Bruno, Hydro-Québec, la Sépaq, et le Ministère des Transports sur des projets de protection de l&apos;Environnement.
              </p>
              <p className="text-gray-700 text-lg">
                Titulaire d&apos;un Baccalauréat en Travail Social et d&apos;un DEC en Gestion du territoire et de la faune, il poursuit ses études en Écologie à l&apos;UQAM.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200">
                  Administration publique
                </span>
                <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200">
                  Développement communautaire
                </span>
                <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200">
                  Innovation politique
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                onClick={() => setSelectedMember(index)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Member Photo */}
                <div className="relative h-80 w-full bg-gradient-to-br from-amber-200 to-amber-300">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-amber-100 flex items-center justify-center border-4 border-white">
                        <span className="text-5xl font-bold text-amber-700">
                          {member.initial}
                        </span>
                      </div>
                    </div>
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
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {member.shortBio}
                  </p>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-gray-500">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{member.email}</span>
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

      {/* Modal for Full Bio */}
      {selectedMember !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
              <div className="flex items-start gap-4">
                {teamMembers[selectedMember].image ? (
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary-100 flex-shrink-0">
                    <Image
                      src={teamMembers[selectedMember].image}
                      alt={teamMembers[selectedMember].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center border-4 border-amber-100 flex-shrink-0">
                    <span className="text-3xl font-bold text-amber-700">
                      {teamMembers[selectedMember].initial}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {teamMembers[selectedMember].name}
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    {teamMembers[selectedMember].role}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: teamMembers[selectedMember].fullBio }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

