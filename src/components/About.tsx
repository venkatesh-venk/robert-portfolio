"use client";

import { motion } from "framer-motion";
import { Users, Heart, Shield } from "lucide-react";
import { useTranslations } from '@/contexts/LocaleContext';
import Image from 'next/image';

const About = () => {
  const t = useTranslations('About');

  const values = [
    {
      icon: Users,
      title: t('values.communityFirst.title'),
      description: t('values.communityFirst.description')
    },
    {
      icon: Heart,
      title: t('values.compassionateLeadership.title'),
      description: t('values.compassionateLeadership.description')
    },
    {
      icon: Shield,
      title: t('values.integrityTransparency.title'),
      description: t('values.integrityTransparency.description')
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white-100">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative rounded-full overflow-hidden w-96 h-96">
              <Image
                src="/images/member_pictures/robert.JPG"
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
            <h3 className="text-2xl font-bold text-gray-800">
              {t('visionTitle')}
            </h3>
            <p className="text-gray-700">
              {t('visionText1')}
            </p>
            <p className="text-gray-700">
              {t('visionText2')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/90 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                {t('skills.publicAdministration')}
              </span>
              <span className="bg-white/90 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                {t('skills.communityDevelopment')}
              </span>
              <span className="bg-white/90 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                {t('skills.policyInnovation')}
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white/70 hover:bg-white/90 transition-all duration-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                <value.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700">
                {value.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;