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
          alt="Our Team"
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
          <span>Back to Home</span>
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
                Meet Our <span className="text-primary-400">Team</span>
              </h1>
              <p className="text-xl text-white/90">
                Dedicated community leaders, passionate volunteers, and everyday citizens working together for positive change.
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
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the people behind Citoyens en Action - dedicated community leaders, passionate volunteers, and everyday citizens working together for positive change.
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
                  alt="Professional Photo of Robert Fradette"
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
                Party Leader
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Robert Fradette
              </h3>
              <p className="text-xl text-primary-600 font-semibold">
                Candidate for City Council
              </p>
              <p className="text-gray-700 text-lg">
                Founder of Citoyens en Action, a movement born in Milton-Parc and now evolving into a new officially recognized municipal political party, he is running as an independent candidate in the 2025 municipal elections in the Plateau-Mont-Royal district.
              </p>
              <p className="text-gray-700 text-lg">
                As a professional in Social Work and Ecology, he has been employed for the past ten years by the CIUSSS Centre-Ouest-de-l&apos;Île-de-Montréal&apos;s Info-Social 811 service. He is also the owner of a Land and Wildlife management company that has collaborated with the Biodôme, the City of Montréal, Longueuil and St-Bruno, Hydro-Québec, Sépaq, and the Ministry of Transport on various environmental protection projects.
              </p>
              <p className="text-gray-700 text-lg">
                He holds a Bachelor&apos;s degree in Social Work and a DEC in Land and Wildlife Management, and is pursuing studies in Ecology at UQAM.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200">
                  Public Administration
                </span>
                <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200">
                  Community Development
                </span>
                <span className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200">
                  Policy Innovation
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
              The People Behind the Movement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise in public policy, community organizing, and grassroots activism to serve our community.
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
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We&apos;re always looking for passionate individuals who want to make a difference in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/en/community')}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Involved
              </button>
              <button
                onClick={() => router.push('/en#contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Contact Us
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

