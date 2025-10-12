"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Megaphone, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from '@/contexts/LocaleContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Community = () => {
  const t = useTranslations('Community');
  const locale = useLocale();
  const router = useRouter();

  // Local initiatives and community events
  const initiatives = [
    {
      icon: Calendar,
      title: t('initiatives.townHalls.title'),
      description: t('initiatives.townHalls.description'),
      color: "bg-blue-100 text-blue-600",
      image: "/images/community/town-hall.jpg"
    },
    {
      icon: Users,
      title: t('initiatives.volunteerEvents.title'),
      description: t('initiatives.volunteerEvents.description'),
      color: "bg-green-100 text-green-600",
      image: "/images/community/volunteers.jpg"
    },
    {
      icon: Megaphone,
      title: t('initiatives.doorKnocking.title'),
      description: t('initiatives.doorKnocking.description'),
      color: "bg-orange-100 text-orange-600",
      image: "/images/community/canvassing.jpg"
    }
  ];

  // Key locations/ridings
  const locations = [
    {
      name: "Milton-Parc",
      description: t('locations.miltonParc'),
      address: "Plateau-Mont-Royal District"
    },
    {
      name: "Mile End",
      description: t('locations.mileEnd'),
      address: "Plateau-Mont-Royal District"
    },
    {
      name: "Plateau East",
      description: t('locations.plateauEast'),
      address: "Plateau-Mont-Royal District"
    }
  ];

  const handleGetInvolved = () => {
    router.push(`/${locale}/community`);
  };

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-primary-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Map Section - Placeholder for actual map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 relative h-96 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/montreal_paint.jpeg"
            alt="Community Map"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {t('mapHeading')}
            </h3>
            <p className="text-white/90 text-lg">
              {t('mapSubheading')}
            </p>
          </div>
        </motion.div>

        {/* Key Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('locationsHeading')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-500"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {location.name}
                    </h4>
                    <p className="text-sm text-primary-600 font-medium mb-2">
                      {location.address}
                    </p>
                    <p className="text-gray-600">
                      {location.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Initiatives & Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('initiativesHeading')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${initiative.color} mb-4`}>
                    <initiative.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {initiative.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {initiative.description}
                  </p>
                  <button className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-200">
                    {t('learnMore')} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t('ctaHeading')}
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            {t('ctaSubheading')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetInvolved}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {t('joinUsButton')}
            </button>
            <button
              onClick={() => router.push(`/${locale}#contact`)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              {t('contactButton')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;

